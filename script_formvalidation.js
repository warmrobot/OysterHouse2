const formButton = document.getElementById('button');

formButton.onclick = function() {
	event.preventDefault();
	const phone = document.getElementById('phone');
	const email = document.getElementById('email');
	const message = document.getElementById('formMessage');
	const button = document.getElementById('button');
	let classPhone = phone.classList;
	let classEmail = email.classList;
	let classMessage = message.classList;
	let classButton = button.classList;
		if (phone.value === "" && email.value === "") {
			classPhone.add ("alert");
			classEmail.add ("alert");
  			} 
  		
		if (phone.value != "" || email.value != "") {
			classPhone.remove ("alert");
			classEmail.remove ("alert");
			classMessage.add ("form-message_submitted");
			classMessage.remove ("form-message_nonsubmitted");
			classButton.add ("submitted");
			document.getElementById('form').reset()
  	}
}