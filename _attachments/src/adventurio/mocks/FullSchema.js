var schema = {
	stories : [{
		id : "123",
		description : "a funny story",
		creator : "david",
		tags : "fun, love",
		language : "de",
		rating : 500,
		
		pages : [{
			vPos : 1,
			fields : [{
				name : "spielername",
				hPos : 1,
				type : "text",
				title : "Please enter whatever",
				value : {}
			}, {
				name : "StoryDescription",
				hPos : 2,
				type : "text",
				title : "Please enter whatever",
				value : {}
			}]
		}, {
			vPos : 2,
			fields : [{
				name : "age",
				title : "Please enter your age",
				type : "text",
				value : {}
			}]
		}]
	}]
};
