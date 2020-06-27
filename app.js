function getNumber(num){
        var result = document.getElementById("resultNum");
    result.value += num;
}

function clearNum(){
        var result = document.getElementById("resultNum");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("resultNum");
    result.value = eval(result.value)
}

function delNum(){
    
    var result = document.getElementById("resultNum");
    var delNum = result.value
    var num1 = delNum.substring(0, delNum.length-1);
    result.value = num1
}

function getHistory(num){
    var result = document.getElementById("hist");
result.value += num;
}

function clearHist(){
    var result = document.getElementById("hist");
result.value = "";
}

function delHist(){
    var result = document.getElementById("hist");
    var delNum = result.value
    var num1 = delNum.substring(0, delNum.length-1);
    result.value = num1
}