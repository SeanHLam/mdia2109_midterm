//MUST HAVE - CREATE A TEMPLATE TAG
var template_accord = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_accord.innerHTML = `

<style>

    #container {
        position:relative;
        margin-bottom: 40px;
        width: 24em;
    }

    #menu {
        position:relative;
        font-size: 20px;
        color:white;
        cursor:pointer;
        background-color: #96A7CD;
        border-radius: 25px;
        padding: 20px;
        display:flex;
        align-items:center;
        z-index:5;
        transition: 0.5s;
    }

    #menu > .arrow {
        position:absolute;
        right: 20px;
        width:25px;
    }


    .icons {
        width: 30px;
        margin-right:0.5em;

    }

    #answer {
        position:relative;
        font-size: 15px;
        color: white;
        text-align:justify;
        overflow:hidden;
        transition:0.5s;
        background: #6F55A9;
        height: 0;
        border-bottom-right-radius:25px;
        border-bottom-left-radius:25px;
        margin-top: -25px;
    }

    #answer > .answer {
        margin-top: 25px;
        padding:20px;
    }

    #container.active #answer {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        height: 0px;
        padding: 20px;
        padding-top: 40px;
        margin-top: -25px;
    }

</style>

<div id="container">
    <div id="menu"> <img class="icons" src="https://cdn-icons-png.flaticon.com/512/3203/3203856.png"> <div class="question"> Question </div> <img class="arrow" src="https://img.icons8.com/small/32/ffffff/right.png"> </div>
    <div id="answer"><div class="answer">Answer </div> </div>
</div>


`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheAccord extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_accord.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("img")){
            this.shadowRoot.querySelector("#menu > img").src = this.getAttribute("img");
        }
        if(this.getAttribute("question")){
            this.shadowRoot.querySelector(".question").innerText = this.getAttribute("question");
        }
        if(this.getAttribute("answer")){
            this.shadowRoot.querySelector(".answer").innerText = this.getAttribute("answer");
        }

        this.shadowRoot.querySelector("#menu").onclick = () => this.answerActive();
        this.shadowRoot.querySelector("#answer").onclick = () => this.answerReclick();
        
    }


    //To-do - CREATE THE FUNCTIONALITIES HERE!
    answerActive(){
        this.shadowRoot.querySelector("#answer").style.height = "120px";
        this.shadowRoot.querySelector("#menu > .arrow").src = "https://img.icons8.com/small/32/ffffff/down.png";
        this.shadowRoot.querySelector("#menu").style.backgroundColor = "#382D72";
    }

    answerReclick(){
        this.shadowRoot.querySelector("#answer").style.height = "0px";
        this.shadowRoot.querySelector("#menu > .arrow").src = "https://img.icons8.com/small/32/ffffff/right.png";
        this.shadowRoot.querySelector("#menu").style.backgroundColor = "#96A7CD"
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-accord", TheAccord)


