// Mujtaba Shahid
// 60102677
// 23 March, 2023

function validateForm(){

			var validUser = validateUser("userName");

			var validPass = validatePass("regPassword");
			var validsName = validateName("fullname");
			var validsName = validateName("fullname");
			var validsName = validateName("fullName");
			var validEmail = validateEmail();
			var validEmail = validateEmail();
			var validAge = validateAge();
			var calcDOB = calculateAge();
			var validContact = validateContact();
			var validContact = validateContact();
			var validCardNo = validateCardNo();
			var validExpiry = validateExpiry();
			var validCVV = validateCVV();
			var validAddress = validateAddress();
			var choosePreference = changePreference();
			var validComment = validateComment();

			var validName;
			if(validUser && validPass && validsName && validateEmail &&
			 validAge && calcDOB && validContact && validCardNo && 
			 validExpiry && validCVV && validAddress && choosePreference && validComment){
				validName = true;
			}else{
				validName = false;
			}
			return validName
		}


// Subscribe Forms

function validateUser(username) {
	var user = document.getElementById(username);
	let validUser

	if (user.value == "") {
		user.placeholder = 'Enter Username!';
		user.style.color = 'red';
		user.style.border = '3px solid red'
		validUser = false;
	}else{
		user.placeholder = '';
		user.style.color = 'black';
		user.style.border = 'black';
		validUser = true;
	}
	return validUser
}

function validatePass(password){
	var password = document.getElementById(password);
	var cPassword = document.getElementById("cPassword");
	var invalid = document.getElementById("invalid");
	var noMatch = document.getElementById("noMatch");
	let validPass;
	const numb = ["@","$",0,1,2,3,4,5,6,7,8,9];
	if (password.value == ""){
		password.placeholder="Enter Password!";
		password.style.border="3px solid red";
		password.style.color="red";
		invalid.innerHTML = "";
		validPass = false;
	}else if(password.value.length<8 && !(password.value.includes(numb))){
		invalid.innerHTML = "Should be atleast 8 characters long!";
		invalid.style.color ="red";
		password.style.color ="red";
		password.style.border = "3px solid red";
		validPass = false; 
	}else{
		password.style.color="black";
		password.style.border="";
		invalid.innerHTML= "";
		validPass=true;
	}

	if (password.value != cPassword.value || password.value == ""){
		cPassword.placeholder = "Password doesn't match!";
		cPassword.style.border="3px solid red";
		cPassword.style.color="red";
		validPass = false;
	}else{
		cPassword.placeholder = "Confirm password";
		cPassword.style.border="";
		cPassword.style.color="";
		validPass=true;
	}
	return validPass;
}

function showPassword(){
	var password=document.getElementById("password");
	var check= document.getElementById("check")
	if (check.checked){
		password.type = "text"
	}else{
		password.type = "password"
	}
}

function validateName(name) {
	var fullname = document.getElementById(name);
	let validName;
	if (fullname.value == ""){
		fullname.placeholder="Enter full name!";
		fullname.style.border = "2px solid red";
		validName = false;
	}else{
		fullname.placeholder="";
		fullname.style.border = "";
		validName = true;
	}
	return validName;
}

function validateEmail(){
	var email = document.getElementById("email");
	var cEmail = document.getElementById("cEmail");
	var invalidEmail = document.getElementById("invalidEmail");
	let validEmail;
	if (email.value == ""){
		email.placeholder='Enter email address!';
		email.style.color='red';
		email.style.border='3px solid red';
		validEmail=false;
	}else if(email.value.substr(-4)!=".com" || !(email.value.includes("@")) || email.value.substr(0,3).includes("@")){
		invalidEmail.innerHTML='Enter valid email address!';
		invalidEmail.style.color='red';
		email.style.border='3px solid red';
		validEmail=false;
	}else{
		email.style.color='black';
		email.style.border='black';
		invalidEmail.innerHTML='';
		validEmail=true;
	}

	if (email.value != cEmail.value || email.value == ""){
		cEmail.placeholder = "Email do not match!";
		cEmail.style.border="3px solid red";
		cEmail.style.color="red";
		validEmail = false;
	}else{
		cEmail.placeholder = "Confirm email";
		cEmail.style.border="";
		cEmail.style.color="";
		validEmail=true;
	}

	return validEmail;
}

