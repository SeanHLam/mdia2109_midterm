//MUST HAVE - CREATE A TEMPLATE TAG
var template_para = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_para.innerHTML = `

<style>
#para{
    font-size: 15px;
    color: #382D72;
    margin: .5em 2em .5em 2em;    
    font-family: DM Sans;
}


</style>

<div id="para">text</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ThePara extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_para.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("para_text")){
            this.shadowRoot.querySelector("#para").innerText = this.getAttribute("para_text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-para", ThePara)