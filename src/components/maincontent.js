import { LitElement, html, css } from 'lit';
import './modal.js';

class ListaPaises extends LitElement {
  static styles = css`
  .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);  
      gap: 20px;
    }

    .card {
      border: 1px solid #000000;
      border-radius: 8px;
      padding: 15px;
      text-align: center;
    }

    .card img {
      max-height: 120px;
      object-fit: contain;
    }

    h3 {
     cursor: pointer;
     transition: 0.3s;
    }

    h3:hover {
     color: #0ba920;
    }
  `;

  static properties = {
    paises: { type: Array },
    paisSeleccionado: { type: Object },
    favoritos: { type: Array }
  };

  constructor() {
    super();
    this.paises = [];
    this.paisSeleccionado = null;
    this.favoritos = [];
  }

 abrirModal(pais) {
    this.paisSeleccionado = pais;
  }

  cerrarModal() {
    this.paisSeleccionado = null;
  }

  toggleFavorito(nombre) {

   if (this.favoritos.includes(nombre)) {
    this.favoritos = this.favoritos.filter(
      fav => fav !== nombre);
    } 
    else {
    this.favoritos = [
      ...this.favoritos,
      nombre];
    }
  }

  async firstUpdated() {
    const res = await fetch('https://restcountries.com/v3.1/region/america');
    this.paises = await res.json();
  }

  render() {
    const seleccionados = (this.paises || []).filter(pais =>
      ["Peru", "Argentina", "Brazil", "Chile", "Colombia",
       "Ecuador", "Bolivia", "Paraguay", "Uruguay", 
       "Venezuela", "Mexico", "Canada"].includes(pais.name.common)
    );

    return html`
      <div class="grid">
        ${seleccionados.map(pais => html`
          <div class="card">
            <img src="${pais.flags.png}" />
            <h3 @click=${() => this.abrirModal(pais)}>
              ${pais.name.common}
            </h3>
            <button @click=${() => this.toggleFavorito(pais.name.common)}>
              ${this.favoritos.includes(pais.name.common) ? "Quitar de favoritos" : "Agregar a favoritos"}
            </button>
          </div>
        `)}
      </div>

      <modal-pais
        .pais=${this.paisSeleccionado}
        @cerrar=${this.cerrarModal}
      ></modal-pais>
    `;
  }
}

customElements.define('main-content', ListaPaises);