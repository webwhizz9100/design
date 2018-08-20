
// save our Ideas container
var ideasUL = document.getElementById('ideas');

// make a request for Ideas
var ideas = jQuery.ajax(
	{
    	url: 'https://www.getdone.pw/wp-json/wp/v2/idea',
    	method: 'GET',
	}
).done(function(response){

	// render Ideas
	readIdeas(response, ideasUL);

});

// render the ideas into the container
function readIdeas(ideas, container){
	
	// render from sratch on every call
	container.innerHTML = '';

	for(var i = 0; i < ideas.length; i++){
		var idea = ideas[i];
		var ideasTemplate =  `
			<li class="Idea">
				<input class="Idea_edit" type="text"value="${idea.title.rendered}"/>
				<button class="Idea_delete" >Delete</button>
			</li>
		`;
		container.innerHTML += ideasTemplate;
	}
}