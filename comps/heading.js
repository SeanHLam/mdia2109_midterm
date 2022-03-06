//MUST HAVE - CREATE A TEMPLATE TAG
var template_heading = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_heading.innerHTML = `

<style>
#heading{
    font-size: 26px;
    color: #382D72;
    margin: 1em;    
}


</style>

<div id="heading">test</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheHeading extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_heading.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("head_text")){
            this.shadowRoot.querySelector("#heading").innerText = this.getAttribute("head_text");
        }
        if(this.getAttribute("margin")){
            this.shadowRoot.querySelector("#heading").style.margin = "2em 2em 0 2em"
        }
        
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-heading", TheHeading)