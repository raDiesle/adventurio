describe(
		"Create Page should initialize ",
		function() {
			it('should initialze basics', function() {
				expect(adventurio.views.creator.CreatePage).toBeDefined();
				expect(adventurio.views.creator.CreatePage.model).toBeUndefined();
				
				// var storyId = "5bbb283105f08f47ba02597b8500027b";
				// var urlToCurrentCreatePage = "creator/stories/"+storyId+"/1/1";
				// adventurio.routers.MainRouter.singleton.navigate(urlToCurrentCreatePage, {trigger: true});
				
				// var viewModel = adventurio.views.creator.CreatePage.model.get("fields");
				// expect(viewModel).toBeDefined();
				// expect(viewModel[0].type).toBe("text");
				
				// expect(adventurio.views.creator.CreatePage.singleton.attributes.editModeStatus.ENTERS_WRITE_MODE).toBe(true);
				// expect(adventurio.views.creator.CreatePage.singleton.model.get("_id")).toBe(storyId);
			}),
			it('should save edited value to model', function() {
				var createPage = new adventurio.views.creator.CreatePage({
					parameter : {
						vPos : 1,
						hPos : 2
					},
					model : new adventurio.models.StoryModel()
					,initialize : function(){ // not needed
					// nothing
				},render : function(){
					// nothing
				}
				
				});
				
				var clickEvent = {preventDefault : function(){
					// do nothing
					}, currentTarget : {data : function(identity){
						return 1;
					}}}
				
				createPage.saveEditedValue(clickEvent);
			});
			
			
		}
);