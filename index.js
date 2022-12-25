const ticketForm = document.getElementById("form-ticket");
ticketForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const firstandlastname = document.getElementById("firstandlastname").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const email = document.getElementById("email").value;
    checkUser(firstandlastname,phonenumber,email);
});

function checkUser(firstandlastname, phonenumber, email) {

    if (!checkValue(firstandlastname) && checkValue(phonenumber)) {
        alert("Hello " + firstandlastname + " . We wish you have a happy Christmas day.");
    }
    else {
        alert("Input Error!");
    }
}
function checkValue (value){
    return  !isNaN(parseFloat(value)) && !isNaN(value - 0) 
}
const mybutton = document.getElementById("btnTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", function() {
document.documentElement.scrollTop = 0;
})