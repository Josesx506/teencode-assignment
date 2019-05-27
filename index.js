function passwordCheck() {
	event.preventDefault();
	let uName = document.getElementById('usernamesignup').value;
	let pass = document.getElementById('passwordsignup').value;
	if (uName === '' || pass === '') {
		return alert('Please, enter a username and password')
	}
	if (uName === 'admin' && pass === "admin123") {
		let correct = document.createElement('div');
		correctVal = "The Username and Password is Correct";
		correct.textContent = correctVal
		correct.classList.add('correct');
		return document.getElementById('form1').appendChild(correct);
	}
	else {
		let wrong = document.createElement('div');
		wrongVal = "The Username and Password is Wrong";
		wrong.textContent = wrongVal;
		wrong.classList.add('wrong');
		return document.getElementById('form1').appendChild(wrong);
	}
	event.allowDefault();
};

//This is to affect the results of the submit button
document.querySelector('.signin').addEventListener(
	'click', passwordCheck)