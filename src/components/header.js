import { LitElement, html, css } from 'lit';

class Headerreto extends LitElement { 
  static styles = css`
    header {
      background-color: #000c5c;
      color: white;
      padding: 15px;
      text-align: center;
    }

    p {
      margin: 0;
    }
  `;

  static properties = {
    descripcion: { type: String }
  };

  constructor() {
    super();
    this.descripcion = "Información de países, capitales y población";
  }

  render() {
    return html`
      <header>
        <p>${this.descripcion}</p>
      </header>
    `;
  }
}

customElements.define('header-reto', Headerreto);