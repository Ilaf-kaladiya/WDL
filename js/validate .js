function checkEmail(e){
	var element=e.target;
	if(/[^a-zA-Z0-9@._]/.test(element.value))
	{
		alert("Email is invalid!Only characters a-z A-Z 0-9 @ . _ are allowed.");
		element.value=""
		return false;
	}
	if(!/[a-zA-Z]/.test(element.value)){
		alert("Email is invalid!You are missing a-z A-Z.");
		element.value=""
		return false;	
	}
		if(!/[@]/.test(element.value)){
		alert("Email is invalid!You are missing @.");
		element.value=""
		return false;	
	}
		if(!/[.]/.test(element.value)){
		alert("Email is invalid!.domain name is missing.");
		element.value=""
		return false;	
	}
	return true;
}

function checksubject(e){
	var element=e.target;
	if(/[^a-zA-Z]/.test(element.value))
	{
		alert("Email is invalid!Only characters a-z A-Z are allowed.");
		element.value=""
		return false;
	}.
	return true;

}

function submitForm(e){

	if(document.getElementById('user-email').value!="" && document.getElementById('messsage').value!=""){
		var contact= document.getElementByClassName("contact-form");
		contact[0].innerHTML="<h3>Thank u</h3>"
	}
}