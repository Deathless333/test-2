function authenticate (login, password) {
	if (login === 'login' || password === 'password') {
	  return 'You log in';
	} else {
	  return 'Incorrect!!!';
	}
}	
