adventurio.views.creator.EditPageFormItemOptionsWindow = adventurio.views.superClasses.Basic.extend({
	el : $("#creator_page_formitem_options"),
	initialize : function(){
		$().ready($.proxy(this.render, this)); // hack
	},
	render : function(){
		this._super("render", [adventurio.templates.formitems.Options.compile(), "FormItem options", {role: "dialog"}]);
	}
});