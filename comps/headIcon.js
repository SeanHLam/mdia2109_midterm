//MUST HAVE - CREATE A TEMPLATE TAG
var template_icon = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_icon.innerHTML = `
<style>
  #icon {
    display: block;
    block-size: fit-content;
  }

  #right-arrow{
    height: 30px;
    width: 35px;
    background-color: transparent;
    animation: 
    MoveUpDown .8s ease infinite alternate;
    position: relative;  
    margin: 0.5em;
    left: 1em;
  }

  #arrow{
    opacity: 1;
    transition: opacity .5s;
  }

  @keyframes MoveUpDown {
    0% {
      bottom: 10px;
    }
    
    40% {
      bottom: 0px;
    }
    
  

</style>

<div id='icon'>
  <div id="arrow"><img id="right-arrow" src="imgs/down-arrow.png"></div>
  <img id='image' src='./imgs/head1.svg'/>
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
      this.shadowRoot.appendChild(template_icon.content.cloneNode(true)); //use the template to make a clone
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
          
        
        
        this.shadowRoot.querySelector("#icon").onclick = () => this.appear()
        //this.shadowRoot.querySelector("#icon").onclick = () => this.disappear()


    
      }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    appear(){
      var arrow = this.shadowRoot.querySelector("#arrow");
      if(this.getAttribute("head1")){
        setTimeout(function() { document.querySelector("#stat1").style.cssText += `opacity:1;`}, 100);
        document.querySelector("#stat1").style.visibility = "visible";

        setTimeout(function() { arrow.style.cssText += `opacity:0;`}, 1);
        setTimeout(function() { arrow.style.cssText += `visibility:hidden;`}, 500);
      }
      if(this.getAttribute("head2")){
        setTimeout(function() { document.querySelector("#stat2").style.cssText += `opacity:1;`}, 100);
        document.querySelector("#stat2").style.visibility = "visible";

        setTimeout(function() { arrow.style.cssText += `opacity:0;`}, 1);
        setTimeout(function() { arrow.style.cssText += `visibility:hidden;`}, 500);
      }
      if(this.getAttribute("head3")){
        setTimeout(function() { document.querySelector("#stat3").style.cssText += `opacity:1;`}, 100);
        document.querySelector("#stat3").style.visibility = "visible";

        setTimeout(function() { arrow.style.cssText += `opacity:0;`}, 1);
        setTimeout(function() { arrow.style.cssText += `visibility:hidden;`}, 500);
      }
      if(this.getAttribute("head4")){
        setTimeout(function() { document.querySelector("#stat4").style.cssText += `opacity:1;`}, 100);
        document.querySelector("#stat4").style.visibility = "visible";

        setTimeout(function() { arrow.style.cssText += `opacity:0;`}, 1);
        setTimeout(function() { arrow.style.cssText += `visibility:hidden;`}, 500);
      
      }
      
      
      
    
  }


}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-icon", TheIcon)

