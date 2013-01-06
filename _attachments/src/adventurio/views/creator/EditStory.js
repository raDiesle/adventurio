adventurio.views.creator.Story = adventurio.views.superClasses.Basic.extend({
    id : 'page_creator_EditStory',
    initialize : function () {
        this.model.on('change', this.render, this);
        this.model.lazyFetch();
    },
    getHeaderTitle : function () {
        return "edit story" + this.model.get("name");
    },
    getSpecificTemplateValues : function () {
        return this.model.toJSON();
    },
    onSubmitFormPressed : function (formData) {
        if (!this.model) {
            return;
        }
        // can use error dialog instead and use usage of localstorage
        this.model.save({
            "name" : $("#editStory_storyName").val(),
            "description" : $("#editStory_description").val(),
            "tags" : $("#editStory_tags").val()
        }, {
            success : function () {
                //location.hash = "creator/stories";
                history.go(-1);
            },
            error : function () {
                console.log("error");
                $('#editstory').couchLogin();
            }
        });
    }
});
