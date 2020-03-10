class ListaDeContatos {

	constructor() {
		this._contatos = [];
	}

	adiciona(contato) {
		this._contatos.push(contato);
	}

	apaga() {
		this._contatos = [];
	}

	get contatos() {
		return this._contatos;
	}	
}