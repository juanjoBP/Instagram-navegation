export enum Attribute {
    "img" = "img",
    "name" = "name",
}
class MySuggestions extends HTMLElement{
    img?: string;
    name?: string;
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            img: null,
            name: null
        };
        return Object.keys(attrs); 
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName:Attribute, oldValue:string|undefined, newValue:string){
        this[propName] = newValue;
        this.render();
    }
    render(){
        if(this.shadowRoot){
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