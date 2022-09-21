import user from "../../User";
class MyNave extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <link rel="stylesheet" type="text/css" href="./app/components/Navegation/Navegations.css">
                <navegation class="head">
                <div class="head">
                <img class="logo" src="<img class="insta" src="./images/instagram.png"></img>" class="insta"></img>   
                </div>

                <div class="search">
                <input type="image" class="buscardor" src="<ion-icon name="search-sharp"></ion-icon>" class="image_buscardor">
                <input type="text" class="buscar" placeholder="Buscar"> 
                </div>

                <div class="iconos">
                <img class="icon" src="<ion-icon name="home-sharp"></ion-icon>"></img>
                <img class="icon" src="<ion-icon name="checkmark-done-circle-sharp"></ion-icon>"></img>
                <img class="icon" src="<ion-icon name="add-circle-sharp"></ion-icon>"></img>
                <img class="icon" src="<ion-icon name="compass-sharp"></ion-icon>"></img>
                <img class="icon" src="<ion-icon name="heart-sharp"></ion-icon>"></img>
                <img class="user" src="./images/Juangus.png"></img>
                </div>
                </navegation>
            </section>
            `;
        }
    }

}
customElements.define("my-nave", MyNave);
export default MyNave;