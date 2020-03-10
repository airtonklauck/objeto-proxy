class ContatosView {

	constructor(elemento) {
		this._elemento = elemento;
	}
	
	_template(listaDeContatos) {
		return `
			<table class="tabela">
			    <thead class="tabela_cabecalho">
			        <tr>
			            <th>Nome</th>
			            <th>Email</th>
			            <th>Telefone</th>
			        </tr>
			    </thead>
			    <tbody class="tabela_corpo">
			        ${listaDeContatos
			        	.contatos
			        	.map(c => `
			        		<tr>
			        			<td>${c.nome}</td>
			        			<td>${c.email}</td>
			        			<td>${c.telefone}</td>
			        		</tr>
			        		`).join('')}
			    </tbody>
			</table>
		`;
	}

	update(model) {
		this._elemento.innerHTML = this._template(model);
	}
}