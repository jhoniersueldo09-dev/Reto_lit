import { LitElement, html, css } from 'lit';

class HeaderReto extends LitElement { 
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
    top: { type: String }
  };

  constructor() {
    super();
    this.top = "Información de países, capitales y población";
  }

  render() {
    return html`
      <header>
        <p>${this.top}</p>
      </header>
    `;
  }
}

customElements.define('header-reto', HeaderReto);