export enum Attribute {
    "img" = "img",
    "name" = "name",
}

class MyHistory extends HTMLElement{
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