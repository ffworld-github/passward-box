var change_passward = document.querySelector('.change-passward');
var confirm_passward = document.querySelector('.confirm-passward');
var error_message = document.querySelector('.error-message');
var submit = document.querySelector('.submit');


submit.addEventListener('click',()=>{
    if(change_passward.value === "" || confirm_passward.value ===""){
        error_message.textContent='*Please fill both';
        error_message.style.color='red';
    }
    else if(change_passward.value === confirm_passward.value){
        error_message.textContent='*Correct Passward';
        error_message.style.color='green'
        alert('You are Successfully Login')

    }
    else{
        error_message.textContent='*In-correct Passward';
        error_message.style.color='red'
        change_passward.value=''
        confirm_passward.value=''
    }
})