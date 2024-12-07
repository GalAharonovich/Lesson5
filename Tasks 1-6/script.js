// Task 1 solved
function myfunc1(number1, number2) {

    if (number1 > number2) {
        console.log(number2)
    }
}

//Task 2  solved
function myfunc2(str1, str2, str3, str4) {

    var counter = 0;

    if (str1.length > 3)
        counter++;
    if (str2.length > 3)
        counter++;
    if (str3.length > 3)
        counter++;
    if (str4.length > 3)
        counter++;

    console.log(counter);
}


//Task 3 solved
function myfunc3() {
    let input = document.getElementById("myTextBox").value;
    if (input != null && input.includes("A")) {
        let result = input.replace('A', 'a');
        console.log(result);

    }

}

// //Task 4 solved
function myfunc4(num) {
    let answer = "";

    if (Math.sign(num) == 1) {
        answer = "this number is positive";
    } else
        answer = "this number is negative";

    if (num % 2 == 0) {
        answer += " and even";
    } else
        answer += " and odd";

    console.log(answer);
}

// //Task 5 solved
function myfunc5() {
    let input = document.getElementById("myTextBox").value;
    if (input.charAt(0) == input.charAt(input.length - 1)) {
        input = input.slice(1, -1);
        console.log(input);
    }
}

//Task 6 solved
function myfunc6() {
    let input = document.getElementById("myTextBox").value;
    if (input.includes("*")) {
        input = input.replace('*', '');
        console.log(input);
    }
    else if (input.includes("@")) {
        input = "*" + input + "*";
        console.log(input);
    }
    else if (input.includes("₪")) {
        console.log("new shekel");
    }
}