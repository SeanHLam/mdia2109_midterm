//MUST HAVE - CREATE A TEMPLATE TAG
var template_statitem = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_statitem.innerHTML = `
<style>
  #speech {
 
  }

</style>

<div id='speech'>
  <img id="image" src='./imgs/speech1.svg' />
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheStatItem extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" })

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_statitem.content.cloneNode(true)); //use the template to make a clone
          if(this.getAttribute("speech1")){
            this.shadowRoot.querySelector("#image").src="./imgs/speech1.svg"
            }
          if(this.getAttribute("speech2")){
              this.shadowRoot.querySelector("#image").src="./imgs/speech2.svg"
            }
          if(this.getAttribute("speech3")){
              this.shadowRoot.querySelector("#image").src="./imgs/speech3.svg"
            }
          if(this.getAttribute("speech4")){
              this.shadowRoot.querySelector("#image").src="./imgs/speech4.svg"
            }
        }
    

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showSpeech(){
        document.getElementById('speech').style.display = "block";
     }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-statitem", TheStatItem)
