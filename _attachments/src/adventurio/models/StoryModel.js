adventurio.models.StoryModel = Backbone.Model.extend({ // Backbone.DeepModel.extend({
	initialize : function() {
		this.on('change', this.notifySingleton, this);
	},
	defaults : {
		levels : [{
			vPos : 1,
			pages : [{
				hPos : 1,
				header : {
					value : "Welcome to my new story!"
				},
				linkPageDecisions : [{
					pos: 1,
					vPos : 2,
					hPos : 1,
					value : "Go left"
				},{
					pos : 2,
					vPos : 2,
					hPos : 2,
					value : "Go right"
				}],
				fields : [
				 {
					pos : 1,
					type : "statictext",
					value : "<h1>Please enter your name:</h1>"
				},{
					pos : 2,
					type : "textfield",
					title : "Your name",
					value : "Your name"
				},{
					pos : 3,
					type : "statictext",
					value : "You're in a forest, everything is dark. What do you want to do next?"
				}
				]
			}]
		}]
	},
    createNewPageDefaults : function(hPosToCreate) {
        return {
            hPos : hPosToCreate,
                header : {
            value : "New Page Title"
        },
            linkPageDecisions : [{
                pos: 1,
                vPos : 2,
                hPos : 1,
                value : "Go left"
            },{
                pos : 2,
                vPos : 2,
                hPos : 2,
                value : "Go right"
            }],
                fields : [
                 {
                    pos : 1,
                    type : "statictext",
                    value : "Some new Text"
                }
        ]
        }
    },
	attributes : {
		_id : {},
		_rev : {},
		copyValuesToSingletonNeeded : true
	},
	getModelPagePath : function(vPos, hPos){
        assert(vPos != undefined, "vPos is undefined");
        assert(hPos != undefined, "hPos is undefined");

		return this.get("levels")[vPos-1].pages[hPos - 1];
	},
    getModelPagesPath : function(vPos){
        assert(vPos != undefined, "vPos is undefined");
        return this.get("levels")[vPos-1].pages;
    },
	getModelFieldsPath : function(vPos, hPos){
		var getModelPagePath = this.getModelPagePath(vPos, hPos).fields;
		return getModelPagePath;
	},
	getModelLinksPath : function(vPos, hPos){
        assert(vPos != undefined, "vPos is undefined");
        assert(hPos != undefined, "hPos is undefined");
		var getModelPagePath = this.getModelPagePath(vPos, hPos);
		return getModelPagePath.linkPageDecisions;
	},
    getModelLinkPath : function(vPos, hPos, linkPos){
        var modelLinkPath = this.getModelLinksPath(vPos, hPos);
        return modelLinkPath[linkPos-1];
    },
    getModelFieldValuePath : function(vPos, hPos, fieldPos){
		// return getModelFieldsPath(vPos, hPos) + "."+fieldPos+".value";
		var getModelFieldPath = this.getModelFieldPath(vPos,hPos, fieldPos);
		return getModelFieldPath.value;
	},
	getModelFieldPath : function(vPos, hPos, fieldPos){
		var modelFieldsPath = this.getModelFieldsPath(vPos, hPos);
        return modelFieldsPath[fieldPos-1];
	},
	setModelFieldValue : function(vPos, hPos, fieldPos, newValue){
		// return getModelFieldsPath(vPos, hPos) + "."+fieldPos+".value";
		this.get("levels").get(vPos-1).get("pages").get(hPos-1).get("fields").set({value : newValue});
//        return this.get("levels").get(vPos-1).get("pages").get(hPos-1).get("fields").set({value : newValue});
	},
    getLatestPlusOneHPagePos : function(vPos){
        var pageWithMaxHPos = _.max(this.get("levels")[vPos - 1].pages, function(singlePage){
            return singlePage.hPos;
        });
        return pageWithMaxHPos.hPos  + 1;
    },

    deleteCurrentPage : function(vPos, hPos){
        this.getModelPagesPath(vPos).remove(hPos);
    },
    addNewDefaultPage : function(vPos){
        var newPageData = this.createNewPageDefaults(this.getLatestPlusOneHPagePos(vPos));
        this.attributes.levels[vPos-1].pages.push(newPageData);
        //this.trigger("change");
        //this.set({levels : newLevels});
    },
	settings : {
		validation : {
			rules : {
				name : {
					"required" : true,
					"noSpecialChars" : true
				},
				id : "required",
				description : "required",
				tags : "required",
				language : "required"
			}
		}
	},
	
	validationError : function(model, errs) {
		console.log("validation error");
	},
	// validate : function(attributes){
	// if(!adventurio.models.UserSingleton.get().isAuthenticated()){
	// adventurio.routers.MainRouterSingleton.get().navigate("creator/login",{trigger : true});
	// return "error";
	// }
	// },
	lazyFetch : function() {
		if(this.id === adventurio.models.SingleStorySingleton.id) {
			// || adventurio.models.SingleStorySingleton.id != undefined
			// copy values to this model
			this.set(adventurio.models.SingleStorySingleton.attributes);
			this.attributes.copyValuesToSingletonNeeded = false;
			this.trigger("change");
			return;
		}

		this.attributes.copyValuesToSingletonNeeded = true;
		this.fetch();
		// Backbone.Model.prototype.fetch.call(this, {async: false}); // async seems not to doesnt work
	},
	// save : function(){
		
		 // Backbone.Model.prototype.set.apply(this, this.model.toJSON());
	// },
	notifySingleton : function(story, response) {
		if(this.attributes.copyValuesToSingletonNeeded) {
			console.log("copied values to singleton");
			adventurio.models.SingleStorySingleton.set(story.attributes);
		}
	},
	urlRoot : "/adventurio" // "/adventurio"
});

adventurio.models.SingleStorySingleton = new adventurio.models.StoryModel();
adventurio.models.SingleStorySingleton.off("change", this.notifySingleton);
