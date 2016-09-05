class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData =  $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	limpaConsole() {
		this._inputData.value('');
		this._inputQuantidade.value('');
		this._inputValor.value('');
		this._inputData.focus();
	}

	adiciona(event) {
		event.preventDefault();

		let data = new Date(...this._inputData.value
			.split('-').reverse().join('/')
			.split('-')
			.map((item, indice) => item + indice % 2
				)
			);

		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);
		console.log(data);
	}
}