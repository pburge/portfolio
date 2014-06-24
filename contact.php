<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];


//If all required fields are filled
if (!empty($field_name)&&!empty($field_email)&&!empty($field_message))
	{
	$mail_to = 'paul.burge8@gmail.com';
	$subject = 'Message from a site visitor: '.$field_name;

	$body_message = 'From: '.$field_name."\n";
	$body_message .= 'E-mail: '.$field_email."\n";
	$body_message .= 'Message: '."\n";
	$body_message .= $field_message;

	$headers = 'From: '.$field_email."\r\n";
	$headers .= 'Reply-To: '.$field_email."\r\n";

	$mail_status = mail($mail_to, $subject, $body_message, $headers);

	echo "Thank you for your message.";
	?>
	<script language="javascript" type="text/javascript">
		alert("Thanks for the message! I'll be sure to contact you as soon as I can!");
		window.location = 'index.html';
	</script>
<?php
	}
