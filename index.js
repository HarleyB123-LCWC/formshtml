function CheckData() {
    console.log("Data checking")

    var firstemail = document.getElementById("firstemail").value    
    var secondemail = document.getElementById("confirmemail").value
    var nameinput = document.getElementById("nameinput").value
    var dateinput = document.getElementById("dateinput").value

    console.log(dateinput);
    if (firstemail === "" || secondemail === "") {
	alert("Email Entry Must have a input")
    } else if (nameinput === "") {
	alert("Name Must have an Input")
    } else if (dateinput === "") {
	alert("Date of Birth Must have an input")
    }
    else {
    	if (firstemail === secondemail) {
    	    alert("Emails are Valid")
    	} else {
    	    alert("Emails are not valid")
    	}
    }



}