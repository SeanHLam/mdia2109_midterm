//MUST HAVE - CREATE A TEMPLATE TAG
var template_checkList = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_checkList.innerHTML = `

<div class="cont"> 
    <div class="check">
        <div class = "checkIcon"></div>
    </div>

    <div class = "checkText"> Does the piece of media stereotype those with mental health issues? 
    </div>
</div>

<style>
    .cont {
        display:flex;
        background-color: #382D72;
        width: fit-content;
    }

    .check {
        background-color: #AD96C0;
        margin: 2em;
        width:  50px;
        height: 50px ; 
        border-radius: 10px;
    }

    .checkIcon {
        display:none;
        background-color: #7056A9;
        margin: 2em;
        width:  50px;
        height: 50px ; 
        border-radius: 10px;
    }

    .cont > .checkText {
        display: flex;
        font-size: 15px;
        color: #ffffff;
        align-items: center;
        margin-right: 2em;
    }

</style>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class CheckList extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_checkList.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#check").onclick = () => this.marked()
        
		console.log(this.getAttribute("question"))

        if(this.getAttribute("quesstion")){
            this.shadowRoot.querySelector(".cont > .checkText").innerText = this.getAttribute("question");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    marked(){
        this.shadowRoot.querySelector(".checkIcon").style.display(block);
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("check-list", CheckList)