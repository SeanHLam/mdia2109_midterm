//MUST HAVE - CREATE A TEMPLATE TAG
var template_check = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_check.innerHTML = `
<style>
#cont{

    display: flex;
    flex-direction: row;
    margin: 2em;
}
#box{
    display: flex;
    align-items: center;
    justify-content: center;    
    background-color: #AD96C0;
    min-width:  50px;
    min-height: 50px;
    max-width:  50px;
    max-height: 50px;
    border-radius: 10px;
}

#check{
    display: none;
    min-width:  42px;
    min-height: 42px;
    max-width:  42px;
    max-height: 42px;
    background-color: #7056A9;
    border-radius: 10px;
    
}

#box:hover{
    background-color: #7056A9;
}

#checkText{
    font-size: 15px;
    color: white;
    margin-left: 1.5em;
    display: flex;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
}
</style>
    
<div id="cont">
    <div id="box">
        <div id="check"> 
        </div>
    </div>

    <div id="checkText">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheCheck extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_check.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("check_text")){
            this.shadowRoot.querySelector("#checkText").innerText = this.getAttribute("check_text");
        }
       
        this.shadowRoot.querySelector("#box").onclick = () => this.checkMark()
       
        document.querySelector("#overlay").onclick = () => this.closeOverlay()
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    checkMark(){
        var check = this.shadowRoot.querySelector("#check")
        var checkSetting = check.style.display;

        if(checkSetting === "block"){
   
            this.shadowRoot.querySelector("#check").style.display = "none"
            
        }

        else{
  
            this.shadowRoot.querySelector("#check").style.display = "block"
        }
    }

    closeOverlay(){
        setTimeout(function() { document.querySelector("#checkCont").style.cssText += `opacity:0;`}, 100);
        setTimeout(function() { document.querySelector("#overlay").style.cssText += `opacity:0;` }, 50);

        setTimeout(function() { document.querySelector("#checkCont").style.cssText += `display:none;`}, 1000);
        setTimeout(function() { document.querySelector("#overlay").style.cssText += `display:none;` }, 1000);
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-check", TheCheck)