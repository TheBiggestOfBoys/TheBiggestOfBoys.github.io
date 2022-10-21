var data = new FormData(document.getElementById("EmailForm"));

var Email = data.append("email", document.getElementById("Email").value);
var FirstName = data.append("FirstName", document.getElementById("FirstName").value);
var LastName = data.append("LastName", document.getElementById("LastName").value);
var UserMessage = data.append("Message", document.getElementById("Message").value);

function sendEmail() {
    Email.send({
        Host:       "smtp.gmail.com",
        Username:   "jake.scott.burner.email@gmail.com",
        Password:   "F4Jf9k3W_smAa:!",
        To :        "jrscott812@outlook.com",
	    From :      "jake.scott.burner.email@gmail.com",
	    Subject :   (FirstName + LastName + "via your website form, Email:" + Email),
	    Body :      UserMessage
    }).then(
        message => alert("Form Submitted")
    );
}