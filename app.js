
function gethexcolor(){
    let symbols=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    
   let color="#";
    for(i=0;i<6;i++){
        color=color+symbols[Math.floor(Math.random()*16)];
    }
    document.body.style.background=color;
    document.getElementById('code').innerHTML=color;
}

function getrgbcolor(){

    let red=Math.round(Math.random()*255);
    let green=Math.round(Math.random()*255);
    let blue=Math.round(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    document.body.style.background=color;
    document.getElementById('code').innerHTML=color;
}
function gethslcolor(){
    let angle= Math.round(Math.random()*360);
    let saturate=Math.round(Math.random()*100);
    let light=Math.round(Math.random()*100);

    let color=`hsl(${angle},${saturate}%,${light}%)`;
    document.body.style.background=color;
    document.getElementById('code').innerHTML=color;
}
function getgradient(){
    let symbols=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let gradient;
    let color1="#";
    let color2="#";
    
     for(let i=0;i<6;i++){
         color1 +=symbols[Math.floor(Math.random()*16)];
         color2 +=symbols[Math.floor(Math.random()*16)];
        
     }
     
     gradient=`linear-gradient(to right,${color1},${color2})`;
     document.body.style.background=gradient;
     document.getElementById('code').innerHTML=gradient;
}
