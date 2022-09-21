import "./components/indexcompo.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" type="text/css" href="../app/components/ProfileContainer/ProfileContainer.css">
                <my-explore></my-explore>
                <my-cont class="cont"></my-cont>
                <my-recommendations name="Juangus1407"></my recommendations>
                `;
        }
    }
}
customElements.define("app-container", AppContainer);
