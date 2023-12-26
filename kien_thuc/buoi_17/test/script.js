var log_btn = document.querySelector(".log_function");
log_btn.onclick = function(){
    console.log('helloworld');
}
var alert_btn = document.querySelector(".alert_function");
alert_btn.onclick = function(){
    alert('warning');
}
var prompt_btn = document.querySelector(".prompt_function");
prompt_btn.onclick = function(){
    prompt('input: ');
}
var confirm_btn = document.querySelector(".confirm_function");
confirm_btn.onclick = function(){
    confirm('ok');
}