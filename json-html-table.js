var json2html = require('node-json2html');

    var nested = {Name:'Table Name', Children:[ {Name:'Table Data'},{Name:'Table Data'} ]};

    var transform_parent = [
			{tag:'span',html:'${Name}'},
			{tag:'table',children:function(){return(json2html.transform(this.Children, transform_child));}}
		];

	var transform_child = 
			{tag:'tr',children:[
				{tag:'td',html:'${Name}'}
			]};
        
    var html = json2html.transform(nested,transform_parent);

    console.log(html);