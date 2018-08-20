
// save our Ideas container
var ideasUL = document.getElementById('ideas');

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