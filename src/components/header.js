import { LitElement, html, css } from 'lit';

class Headerreto extends LitElement { 
  static styles = css`
    header {
      background-color: #000c5c;
      color: white;
      padding: 15px;
      text-align: center;
    }

    h1,
    p {
      margin: 0;
    }
  `;

  static properties = {
    titulo: { type: String }
  };

  constructor() {
    super();
    this.titulo = "Países De América";
  }

  render() {
    return html`
      <header>
        <h1>${this.titulo}</h1>
        <p>Información de países, capitales y población</p>
      </header>
    `;
  }
}

customElements.define('header-reto', Headerreto);