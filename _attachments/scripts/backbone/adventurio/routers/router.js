

var AdventurioController = {};

// AdventurioController.mainpage = function(type, match, ui){
	// console.log("mainpage " + type + " " + match);
	// new adventurio.views.ShowStories();
// };

AdventurioController.router = new $.mobile.Router([
		
		{"#mainpage(?:[?/](.*))?": { 
			handler: "mainpage", events:"s"
		}},
		{"#test(?:[?/](.*))?": {
			handler: "test", events:"bc"
		}},
		{"#viewstory(?:[?/](.*))?": {
			handler: "viewstory", events:"bc"
		}},
		{"#createstory(?:[?/](.*))?": {
			handler: "createstory", events:"bc"
		}}
		// ,{ defaultHandler:{ handler:"defaultHandler", defaultHandlerEvents: "bc"}}
], {
	
	mainpage : function(type, match, ui){
		console.log("mainpage " + type + " " + match);
		new adventurio.views.ShowStories();
	}, 
	test : function(type, match, ui){
		console.log("test page was opened");
	},
	viewstory : function(type, match, ui){
		console.log("viewstory page was opened");
		new adventurio.views.ShowStory();
	},
	createstory : function(type, match, ui){
		console.log("createstory page was opened");
		new adventurio.views.CreateStory();
	}
	
},
	{
	defaultHandler: function(type, match, ui){
		console.log("nothing found to match");
	}, defaultHandlerEvents: "s"}
);




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