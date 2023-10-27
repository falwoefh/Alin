

function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";

}
document.getElementById("defaultOpen").click();


function registerNewUser() {
	console.log('running...')
	var fname = document.getElementById('name').value
	var email = document.getElementById('email').value
	var password = document.getElementById('pw').value
	var confirmPwd = document.getElementById('comfirm_password').value
	if (password != confirmPwd) {
		alert('PASSWORD AND PASSWORD CONFIRM PASSWORD DOES NOT MATCH')
		return false;
	}
	localStorage.setItem('fullname', fname)
	localStorage.setItem('email', email)
	localStorage.setItem('password', password)
	alert("YOU ARE SIGNED UP")
	return true;
}
function signIn(){
    var storedName = localStorage.getItem('fullname');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('username');
    var userPw = document.getElementById('password_1');
    if(userName.value == storedName && userPw.value == storedPw){
        alert('YOU ARE LOGGED IN');
    }else{
        alert('WRONG USERNAME OR PASSWORDS');
    }
}




