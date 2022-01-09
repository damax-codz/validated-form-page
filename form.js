function validate(){
    document.querySelector('.warn').style.visibility='visible'
    document.getElementById('checkone').style.visibility='visible'
    document.getElementById('checktwo').style.visibility='visible'
    document.getElementById('labelone').style.visibility='visible'
    document.getElementById('labeltwo').style.visibility='visible'
    let pass = document.getElementById('pass')
    let passtwo=document.getElementById('passtwo')
    if (pass.value.includes('@')||pass.value.includes('#')||pass.value.includes('$')||pass.value.includes('%')||pass.value.includes('^')||pass.value.includes('&')||pass.value.includes('*')){
    document.getElementById('checkone').checked= true
    document.getElementById('labelone').style.color='green'
    }
    if (pass.value.length>8){
    document.getElementById('checktwo').checked= true
    document.getElementById('labeltwo').style.color='green'
}
}




function passHide(){
    let pass = document.getElementById('pass')
    let hide = document.getElementById('hide')
    if(pass.type=='password'){
        pass.type='text'
        hide.src='visibility_black_24dp.svg'
    }
    else{
        pass.type = "password";
		hide.src = "visibility_off_black_24dp.svg";
    }
}


const confirmPass=()=>{
    var email= document.getElementById('email')
    var emailconfirm=document.querySelector('.emailconfirm')
    var pass = document.getElementById('pass')
    var passtwo=document.getElementById('passtwo')
    var passconfirm = document.getElementById('passconfirm')
    if(pass.value!=passtwo.value){
    passconfirm.innerHTML='please make sure both password match!!'
}
    else{
        passconfirm.innerHTML=' '
    }
    if(!email.value.includes("@")||!email.value.includes(".")){
    emailconfirm.innerHTML="please input a valid email!!"

}     
    else{
    emailconfirm.innerHTML=" "
}
}


document.getElementById("username").value=" "
document.getElementById("email").value=" "
document.getElementById("pass").value=" "
document.getElementById("passtwo").value=" "

