adventurio.views.creator.DestinationPageSelection = adventurio.views.creator.BrowseStory.extend({

//--> USE this instead of events manipulation !
    getSpecificTemplateValues : function(){
        var optionalUrlParameterPrefix = "/";
        return _.extend({
            'srcVPos' : optionalUrlParameterPrefix+this.options.parameter.srcVPos,
            'srcHPos' : optionalUrlParameterPrefix+this.options.parameter.srcHPos,
            'linkPos' : optionalUrlParameterPrefix+this.options.parameter.linkPos
        }, this._super("getSpecificTemplateValues", [])); // this.constructor.__super__.getSpecificTemplateValues
    }
//    events : function(){
//        return _.extend({
//            "click a" : "selectedLinkDestination"
//        }, this.constructor.__super__.events);
//    },
//    selectedLinkDestination : function(clickEvent){
//        clickEvent.preventDefault();
//
//        var destVPos = this.options.parameter.verticalFrom;
//        // http://jquerymobile.com/demos/1.1.0/docs/api/methods.html
//        //$.mobile.path.parseUrl(url)
//        var destHPos = clickEvent.currentTarget.hash;//this.options.parameter.destHPos;
//        var selectedDestinationLink =
//        "#creator/stories/"+this.model.storyId+"/"+this.options.parameter.srcVPos+"/"+this.options.parameter.srcHPos+"/links/"+this.options.parameter.linkPos+"/"+destVPos+"/"+destHPos;
//
//    }
});
