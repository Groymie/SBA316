Looking for the New Note button to create a new note on the Notes side of the page, and empty out the title input box and the textarea

Implement a save note button that will save an object that looks like this:
{
'id': some random id, use math.random some something like it
'title': contents of the title input box,
'body': contents of the textarea input box
}

This object should be saved to an array that is stored in session storage so you don't have to worry about logic to delete the note. Everything goes away on browser close
