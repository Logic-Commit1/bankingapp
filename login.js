/*   INPUT    */

var email = document.getElementById("email-input");
var pass = document.getElementById("pass-input");
const form = document.getElementById("form");
const a_email = 'admin@gmail.com';
const a_pass = 'admin';


function adminCheck(){
    if (email.value === a_email && pass.value === a_pass) {
        window.location.href = "/BankingApp/dashboard.html"
    } else {
        alert("User not found.")
    }
}