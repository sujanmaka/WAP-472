window.onload = function() {

    let accountInfoList = [];
    let button = document.getElementById("createBtn");

    class Account {
        constructor(name, deposit) {
            this.name = name;
            this.deposit = deposit;
        }
    }
    let createAccount = (function() {
        let name = document.getElementById("name");
        let deposit = document.getElementById("deposit");
        let textarea = document.getElementById("textarea");
        let display = function() {
            let output = "";
            for (let i = 0; i < accountInfoList.length; i++) {
                output += "Account name: " + accountInfoList[i].name +
                    "   Balance: " + accountInfoList[i].deposit + "\n";
            }
            textarea.value = output;
        }
        return function() {
            accountInfoList.push(new Account(name.value, deposit.value));
            display();
        };
    })();

    button.onclick = createAccount;

};