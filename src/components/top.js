import { LitElement, html, css } from 'lit';

class TopReto extends LitElement {
  static styles = css `
   :host {
    display: block;
    height: 30px;
    background-color: #c61a1a;
   }
  `;
  
  render() {
    return html``;
  }
}

customElements.define("top-reto", TopReto);