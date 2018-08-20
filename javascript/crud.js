
/**
 * DOM elements
 */

var ideasUL = document.getElementById('ideas');

/**
 * Event Listeners
 */

document.addEventListener("DOMContentLoaded", function(e) { 
  
	readIdeas();

});

document.addEventListener('change', function(e){

	var changed = e.target;

	if(changed.matches('#idea_create')){

		createIdea(changed.value);

		changed.value = '';
	}

});


/** 
 * Functions
 */

function readIdeas(){

	jQuery.ajax(
		{
	    	url: 'https://www.getdone.pw/wp-json/wp/v2/idea',
	    	method: 'GET',
		}
	).done(function(response){

		// render Ideas
		renderIdeas(response, ideasUL);

	});

}


// render the ideas into the container
function renderIdeas(ideas, container){
	
	// render from sratch on every call
	container.innerHTML = '';

	for(var i = 0; i < ideas.length; i++){
		var idea = ideas[i];
		var ideasTemplate =  `
			<li class="Idea">
				<input class="Idea_edit" type="text"value="${idea.title.rendered}"/>
				<button class="Idea_delete">Delete</button>
			</li>
		`;
		container.innerHTML += ideasTemplate;
	}
}


function createIdea(title){
	jQuery.ajax({
		url: 'https://www.getdone.pw/wp-json/wp/v2/idea', 
		method: 'POST',
		beforeSend: function(xhr){
			xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('auth_token'));
		},
		data: {
			title: title,
			status: 'publish'
		}
	}).done(function(response){
		readIdeas();
	});
}