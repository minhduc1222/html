
// dung de lay ra button tu giao dien

var log_btn = document.querySelector(".log_function"); // querySelector: return the first element that matches the css selector(choose the element we want to style(h1, p, <class>abc))
log_btn.onclick = function () {
    // log("hi")
    console.log('hi');
}
var alert_btn = document.querySelector(".alert_function");
alert_btn.onclick = function () {
    // alert("xin chao")
    alert('Xin chao');
}
var prompt_btn = document.querySelector(".prompt_function");
prompt_btn.onclick = function () {
    // prompt("Input")
    prompt('Input');
}
var confirm_btn = document.querySelector(".confirm_function");
confirm_btn.onclick = function () {
    // confirm("1")
    confirm('1fds');
}

var a = 10
var b = 1
a++
b--
console.log('Tich hai so:', a*b);
console.log(a+b);
console.log(a);
console.log(b);

var a = 1;
a = a + 2
console.log(a)
