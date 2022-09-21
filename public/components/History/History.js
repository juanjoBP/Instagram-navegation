export var Attribute;
(function (Attribute) {
    Attribute["img"] = "img";
    Attribute["name"] = "name";
})(Attribute || (Attribute = {}));
class MyHistory extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            img: null,
            name: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./app/components/History/History.css">
                <div class="history"> 
                     <img class="foto" src="${this.img}"></img>
                     <p>${this.name}</p>
                </div>
            `;
        }
    }
}
customElements.define("my-history", MyHistory);
export default MyHistory;
