import { LitElement, html, css } from 'lit';

class BottomReto extends LitElement {
    static styles = css `
     .bottom {
       background-color: #cb0a0a;
       margin: 0;
       padding: 5px;
       color: white;
       text-align: center;
    }
   `;

    static properties = {
        bottom: {type: String}
    };

    constructor(){
     super();
     this.bottom = "Pie de pagina";
    }

    render(){
        return html`
        <div class="bottom">
          <h1>${this.bottom}</h1>
        </div>
        `;
    }
}

customElements.define("bottom-reto", BottomReto);