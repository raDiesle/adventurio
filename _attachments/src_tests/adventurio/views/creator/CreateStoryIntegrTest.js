describe("Create new Story Model", function() {
describeUi("MAIN program", "/index.html", function() {
	
	it('check create story', function() {
		runs(function(){
			adventurio.routers.MainRouter.singleton.navigate("creator/stories/new", {trigger : true});
			var $form = $("form", new adventurio.views.creator.CreateStory().el);
			$("input[name='name']",$form).val("PeterPan");
			$("textarea[name='description']",$form).val("Das ist eine story");
			$("input[name='tags']",$form).val("fun");
			$("input[name='language']",$form).val("de");
			
			// simulate($("input[type='submit']",$form), 'click');
			$("input[type='submit']",$form).click();
		});
	});
});
});