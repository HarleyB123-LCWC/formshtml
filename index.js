function CheckTime(datecheck) {
    var datetocheck = new Date(datecheck)
    var currdate = new Date()


    if (datetocheck > currdate) {
        return false
    } else {
        return true
    }

}


function CheckData() {
    const t0 = performance.now();
    console.log("Starting Data Checks");
    console.log("Getting Elements");
    var firstemail = document.getElementById("firstemail").value    
    var secondemail = document.getElementById("confirmemail").value
    var nameinput = document.getElementById("nameinput").value
    var dateinput = document.getElementById("dateinput").value
    var currdocnur = document.getElementById("currdocnur").value
    var allergies = document.getElementById("allergies").value
    var yesinput = document.getElementById("yestermscon")
    var noinput = document.getElementById("notermscon")
    console.log("All Elements Got");


    console.log("Starting Data Checks");
    if (firstemail === "" || secondemail === "") {
	    alert("Email Entry Must have a input")
    } else if (nameinput === "") {
	    alert("Name Must have an Input")
    } else if (dateinput === "") {
	    alert("Date of Birth Must have an input")
    } else if (noinput.checked === true) {
        alert("You must accept terms and conditions")
    } else if (yesinput.checked === false && noinput.checked === false) {
        alert("You must select an option for terms and conditions")
    } else if (firstemail !== secondemail) {
    	    alert("Emails are not valid")
    
    } else if (currdocnur === "") {
        alert("You must enter something in CURRDOCNUR if you dont know simply put N/A")
    } else if (allergies === "" ) {
        alert("You must enter your alleriges if you have no allergies simply put N/A")
    }
    else {
        const t1 = performance.now();
        console.log(`Checks Complete Took ${t1 - t0}ms To Complete`);

            if (CheckTime(dateinput)) {
                alert("Data is all valid")
                Submit(nameinput,dateinput,firstemail,allergies,currdocnur)
            } else {
                alert("You cannot set a date in the future")
            }
    	    
    	}



}

function Submit(namee,dob,email,allergies,currentDoctor) {
    var csvContent = "Name,DOB,Email,Allergies,Current Doctor/Nurse\n";
    csvContent += namee + "," + dob + "," + email + "," + allergies + "," + currentDoctor + "\n";


    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "name=" + name + "&dob=" + dob + "&email=" + email + "&allergies=" + allergies + "&currentDoctor=" + currentDoctor;
    xhr.send(data);
}