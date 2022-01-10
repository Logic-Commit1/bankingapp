// Get the modal
var deposit_modal = document.getElementById("deposit-Modal");
var withdraw_modal = document.getElementById("withdraw-Modal");
var transfer_modal = document.getElementById("transfer-Modal");
var add_modal = document.getElementById("add-Modal");

// Get the button that opens the modal
var deposit_btn = document.getElementById("deposit-btn");
var withdraw_btn = document.getElementById("withdraw-btn");
var transfer_btn = document.getElementById("transfer-btn");
var add_btn = document.getElementById("add-btn");

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

function openModal() {}

// When the user clicks the button, open the modal 

deposit_btn.onclick = function () {
    deposit_modal.style.display = "block";
}
withdraw_btn.onclick = function () {
    withdraw_modal.style.display = "block";
}
transfer_btn.onclick = function () {
    transfer_modal.style.display = "block";
}
add_btn.onclick = function () {
    add_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var x;
x = document.querySelectorAll(".modal");
for (let i = 0; i < span.length; i++) {
    span[i].addEventListener("click", function () {
        x[i].style.display = "none";
    })
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if ((event.target == deposit_modal) || (event.target == withdraw_modal) || (event.target ==
            transfer_modal) || (event.target ==
            add_modal)) {
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "";
        }


    }
})

/*                      Adding Account                      */


const addAccountBtn = document.getElementById("add-account-btn").value;

addAccount = () => {
    var name = document.getElementById("add-account-name-input").value;
    var email = document.getElementById("add-account-email-input").value;
    var pass = document.getElementById("add-account-pass-input").value;
    var initialBalance = document.getElementById("add-account-initial-input").value;
    var balance = 5;
    var accountNumber = Math.round(Math.random() * 1000000000000);

    var user = {
        name: name,
        email: email,
        pass: pass,
        accountNumber: accountNumber,
        initialBalance: initialBalance,
        balance: balance,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    alert(name + " added!")
    renderAccount(name);
}

/*               Display User Info from Local Storage           */
renderAccount = (name) => {
    let data = localStorage.getItem(name)
    data = JSON.parse(data)
    var addedtr = document.createElement("tr");
    var addedtdname = document.createElement("td")
    var addedtdaccountnum = document.createElement("td")
    var addedtdbalance = document.createElement("td")

    addedtdname.textContent = data.name;
    addedtdaccountnum.textContent = data.accountNumber;
    addedtdbalance.textContent = data.initialBalance;

    addedtr.append(addedtdname, addedtdaccountnum, addedtdbalance)
    document.getElementById("account-table").append(addedtr)

}

for (let name in localStorage) {
    renderAccount(name);
}

/*              Deposit Account              */
const depositAccountBtn = document.getElementById("deposit-account-btn");


function depositMoney() {
    
    var depositAccountNum = document.getElementById("deposit-accnum-input").value;
    var depositAmount = document.getElementById("deposit-amount-input").value
    console.log(2)

}




