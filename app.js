function getNumbers(num){
    var result = document.getElementById("result");
    result.value+= num;
}
function clearResult(){
    var result= document.getElementById("result");
    result.value = "";
}
function clearEnd(){
    var result = document.getElementById("result")
     result.value = result.value.slice(0,-1);
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
