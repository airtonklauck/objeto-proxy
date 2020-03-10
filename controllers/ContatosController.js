class ContatosController {

	constructor() {

		let $ = document.querySelector.bind(document);

		let self = this;
		this._listaDeContatos = new Proxy(new ListaDeContatos(), {
			get(target, prop, receiver) {

				if(typeof(target[prop]) == typeof(Function) && ['adiciona', 'apaga'].includes(prop)) {
					return function() {
						Reflect.apply(target[prop], target, arguments);
						self._contatosView.update(target);
					}
				}

				return Reflect.get(target, prop, receiver);
			}
		});

		this._contatosView = new ContatosView($('.tabela'));

		this._listaDeContatos.adiciona(new Contato('João', 'joao@email.com', '(43)984624376'));
		this._listaDeContatos.adiciona(new Contato('Emily', 'emily@email.com', '(41)994561432'));
		this._listaDeContatos.adiciona(new Contato('Tiago', 'tiago@email.com', '(43)980304527'));
		this._listaDeContatos.adiciona(new Contato('Valeska', 'valeska@email.com', '(48)973026387'));

		this._inputNome = $('#nome');
		this._inputEmail = $('#email');
		this._inputTelefone = $('#telefone');
	}

	adiciona(event) {
		event.preventDefault();
		this._listaDeContatos.adiciona(this._criaContato());
		this._limpaFormulario();
	}

	apaga() {
		this._listaDeContatos.apaga();
	}

	_criaContato() {
		return new Contato(
			this._inputNome.value,
			this._inputEmail.value,
			this._inputTelefone.value);
	}

	_limpaFormulario() {
		this._inputNome.value = '';
		this._inputEmail.value = '';
		this._inputTelefone.value = '';
		this._inputNome.focus();
	}
}