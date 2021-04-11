function newItem(){
//  To add a new item to the List
let li = $('<li></li>');
   let inputValue = $('#input').val();
   li.append(inputValue);

   if (inputValue === '') {
     alert('Enter an item to add to your list');
   } else {
     $('#list').append(li);
   }
//  To cross out a completed item from the List
li.on('dblclick',crossOut);

   function crossOut() {
 		li.toggleClass('strike');
 	}
