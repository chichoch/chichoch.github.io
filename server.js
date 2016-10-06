var express = require('express'), 
     app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));

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

//Delete a list
app.delete('/:listId', function(req, res) {
    var listId = parseInt(req.params.listId);
    var data = { status: false};
    for (var i=0, len=lists.length;i<len;i++){
        console.log('Going through the list');
        if (lists[i].listId === listId) {
            lists.splice(i,1);
            data = { status: true,
                   data: lists[i]};
            console.log('Deleted List with id: ' + listId);
            break;
        }
    }
    res.json(data);
});

//Delete a row from list:
app.delete('/:listId/:id', function(req, res) {
    var listId = parseInt(req.params.listId);
    var id = parseInt(req.params.id);
    var data = {status: false};
    
    //Double for-loop, as we don't really know if we'll be counting up the number of lists.
    for (var i=0, len=lists.length;i<len;i++){
        if (lists[i].listId === listId) {
            for (var j=0, len2=lists[i].list.length; j<len2; j++){
                if (lists[i].list[j].id === id) {
                    console.log('Deleted row: "' + lists[i].list[j].row + ' " From list with ID: ' + listId);
                    lists[i].list.splice(j,1);
                    data = { status: true};
                    break;    
                }
            }
        }
    }
    res.json(data);
});


/*           SOCKET.IO               */
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});



http.listen(8080, function(){
   console.log('Running on port 8080'); 
});
//app.listen(8080);
//console.log('Running on port 8080');


var lists = [
	{
		listId: 1,
		url: 'default',
		name: 'Default List!',
		list: [
			{
				id: 1,
				row: 'Create this list',
				checked: true
			}, 
			{
				id: 2,
				row: 'Create another list',
				checked: false
			}
		]
	},
    {
		listId: 2,
		url: 'default2',
		name: '2222',
		list: [
			{
				id: 1,
				row: 'Create this list',
				checked: true
			}, 
			{
				id: 2,
				row: 'Create another list',
				checked: false
			}
		]
	}];