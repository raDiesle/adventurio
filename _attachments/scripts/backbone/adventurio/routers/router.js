

var AdventurioController = {};

// AdventurioController.mainpage = function(type, match, ui){
	// console.log("mainpage " + type + " " + match);
	// new adventurio.views.ShowStories();
// };

AdventurioController.router = new $.mobile.Router([
		
		{"#mainpage(?:[?/](.*))?": { handler: "mainpage", events:"bc"
		}},
		{"#viewstory(?:[?/](.*))?": {
			handler: "viewstory", events:"bc"
		}}
], { 
	mainpage : function(type, match, ui){
		console.log("mainpage " + type + " " + match);
		new adventurio.views.ShowStories();
	}, 
	viewstory : function(type, match, ui){
		console.log("viewstory page was opened");
		new adventurio.views.ShowStory();
		}
});




		// },{
// 			
				// // console.log(showStories);
				// // showStories.render();
			// }
// 				
			// // handler: function(type){
			// // console.log("Index has been" + (type=="pagehide"?"hidden":"shown"));
		// // }, events: "h,s"}
// 	
	// },
	// { "#viewstory(?:[?/](.*))?": "viewstory"},
			// {
				// viewstory: function(type, match, ui){
					// console.log("viewstory page was opened");
					// new adventurio.views.ShowStory();
// 				
			// }
// 			
	// },{ "#test(?:[?/](.*))?": "test"},
		// {
			// test: function(type,match, ui){
				// console.log("test page was opened");
		// }
// 		
	// },{
		// defaultHandler: function(type, ui, page){
			// console.log("Default handler called to to unknown route");
		// }
		// // , defaultHandlerEvents: "s"
// });

adventurio.routers = AdventurioController.router;



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