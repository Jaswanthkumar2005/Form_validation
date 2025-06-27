var nameerror = document.getElementById('name-error');
var phoneerror = document.getElementById('phone-error');
var emailerror = document.getElementById('email-error');
var messageerror = document.getElementById('message-error');
var submiterror = document.getElementById('submit-error');


function validatename()
{
    var name = document.getElementById('contact-name').value;
    if(name.length == 0)
    {
        nameerror.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+\s[A-Za-z]+$/))
    {
        nameerror.innerHTML = 'Write full name';
        return false;
    }
    nameerror.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validatephone()
{
    var phone = document.getElementById('contact-phone').value;
    if(phone.length==0)
    {
        phoneerror.innerHTML='Phone no is required';
        return false;
    }
    if(phone.length!==10)
    {
        phoneerror.innerHTML='Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneerror.innerHTML='Phone no is required';
        return false;
    }
    phoneerror.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateemail()
{
    var email = document.getElementById('contact-email').value;
    if(email.length == 0)
    {
        emailerror.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\.\_\-\0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailerror.innerHTML = 'Email Invalid';
        return false;
    }
    emailerror.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;

}

function validatemsg()
{
    var msg = document.getElementById('contact-msg').value;
    var required = 30;
    var left = required-msg.length;
    if(left>0)
    {
        messageerror.innerHTML = left+'more characters required'
        return false;
    }
    messageerror.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;

}

function validateform()
{
    if(!validatename() || !validatephone() || !validateemail() || !validatemsg())
    {
        submiterror.innerHTML='Please fix error to submit';
        return false;
    }
}