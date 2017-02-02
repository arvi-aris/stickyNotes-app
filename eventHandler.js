$('#addNote').off().on('click',function(){
	saveNotes();
});

$('#deleteAll').off().on('click',function(){
	deleteAll();
})

$('.deleteNote').off().on('click',function(){
	deleteNote(this);
})

$(document).off().on('click','.deleteNote',function(){
	deleteNote(this);
});

$('#openPopup').off().on('click',function(){
	$("#myModal").modal();
})