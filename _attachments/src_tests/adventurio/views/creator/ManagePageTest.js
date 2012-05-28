describe(
		"Manage Page should initialize ",
		function() {
			it('should initialze basics', function() {
				expect(adventurio.views.creator.ManagePage).toBeDefined();
				
				var managePage = new adventurio.views.creator.ManagePage({
					parameter : {
						'vPos' : 1,
						'hPos' : 1
					},
					model : new adventurio.models.StoryModel({
						_id : 123456
					})
				});
				
				var viewModel = managePage.model.get("fields");
				expect(viewModel).toBeDefined();
				expect(viewModel[0].type).toBe("text");
				
				// expect(adventurio.views.creator.ManagePage.singleton.attributes.editModeStatus.ENTERS_WRITE_MODE).toBe(true);
				// expect(adventurio.views.creator.ManagePage.singleton.model.get("_id")).toBe(storyId);
			}),
			it('should save edited value to model', function() {
				// var ManagePage = new adventurio.views.creator.ManagePage({
					// parameter : {
						// vPos : 1,
						// hPos : 2
					// },
					// model : new adventurio.models.StoryModel()
					// ,initialize : function(){ // not needed
					// // nothing
				// },render : function(){
					// // nothing
				// }
// 				
				// });
// 				
				// var clickEvent = {preventDefault : function(){
					// // do nothing
					// }, currentTarget : {data : function(identity){
						// return 1;
					// }}}
// 				
				// ManagePage.saveEditedValue(clickEvent);
			});
			
			
		}
);