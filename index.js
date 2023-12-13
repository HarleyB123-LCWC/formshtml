function CheckData() {
    console.log("Data checking")

    var firstemail = document.getElementById("firstemail").value    
    var secondemail = document.getElementById("confirmemail").value

    if (firstemail === secondemail) {
        alert("Emails are Valid")
    } else {
        alert("Emails are not valid")
    }

}