function validateAge(){
	let age = document.getElementById('age');
	let invalidAge = document.getElementById("invalidAge");
	if (age.value == "") {
		invalidAge.innerHTML = "Invalid age!"
		invalidAge.style.color = "red";
		age.style.border = "3px solid red";
		return false;
	} else if (invalidAge.value <18 || invalidAge.value >100){
		invalidAge.innerHTML = "please enter age between 18 and 100!"
		invalidAge.style.color = "red";
		age.style.border = "3px solid red";
		return false;
	}else{
		invalidAge.innerHTML = "";
		invalidAge.style.color = "";
		age.style.border = "1px solid black";
		return true;
	}
}

function calculateAge(){
	let dateOfBirth = document.getElementById("birthday");
	let age = document.getElementById('age');
	let invalidDOB = document.getElementById("invalidDOB");

	let thisYear = new Date().getFullYear();

	let dateOfBirthYear = dateOfBirth.value.split("-")[0];

	let dob = thisYear - dateOfBirthYear;

	if (dateOfBirth.value == "") {
		invalidDOB.innerHTML = "Enter D.O.B.!";
		dateOfBirth.style.border = "2px solid red";
		invalidDOB.style.color = "red";
		return false;

	}else if(dob != age.value){
		invalidDOB.innerHTML = "Age doesn't match!";
		dateOfBirth.style.border = "2px solid red";
		invalidDOB.style.color = "red";
		return false;

	}else{
		invalidDOB.innerHTML = "";
		dateOfBirth.style.border = "";
		invalidDOB.style.color = "";
		return true;
	}
}

function validateContact(){
	let contact = document.getElementById("contact");
	let length = contact.value.length;
	if (contact.value == ""){
		contact.style.border = "3px solid red";
		invalidContact.innerHTML = "Phone number required!"
		invalidContact.style.color = "red";
		return false;
	} else if (length < 12) {
		contact.style.border = "3px solid red";
		invalidContact.innerHTML = "Phone number must be 12 digits!"
		invalidContact.style.color = "red";
		return false;
	}else{
		invalidContact.innerHTML = "";
		invalidContact.style.color = "";
		contact.style.border = "";
		return true;
	}
}

function validateCardNo() {
	var cardNo = document.getElementById("cardNo");
	if (cardNo.value == "") {
		invalidCardNo.innerHTML = "Card Number required!";
		cardNo.style.border = "3px solid red";
		cardNo.style.color = "red";
		return false;
	}else{
		invalidCardNo.innerHTML = "";
		cardNo.style.color = "";
		cardNo.style.border = "";
		return true;
	}
}

function validateExpiry() {
	var expiry = document.getElementById("expiry");
	if (expiry.value == "") {
		expiry.style.border = "3px solid red";
		expiry.style.color = "red";
		return false;
	}else{
		expiry.style.color = "";
		expiry.style.border = "";
		return true;
	}
}

function validateCVV() {
	var cvv = document.getElementById("cvv");
	if (cvv.value == "") {
		cvv.style.border = "3px solid red";
		cvv.style.color = "red";
		return false;
	}else{
		cvv.style.color = "";
		cvv.style.border = "";
		return true;
	}
}

function validateAddress(){
	let address = document.getElementById("address");
	let invalidAddress = document.getElementById('invalidAddress');

	if (address.value < 1 || address.value > 666) {
		invalidAddress.innerHTML = "Please enter a value between 1 and 666!";
		address.style.border = "2px solid red";
		invalidAddress.style.color = "red";
		return false;
	}else{
		invalidAddress.innerHTML = "Zone# - Street# - Building#";
		address.style.border = "";
		invalidAddress.style.color = "";
		return true;
	}
}

// Contact Form

function changePreference() {
	let mail = document.getElementById("mail");
	let phone = document.getElementById('phone');
	let preference = document.getElementById('preference');

	if !(phone.checked || mail.checked){
		mail.style.border = "3px solid red";
		phone.style.border = "3px solid red";
		preference.innerHTML = "please select a preference!"
		preference.style.color = "red";
		return false;
	}else{
		mail.style.border = "";
		phone.style.border = "";
		preference.innerHTML = ""
        preference.style.color = "";
        return true;
    }
}

function validateComment() {
	let comment = document.getElementById("comment");
	// let invalidComment = document.getElementById("invalidComment");

	if (comment.value == ""){
		comment.style.border = "3px solid red";
		comment.placeholder = "Please leave a comment!";
		comment.style.color = "red";
		return false;
	}else{
		comment.style.border = "";
		comment.placeholder = "Feel free to leave your comments here.";
		comment.style.color = "red";
		return true;
	}
}

