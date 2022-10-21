function sendEmail() {
    var Email = document.EmailForm.Eamil.value;
    var FirstName = document.EmailForm.FirstName.value;
    var LastName = document.EmailForm.LaststName.value;
    var UserMessage = document.EmailForm.Message.value;

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