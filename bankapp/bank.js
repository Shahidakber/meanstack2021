class Bank {

    static getAccountDetails() {
        var accountDetails = {
            1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
            1002: { acno: 1002, name: "usertwo", balance: 3000, password: "user2" },
            1003: { acno: 1003, name: "userthree", balance: 3000, password: "user3" },
            1004: { acno: 1004, name: "userfour", balance: 3000, password: "user4" },
            1005: { acno: 1005, name: "userfive", balance: 3000, password: "user5" }
        }
        return accountDetails

    }
    static authenticateUser(accno, password) {
        let data = Bank.getAccountDetails()
        if (accno in data) {
            if (password == data[accno]["password"]) {
                return 0  //valid passsword

            }
            else {
                return 1
            }
        }
        else {
            return -1 //invalid accno
        }
    }
    static login() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let data = Bank.getAccountDetails()
        if (accno in data) {
            if (pwd == data[accno]["password"]) {
                alert(" Welcome  " + data[accno]["name"])
                window.location.href = "userhome.html"
            }
            else {
                alert("invalid password")
            }
        }

    }
    static deposit() {
        
        
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let amt = document.querySelector("#amt").value;
        let user = Bank.authenticateUser(accno, pwd);
        let data = Bank.getAccountDetails()

        if (user == 0) {
            data[accno]["balance"] += Number(amt)
            
            swal("available balance :" + data[accno]["balance"])

        }
        else if (user == 1) {
            swal("invalid password")
        }
        else {
            swal("invalid account number")
        }


    }
    static withdraw() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let amt = document.querySelector("#amt").value;
        let user = Bank.authenticateUser(accno, pwd);
        let data = Bank.getAccountDetails()

        if (user == 0) {
            if (amt > data[accno]["balance"]) {
                swal("insufficient balance")

            }
            else {

                data[accno]["balance"] -= Number(amt)
                swal("available balance :" + data[accno]["balance"])
            }
        }
        else if (user == 1) {
            swal("invalid password")
        }
        else {
            swal("invalid account number")
        }
    }
}


