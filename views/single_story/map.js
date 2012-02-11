function(doc) {
	if(doc._id){
		emit(doc._id, doc);
	}
}