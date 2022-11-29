class myElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
			<section>
				<h2>Hola Mundo</h2>
				<div>
					<p>Texto de ejemplo</p>
				</div>
			</section>
			${this.getStyles()}
		`;
		return template;
	}
	getStyles() {
		return `
			<style>
				h2 {
					color: red;
				}
			</style>
		`;
	}
	render() {
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
	}
	connectedCallback() {
		this.render();
	}
}

customElements.define('my-element', myElement);