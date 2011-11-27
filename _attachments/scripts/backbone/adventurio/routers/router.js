var AdventurioController = new $.mobile.Router({
		"#mainpage(?:[?/](.*))?": "mainpage",
		},{
			mainpage: function(type, match, ui){
				console.log("mainpage " + type + " " + match);
				new adventurio.views.ShowStories();
				// console.log(showStories);
				// showStories.render();
			}
				
			// handler: function(type){
			// console.log("Index has been" + (type=="pagehide"?"hidden":"shown"));
		// }, events: "h,s"}
	
	},{
		defaultHandler: function(type, ui, page){
			console.log("Default handler called to to unknown route");
		}, defaultHandlerEvents: "s"
});
adventurio.routers = AdventurioController;



	// routes:{
		// "*other" : "defaultRoute",
		// "/stories" : "showStories"
// 		
	// },
// 	
	// showStories: function(){
// 		
	// },
// 	
	// defaultRoute: function(other){
		// console.log("Invalid page");
	// }