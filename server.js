var server = {
	 fs : require('fs'),
	 storeNotes : function(note){
		server.fs.appendFile(__dirname+"/notes.txt", note, function(err) {
		    if(err) {
		        return console.log(err);
		    }
		    console.log("The file was saved!");
		}); 
	},
	loadNotes : function(){
		notes = server.fs.readFileSync(__dirname+"/notes.txt", 'utf8');
		return notes;
	},
	emptyFile : function(){
		server.fs.truncate(__dirname+"/notes.txt", 0, function(){console.log('done')})
	},
	deleteNote : function(note){
		notes = server.fs.readFileSync(__dirname+"/notes.txt", 'utf8');
		noteArray = notes.split('~');
		index = noteArray.indexOf(note);
		noteArray.splice(index,1);
		notes = noteArray.join('~');
		server.emptyFile();
		server.storeNotes(notes);
	}
} 
module.exports = server;