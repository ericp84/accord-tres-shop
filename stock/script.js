function getValue(color) {
let cg = document.getElementById('cg');
let circle = document.getElementById('circ');
inp = document.getElementById('inp').value;
 let n = inp;
 console.log("n=", n)
 if(n == 0) {
     cg.style.background = color = "red";
     circle.style.background = color = "red";
 } else if(n <=5) {
    cg.style.background = color = "orange";
    circle.style.background = color = "orange";
 } else {
     cg.style.background = color = "green";
     circle.style.background = color = "green";
 }
}
getValue()



