class MyCustomElemet extends HTMLElement {
	constructor() {
		super();
		console.log('Hola desde el constructor - Memoria');
	}
	connectedCallback() {
		console.log('Hola desde el DOM');
	}
	disconnectedCallback() {
		console.log('Adios del DOM');
	}
}

customElements.define('my-custom-element', MyCustomElemet);

document.querySelector('my-custom-element').remove();