var urlParams = {};
(function () {
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.search.substring(1);

    while (e = r.exec(q))
       urlParams[d(e[1])] = d(e[2]);
})();



adventurio.utilies.Json.createElement = function ( json )
{	
	var element = document.createElement( json['name'] );	
	var attributes = json['attributes'];
	
	if( attributes != undefined )
	{
		var attributeKeys = Object.keys( attributes );
	
		for( index in attributeKeys )
		{
			var key = attributeKeys[index];
			var value = attributes[key];
			element.setAttribute(key, value);
		}
	}
	
	var children = json['children'];
	
	if( children != undefined )
	{
		for(index in children )
		{
			var child = adventurio.utilies.Json.createElement( children[index] );
			
			if( child != undefined)
			{
				element.appendChild( child );
			}	
		}
	}
	
	if( json['text'] != undefined ){
		element.appendChild( document.createTextNode( json['text'] ) );
	}
	
	return element;
};



adventurio.utilies.Json.addElement = function ( parent, json )
{
	document.getElementById(parent).appendChild( adventurio.utilies.Json.createElement( json ) );
}

/* for browsers that don't support keys() */
if(!Object.keys) Object.keys = function(o){
	
	if (o !== Object(o)){
		throw new TypeError('Object.keys called on non-object');
	}
	
	var ret = [], p;
	
	for(p in o){
		if(Object.prototype.hasOwnProperty.call(o,p)){
			ret.push(p);
		}
	}
	
	return ret;
};