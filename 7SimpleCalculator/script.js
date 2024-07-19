var result = document.getElementById("result");
var currentResult = "";

function clickButton(value) {
    currentResult += value;
    result.value = currentResult;
}

function calculate() {
    try {
        var resultValue = eval(currentResult);
        result.value = resultValue;
        currentResult = resultValue;
    } catch (e) {
        result.value = "Error";
        currentResult = "";
    }
}

function clearResult() {
    result.value = "";
    currentResult = "";
}