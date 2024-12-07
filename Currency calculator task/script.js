
// task currency calculator

function calc() {
    const selectCurrency = document.getElementById("selectCurrency").value;
    const inputMoney = document.getElementById("inputMoney").value;

    if (inputMoney == 0 && selectCurrency == "0") {
        alert("יש לבחור סוג מטבע ולהזין סכום כסף")
    } else {
        if (selectCurrency == "0") {
            alert("יש לבחור סוג מטבע");
        }
        if (inputMoney == 0) {
            alert("יש להזין סכום כסף");
        }

    }
    let resultText = "הסכום שבחרת להמיר הוא: ";

    if (selectCurrency == "1") {
        resultText += inputMoney / 3.8 + " דולר";
    }
    if (selectCurrency == "2") {
        resultText += inputMoney / 4.1 + " יורו";
    }
    if (selectCurrency == "3") {
        resultText += inputMoney / 5.1 + " לירות סטרלינג";
    }

    document.getElementById("result").innerHTML = resultText;

}