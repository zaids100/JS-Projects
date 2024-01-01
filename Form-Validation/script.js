let nameError=document.getElementById("name-error");
let phoneError=document.getElementById("phone-error");
let mailError=document.getElementById("mail-error");
let msgError=document.getElementById("message-error");
let submitError=document.getElementById("submit-error");

function validateName(){
         let name=document.getElementById("contact-name").value;

         if(name.length==0)
         {
            nameError.innerHTML="Name is required";
            return false;
         }
         if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) // first character and then one space then anything is accepted
         {
            nameError.innerHTML="Write full name";
            return false;
         }
         nameError.innerHTML='<i class="fas fa-check-circle"></i>';
         return true;
}

function validatePhone(){
    let phone=document.getElementById("contact-phone").value;

    if(phone.length==0)
    {
        phoneError.innerHTML="Phone no is required";
        return false;
    }
    if(phone.length!==10)
    {
        phoneError.innerHTML="Phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) //regular expression to check number range b/w 0-9 and 10 digits only
    {
        phoneError.innerHTML='Only digits please !';
        return false;
    }
    phoneError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;

}

function validateMail(){
    let mail=document.getElementById("contact-mail").value;

    if(mail.length==0)
    {
        mailError.innerHTML="Mail is required !";
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        mailError.innerHTML="Mail is invalid";
        return false;
    }

    mailError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMsg(){
    let msg=document.getElementById("contact-msg").value;
    let required=30;
    let left=required-msg.length;

    if(left>0)
    {
        msgError.innerHTML=left+"more characters required";
        return false;
    }

    msgError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() ||!validateMail() ||!validateMsg())
    {   
        submitError.style.display='block';
        submitError.innerHTML="Please fix error to submit";


        setTimeout(()=>{  //After 3 seconds the error msg will be hidden
            submitError.style.display='none';
        },3000)
        
        return false;
    }

}