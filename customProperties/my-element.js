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
				--primary-color: tomato;
				--secundary-color: salmon;
				--heading-primary: 30px;
				--hrading-secundary: 25px;
				display: inline-block;
				width: 100%;
				min-width: 300px;
				max-width: 350px;
			}
			section {
				background: var(--primary-color);
			}
			section div {
				background: var(--secundary-color);
			}
			h1 {
				font-size: var(--heading-primary);
			}
			p {
				font-size: var(--hrading-secundary);
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