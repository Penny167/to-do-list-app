/* eslint-disable no-unused-vars */
function newItem(){
/* eslint-enable no-unused-vars */
//  To add a new item to the List
/* eslint-disable no-undef */
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

//  Only adding the list item if a value has been entered
  if (inputValue === '') {
     alert('Enter an item to add to your list');
  } else {
     $('#list').append(li);
     $('#toDoList')[0].reset();
  }

//  To cross out a completed item from the List
  li.on('dblclick',crossOut);

  function crossOut() {
    li.toggleClass('strike');
  }

//  Adding a delete button to list items to remove them
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.on('click', deleteListItem);

  function deleteListItem(){
  li.addClass('delete');
  }

//  Adding ability to re-order items on the List
  $('#list').sortable();

}
