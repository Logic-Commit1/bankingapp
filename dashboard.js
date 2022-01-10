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

deposit_btn.onclick = function() {
    deposit_modal.style.display = "block";
}
withdraw_btn.onclick = function() {
    withdraw_modal.style.display = "block";
}
transfer_btn.onclick = function() {
    transfer_modal.style.display = "block";
}
add_btn.onclick = function() {
    add_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var x;
x = document.querySelectorAll(".modal");
for (let i = 0; i < span.length; i++) {
    span[i].addEventListener("click", function() {
        x[i].style.display = "none";
    })
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
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

getNewAccount = () => {
    var name = document.getElementById("add-account-name-input").value;
    var email = document.getElementById("add-account-email-input").value;
    var pass = document.getElementById("add-account-pass-input").value;
    var initialBalance = document.getElementById("add-account-initial-input").value;
    var balance = 5;
    var accountNumber = Math.round(Math.random() * 1000000000000);

    return {
        name: name,
        email: email,
        pass: pass,
        accountNumber: accountNumber,
        initialBalance: initialBalance,
        balance: balance,
    }
}

addAccount = () => {
    let newAccount = getNewAccount();

    let accounts = retrieveAccounts();
    if (accounts.includes(newAccount)) accounts.push(newAccount);

    localStorage.setItem('accounts', JSON.stringify(accounts));
    alert(newAccount.name + " added!");

    renderAccounts();
}

retrieveAccounts = () => {
    let savedAccounts = localStorage.getItem('accounts');

    if (savedAccounts == null) {
        return [];
    }
    return JSON.parse(savedAccounts);
}

/*               Display User Info from Local Storage           */
renderAccounts = () => {
    resetAccountsTable();

    let accounts = retrieveAccounts();

    for (let i = 0; i < accounts.length; i++) {
        renderAccount(accounts[i]);
    }
}

renderAccount = (account) => {
    let table = document.getElementById("account-table-body");
    let addedRow = document.createElement("tr");
    let addedColumnName = document.createElement("td");
    let addedColumnAccountNumber = document.createElement("td");
    let addedColumnBalance = document.createElement("td");

    addedColumnName.textContent = account.name;
    addedColumnAccountNumber.textContent = account.accountNumber;
    addedColumnBalance.textContent = account.initialBalance;

    addedRow.append(addedColumnName, addedColumnAccountNumber, addedColumnBalance);
    table.append(addedRow);
}

resetAccountsTable = () => {
    let table = document.getElementById("account-table-body");
    table.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Account Number</th>
        <th>Balance</th>
    </tr>
    <tr id="account-start">
        <td>Logic</td>
        <td>496721523489</td>
        <td>1292300</td>
    </tr>
    `;
}

// Render Saved Accounts
renderAccounts();

/*              Deposit Account              */
const depositAccountBtn = document.getElementById("deposit-account-btn");


function depositMoney() {

    var depositAccountNum = document.getElementById("deposit-accnum-input").value;
    var depositAmount = document.getElementById("deposit-amount-input").value
    console.log(2)

}