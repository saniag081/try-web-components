const template = document.createElement('div');
template.innerHTML = `
	<style>
		p {
			color: red;
		}
	</style>
	<p>Hola Mundo</p>
	<p>texto ejemplo</p>
`;

console.log('prueba');
class myElement extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.appendChild(template);
	}
}

customElements.define('my-element', myElement);