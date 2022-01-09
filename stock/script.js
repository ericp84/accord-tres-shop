function getValue(color) {
let cg = document.getElementById('cg');
let circle = document.getElementById('circ');
inp = document.getElementById('inp').value;
 let n = inp;
 console.log("n=", n)
 if(n == 0) {
     cg.style.background = color = "#ff0000";
     circle.style.background = color = "#ff0000";
 } else if(n <=5) {
    cg.style.background = color = "#ffff00";
    circle.style.background = color = "#ffff00";
 } else {
     cg.style.background = color = "#00ff00";
     circle.style.background = color = "#00ff00";
 }
}
getValue()



