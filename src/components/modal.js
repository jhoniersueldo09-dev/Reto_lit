import { LitElement, html, css } from 'lit';

class ModalPais extends LitElement {

  static properties = {
    pais: { type: Object }
  };
  static styles = css`
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .contenido {
      background: white;
      padding: 20px;
      border-radius: 10px;
      width: 300px;
      text-align: center;
    }

    button {
     cursor: pointer;
     color: red;
    }
     
  `;

  cerrar() {
    this.dispatchEvent(new CustomEvent('cerrar'));
  }

  render() {
    if (!this.pais) return html``;
    return html`
      <div class="modal">
        <div class="contenido">
          <h2>${this.pais.name.common}</h2>
          <p>
            Capital:
            ${this.pais.capital?.[0]}
          </p>
          <p>
            Población:
            ${this.pais.population}
          </p>
          <button @click=${this.cerrar}>
            Cerrar
          </button>
        </div>
      </div>

    `;
  }
}

customElements.define('modal-pais', ModalPais);