import smtplib, ssl, email
from email import encoders
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

import cgi

form = cgi.FieldStorage()
sender_email = form.getvalue('Email')
receiver_email = "jrscott812@outlook.com"
password = "PASSWORD"

#Create MIMEMultipart object
msg = MIMEMultipart("alternative")
msg["Subject"] = "Message from" + form.getvalue('FirstName') + form.getvalue('LastName') + "via you website form"
msg["From"] = sender_email
msg["To"] = receiver_email

part = MIMEText(form.getvalue('Message'), "html")
msg.attach(part)

# Create secure SMTP connection and send email
context = ssl.create_default_context()
with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, msg.as_string())