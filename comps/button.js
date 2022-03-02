//MUST HAVE - CREATE A TEMPLATE TAG
var template_button = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_button.innerHTML = `

<style>

#cont{
    margin:2em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7055A9;
    width:  240px;
    height: 60px ; 
    border-radius: 10px;
    box-shadow: 0 3px 8px;
}

#cont:hover{
    background-color: #382D72;
}

#text{
    font-size: 26px;
    color: #FFFFFF;
}


</style>

<div id="cont">
    <div id="text"> test </div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheButton extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_button.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("butt_text")){
            this.shadowRoot.querySelector("#text").innerText = this.getAttribute("butt_text");
        }

        if(this.getAttribute("scroll")){
            this.shadowRoot.querySelector("#cont").onclick = () => this.scrollTo()
        }
        
        if(this.getAttribute("overlay")){
            this.shadowRoot.querySelector("#cont").onclick = () => this.overlay()
        }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    scrollTo(){
        document.querySelector("#hugImage").scrollIntoView({behavior: "smooth"});
      
    }

    overlay(){
        document.querySelector("#overlay").style.display = "block";
        document.querySelector("#checkCont").style.display = "block";
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-button", TheButton)