import { LitElement, html, css } from 'lit';

class FooterReto extends LitElement {
  static styles = css `
     footer {
      background-color: #000c5c;
      padding: 15px;
      color: white;
      text-align: center;
    }
    p {
      margin: 0;
    }
  `;

    static properties = {
        Footer: { type: String }
    };

    constructor() {
        super();
        this.Footer = "Reto Países De América";
    }

    render() {
      return html`
        <footer>
            <p>${this.Footer}</p>
        </footer>
        `;
    }
}   
customElements.define("footer-reto", FooterReto);