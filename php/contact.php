<?php

$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];

$mail_to = 'paul.burge8@gmail.com';
$subject = 'Portfolio Message: '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { 
	?>
	<script language="javascript" type="text/javascript">
		alert("Thanks for the message! I'll be sure to contact you as soon as I can!");
		window.location = '../index.html';
	</script>
<?php
}
?>