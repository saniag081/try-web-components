class myElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
			<section>
				<h1>
					<slot name="title"></slot>
				</h1>
				<div>
					<p>
						<slot name="parrafo"></slot>
					</p>
				</div>
			</section>
			${this.getStyles()}
		`;
		return template;
	}
	getStyles() {
		return `
		<style>
			:host {
				display: inline-block;
				min-width: 300px;
				width: 100%;
				max-width: 450px;
				font-size: 20px;
				background: gray;
			}
			:host(.blue) {
				background: blue;
			}
			:host([yellow]) {
				background: yellow;
			}
			:host([yellow]) h1 {
				color: gray;
			}
			:host-context(article.card) {
				display: block;
				min-width: 100%;
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