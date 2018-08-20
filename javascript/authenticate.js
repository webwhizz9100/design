/**
 * DOM elements
 */

var form = document.getElementById('login_form');
var password = document.getElementById('password');
var username = document.getElementById('username');
var loginButton = document.getElementById('login_button');
var logoutButton = document.getElementById('logout_button');
var createTaskEl = document.getElementById('Task_create');
var body = document.getElementsByTagName('body')[0];


/**
 * Functions
 */

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