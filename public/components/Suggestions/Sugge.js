export var Attribute;
(function (Attribute) {
    Attribute["img"] = "img";
    Attribute["name"] = "name";
})(Attribute || (Attribute = {}));
class MySuggestions extends HTMLElement {
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
            <link rel="stylesheet" type="text/css" href="./app/components/Suggestions/Sugge.css">
            <div class="profile">
                <img class="logo" src="${this.img}"></img>
                <div class="name">
                    <div class="name">${this.name}</div>
                    </div>
                    <p class="cambiar">Seguir</p>
            </div>
            `;
        }
    }
}
customElements.define("my-suggestions", MySuggestions);
export default MySuggestions;
