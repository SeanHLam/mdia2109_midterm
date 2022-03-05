//MUST HAVE - CREATE A TEMPLATE TAG
var template_icon = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_icon.innerHTML = `
<style>
  #icon {
    display: block;
 
  }

</style>
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
    connectedCallback() {
      this.shadowRoot.appendChild(template_statitem.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("head1")){
          this.shadowRoot.querySelector("#image").src="./imgs/head1.svg"
          }
        if(this.getAttribute("head2")){
            this.shadowRoot.querySelector("#image").src="./imgs/head2.svg"
          }
        if(this.getAttribute("head3")){
            this.shadowRoot.querySelector("#image").src="./imgs/head3.svg"
          }
        if(this.getAttribute("head4")){
            this.shadowRoot.querySelector("#image").src="./imgs/head4.svg"
          }
          
          if(this.getAttribute("appear")){
            this.shadowRoot.querySelector("#icon").onclick = () => this.appear()
        }
      }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    appear(){
      document.querySelector("#appear").style.display = "block";
      document.querySelector("#hidden").style.display = "block";
  }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-icon", TheIcon)

