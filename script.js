const display = document.getElementById("display");

function appendtodisplay(input){
  display.value += input;
}
function calculate(){
  let expression = display.value.replace(/x/g, '*'); 
    display.value = eval(expression);
}
function deletefn(){
  display.value = display.value.substring(0,display.value.length-1);
}
function resetfn(){
  display.value = "";
}
