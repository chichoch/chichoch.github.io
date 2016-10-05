var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/'));


//TODO: Do stuff
app.get('/:id', function(req, res) {
	var listId = parseInt(req.params.id);
	var data = {};
	for (var i=0 , len=lists.length ; i<len ; i++) {
		if (lists[i].id === listId) {
			data = lists[i];
			break;
		}
	}
	res.json(data);
});

app.listen(8080);


var lists = [
	{
		id: 1,
		url: 'default',
		name: 'Default List!',
		list: [
			{
				id: 1,
				rowTitle: 'Create this list',
				checked: true
			}, 
			{
				id: 2,
				rowTitle: 'Create another list',
				checked: false
			}
		]
	}];