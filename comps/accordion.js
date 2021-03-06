//MUST HAVE - CREATE A TEMPLATE TAG
var template_accord = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_accord.innerHTML = `

<style>

    #container {
        position:relative;
        width: 20em;
        display:block;
        margin:auto;
        margin-bottom: 20px;
    }

    #menu {
        position:relative;
        font-size: 20px;
        color:white;
        cursor:pointer;
        background-color: #96A7CD;
        border-radius: 25px;
        padding: 17px;
        display:flex;
        flex-direction:row;
        align-items:center;
        z-index:8;
        transition: 0.5s;
    }

    #menu > .arrow {
        position:absolute;
        right: 20px;
        width:25px;
    }


    .icons {
        width: 25px;
        margin-right:0.5em;

    }

    #answer {
        position:relative;
        font-size: 15px;
        color: white;
        overflow:hidden;
        background: #6F55A9;
        display:none;
        border-bottom-right-radius:25px;
        border-bottom-left-radius:25px;
        color:white;
        z-index:0;
        padding:33px 20px 20px 20px;
        top:-22px;
        height:0;
        opacity: 0;
        transition: opacity .5s, height 1s;
    }

    #answer > .answer {
        padding:20px;
        margin-top:25px;
    }

</style>

    <div id="container">
        <div id="menu">
            <img class="icons" src="imgs/accordionIcon/001-mental-health.png"> 
            <div class="question"> Question </div> 
            <img class="arrow" src="https://img.icons8.com/small/32/ffffff/right.png"> 
         </div>
        <div id="answer">
            <div class="answer">Answer</div>
            </div>
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
            this.shadowRoot.querySelector("#answer").innerText = this.getAttribute("answer");
        }   

        this.shadowRoot.querySelector("#menu").onclick = () => this.clickToggle();

    }  


    //To-do - CREATE THE FUNCTIONALITIES HERE!

    clickToggle(){
        
            var x = this.shadowRoot.querySelector("#answer");
            if (x.style.display !== "block") {
                setTimeout(function() { x.style.cssText += `height:55px; opacity:1;`}, 1);
                x.style.cssText += `padding:33px 20px 20px 20px;`
                this.shadowRoot.querySelector("#answer").style.display= "block";
                this.shadowRoot.querySelector("#menu").style.backgroundColor = "#382D72";
                this.shadowRoot.querySelector("#menu > .arrow").src= "https://img.icons8.com/small/32/ffffff/down.png";
            } else {
                setTimeout(function() { x.style.cssText += `height:0px; opacity:0;  `}, 1);
                setTimeout(function() { x.style.cssText += `padding:0px 20px 0px 20px; `}, 1);
                setTimeout(function() { x.style.cssText += `display:none; `}, 900);
                //this.shadowRoot.querySelector("#answer").style.display= "none";
                this.shadowRoot.querySelector("#menu").style.backgroundColor = "#96a6cd";
                this.shadowRoot.querySelector("#menu > .arrow").src= "https://img.icons8.com/small/32/ffffff/right.png";
            }
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-accord", TheAccord)