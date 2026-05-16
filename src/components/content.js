import { LitElement, html, css } from 'lit';
import './maincontent.js';

class ContentReto extends LitElement {
  static styles = css`
    :host {
      padding: 40px 20px;
      display: flex;
      justify-content: center;
    }

    .content-piola {
      border: 2px solid #000000;      
      border-radius: 12px;
      padding: 25px;

    }
  `;

  render() {
    return html`
      <div class="content-piola">
        <main-content></main-content>
      </div>
    `;
  }
}

customElements.define('content-reto', ContentReto);