$(document).ready(function(){
$(this).mousemove(function(e){   
const coordsH3=document.querySelector("#h3");

const coordsText="Coords: X: "+e.clientY+" Y: "+e.clientX;
    
 coordsH3.textContent=coordsText;
});
});
