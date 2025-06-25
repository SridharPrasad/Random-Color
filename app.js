let btn = document.querySelector("button");

btn.addEventListener("click" , function(){

let h3 = document.querySelector("h3");
let randomcolor = getRandom();
h3.innerText=randomcolor;
let div = document.querySelector("div");
div.style.backgroundColor =randomcolor;

}

);

function getRandom(){
   
        let R = Math.floor(Math.random()*255);
        let G = Math.floor(Math.random()*255);
        let B = Math.floor(Math.random()*255);
        let color = `rgb(${R},${G},${B})`;
        return color;
    }


