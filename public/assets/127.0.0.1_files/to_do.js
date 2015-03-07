$(function(){
  $('div.toDo section.list form input[type=checkbox]').change( function (){
    var Li = $(this).data(dataid._id);
    if ($(this).prop("checked")) {
      $.ajax({
        url     : "/todos/" + listItem_id +"/complete",
        method  : 'PUT'
      });
      alert('sent PUT request to '+'/todos/'+ listItem_id +'/complete');
    }else{
      $.ajax({
        url     : "todos" + listItem_id + "/uncomplete"
      });
      alert('sent PUT request to '+'/todos/'+ listItem_id +'/uncomplete');
    }
  });
  $('div.toDo section.list form button').on('click', function (){
    $.ajax({
      url  : "/todos/" + listItem_id,
      type : "POST"
    });
  });
});
