// TO DO before launching: try to add those event listeners to make the thing reactive

"use strict";
// initialize Hoodie
var hoodie  = new Hoodie();

// Todos Collection/View
function Todos($element) {
  var collection = [];
  var $el = $element;

  // Handle marking todo as "done"
  $el.on('click', 'input[type=checkbox]', function() {

    // If you wanna make this super snappy, remove the item from the DOM onclick, and 
    // let hoodie catch up when it can!
    // Let's break down what's happening:
    
    // 1. We need to reference each individual list itme somehow. Since the only thing that's
    //    being set dynamically that seperates each item is its data-id, let's use that!
    //    This is how we reference that data attribute:
    var current = $(this).parent().data('id');

    // 2. Now that we've got the data-id and stored it in 'current', let's find the list item
    //    that matches that data-id, and get it out of our DOM (this is jQuery's way if doing
    //    that, in case this looks unfamiliar:
    $("ul").find("[data-id='" + current + "']").remove();
    
    // 3. It may be out of the DOM, but until we delete it from the database, it's going to keep
    //    reappearing every time we reload the page. So, let's delete it from our database (this
    //    this affects both the local database and CouchDB):
    hoodie.store.remove('todo', current);

    // That's it! As a little JavaScript sidenote, we return false here to prevent the default
    // checkbox clicking behaviour. This has the exact same effect as 'event.preventDefault();'
    // has.
    return false;
  });

  // Handle "inline editing" of a todo.
  $el.on('click', 'label', function() {
    $(this).parent().parent().find('.editing').removeClass('editing');
    $(this).parent().addClass('editing');
    return false;
  });

  // Handle updating of an "inline edited" todo.
  $el.on('keypress', 'input[type=text]', function(event) {
    if (event.keyCode === 13) {
      hoodie.store.update('todo', $(this).parent().data('id'), {title: event.target.value});
    }
  });

  // Find index/position of a todo in collection.
  function getTodoItemIndexById(id) {
    for (var i = 0, len = collection.length; i < len; i++) {
      if (collection[i].id === id) {
        return i;
      }
    }
    return null;
  }

  function paint() {
    $el.html('');
    collection.sort(function(a, b) {
      return ( a.createdAt > b.createdAt ) ? 1 : -1;
    });
    for (var i = 0, len = collection.length; i<len; i++) {
      $el.append(
        '<li data-id="' + collection[i].id + '">' +
          '<input type="checkbox"> <label>' + collection[i].title + '</label>' +
          '<input type="text" value="' + collection[i].title + '"/>' +
        '</li>'
      );
    }
  }

  this.add = function(todo) {
    collection.push(todo);
    paint();
  };

  this.update = function(todo) {
    collection[getTodoItemIndexById(todo.id)] = todo;
    paint();
  };

  this.remove = function(todo) {
    collection.splice(getTodoItemIndexById(todo.id), 1);
    paint();
  };

  this.clear = function() {
    collection = [];
    paint();
  };
}

// Instantiate Todos collection & view.
var todos = new Todos($('#todolist'));

// initial load of all todo items from the store
hoodie.store.findAll('todo').then(function(allTodos) {
  allTodos.forEach(todos.add);
});

// when a todo changes, update the UI.
hoodie.store.on('add:todo', todos.add);
hoodie.store.on('update:todo', todos.update);
hoodie.store.on('remove:todo', todos.remove);
// clear todos when user logs out,
hoodie.account.on('signout', todos.clear);


// handle creating a new task
$('#todoinput').on('keypress', function(event) {
  // ENTER & non-empty.
  if (event.keyCode === 13 && event.target.value.length) {
    hoodie.store.add('todo', {title: event.target.value});
    event.target.value = '';
  }
});
