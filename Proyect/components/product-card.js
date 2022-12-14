class ProductCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	getTempate() {
		const template = document.createElement('template');
		template.innerHTML = `
			<main>
				<seection>
					<img />
				</seection>
				<seection>
					<div>
						<h2>Hola Mundo</h2>
						<p></p>
						<h3></h3>
						<button></button>
					</div>
				</seection>
			</main>
		`;
		return template;
	}
	render() {
		this.shadowRoot.appendChild(this.getTempate().content.cloneNode(true));
	}
	connectedCallback() {
		this.render();
	}
}

customElements.define('product-card', ProductCard);