var server = require('./server.js')

var saveNotes = function(){
	$('#myModal').modal('toggle');
	var note = $('#noteSpace').val().trim();
	formNotes(note);
	storeNote(note+'~');
}

var formNotes = function(note){
	var messageBox = '<div class="card"><div class="card-block"><blockquote class="card-blockquote"><p class="data" style="display:inline">'+note+'</p></blockquote</div><img class="deleteNote" style="float:right" height="24" width="24" src="delete.png"/></div>';
    $('.noteSp').append(messageBox);
};

var storeNote = function(note){
	server.storeNotes(note);
};

$( document ).ready(function() {
	//$("#MyModal").modal();
    var notes = server.loadNotes();  
    processNotes(notes);
});


var processNotes = function(data){
    var noteArray = data.split("~");
    for(var i=0;i<noteArray.length;i++){
    	if ( noteArray[i] )
    		formNotes(noteArray[i])
    }
};

var deleteAll = function(){
	$('.noteSp').empty();
	server.emptyFile();
};

var deleteNote = function(that){
	var note =  $(that).parents('.card').find('.data').text().trim();
	$(that).parents('.card').remove();
	server.deleteNote(note);
};