//MUST HAVE - CREATE A TEMPLATE TAG
var template_icon = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_icon.innerHTML = `
<div id='icon'>
  <img src='./imgs/head1.svg' />
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheIcon extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_icon.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("image")){
            this.shadowRoot.document.querySelector("#icon").style.image= (`./imgs/${this.getAttribute('name')}.svg`);
          }

       
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-icon", TheIcon)

