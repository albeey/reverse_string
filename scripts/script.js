const reverseString = input => input.split("").reverse().join("");

const reverseBttn = document.querySelector("#reverseBttn");
const clearBttn = document.querySelector("#clearBttn");
const result = document.querySelector(".result-area");
const textArea = document.querySelector("textarea");

let inputStr = "";

result.hidden = true;

reverseBttn.addEventListener("click", () => {
    inputStr = document.querySelector("#inputBox").value;
    showAnswer(reverseString(inputStr));
});

clearBttn.addEventListener("click", () => {
    result.innerHTML = "";
    inputStr = document.querySelector("#inputBox").value = "";
    result.style.padding = "0";
    textArea.style.Minheight = "10vh";
})

function showAnswer(answer) {
    if (inputStr.trim().length) result.style.padding = "15px";;
    result.hidden = false;
    result.innerHTML = answer;
    inputStr = "";
}