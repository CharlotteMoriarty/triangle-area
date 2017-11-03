//obliczanie na stronie
function triangleArea() {
    var a=document.getElementById('a').value;
    var h=document.getElementById('h').value;
    var triangleArea= a*h/2;
    var result =document.getElementById('result').innerHTML =triangleArea;
   
}
//obliczanie na sztywnych danych z pliku +console.log
/*
a=5;
h=6;
var triangleArea= a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
*/
