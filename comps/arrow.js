//MUST HAVE - CREATE A TEMPLATE TAG
var template_arrow = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_arrow.innerHTML = `
<style>
#right-arrow{
    height: 35px;
    width: 35px;
    background-color: transparent;
    animation: 
      nudge 2s linear infinite alternate;
  }

  @keyframes nudge {
    0% {
      transform: translate(0, 0);
    }
    
    50% {
      transform: translate(20px, 0);
    }
    
</style>

<div class="arrow">
    <img id="right-arrow" src="imgs/right-arrow.png">
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheArrow extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_arrow.content.cloneNode(true)); //use the template to make a clone
        
        if(this.getAttribute("direction")){
            this.shadowRoot.querySelector("#right-arrow").src="./imgs/left-arrow.svg"
            }
}

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    disappear(){

}
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-arrow", TheArrow)