adventurio.views.creator.ManagePage = adventurio.views.superClasses.Basic.extend({
	id : "page_creator_vPos_hPos",
    initialize : function() {
        this.model.on('change', this.render, this);
        this.model.lazyFetch();
    },
        events : function(){
        return _.extend({
            "click a[type='delete']" : "deletePage"
        }, this.constructor.__super__.events);
    },
    deletePage : function(event){
        this.model.deleteCurrentPage(this.options.parameter.vPos, this.options.parameter.hPos);

        this.model.save(this.model.toJSON(), {
            success : function(model, response) {
                console.log("successfully deleted page");
            }
        });
    },
    getCurrentPage : function() {
        var requestedPage = this.model.getModelPagePath(this.options.parameter.vPos, this.options.parameter.hPos);
        if(requestedPage == undefined){
            requestedPage = this.model.createNewPageDefaults();
            this.model.addNewDefaultPage(this.options.parameter.vPos);

            this.model.save(this.model.toJSON(), {
                success : function(model, response) {
                    console.log("successfully persisted new page");
                }
            });
        }
		return requestedPage;
	},
	getSpecificTemplateValues : function() {
		return {
			headerTitle : this.getCurrentPage().header.value,
			props : {
				vertical : this.options.parameter.vPos,
				horizontal : this.options.parameter.hPos,
				_id : this.model.id
			},
			fields : this.getCurrentPage().fields,
			linkPageDecisions : this.getCurrentPage().linkPageDecisions
		}
	}
});
