$(document).ready(function(){
$(this).mousemove(function(e){   
const coordsH3=document.querySelector("#h3");

const coordsText="Coords: X: "+e.clientY+" Y: "+e.clientX;
    
 coordsH3.textContent=coordsText;
});
});
//This is my first experience with jQuery on Github, I really love it. I posted my expermients with it on Codepen at https://codepen.io/anone-imouse/pen/eYddpJP for more but I also have this on Codepen at: https://codepen.io/anone-imouse/pen/eYddPZv
