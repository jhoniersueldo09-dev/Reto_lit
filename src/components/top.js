import { LitElement, html, css } from 'lit';

class TopReto extends LitElement {
  static styles = css `
    .top {
      background-color: #cb0a0a;
      margin: 0;
      padding: 5px;
      color: white;
      text-align: center;
    }
  `;

  static properties = {
    titulo: {type: String}
  };

  constructor() {
    super();
    this.titulo = "Países De América";
  }
  render() {
    return html`
    <div class="top">
      <h1>${this.titulo}</h1>
    </div>    
    `;
  }
}

customElements.define("top-reto", TopReto);