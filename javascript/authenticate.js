function getToken(username, password){

	jQuery.ajax({
		url: 'https://www.getdone.pw/wp-json/jwt-auth/v1/token',
		method: 'POST',
		data: {
			'username': username,
			'password': password,
		}
	})
	.done(function(response){
		saveToken(response.token);		
	})
	.fail(function(response){
		console.error(response);
	})
}

function saveToken(token){
	sessionStorage.setItem('auth_token', token);
}

function deleteToken(){
	sessionStorage.removeItem('auth_token');
}