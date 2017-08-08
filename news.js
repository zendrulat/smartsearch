 define(['jquery', 'complete'], function($) {
  $(function($, complete) {
   $(document).ready(function() {
    var data = [];
    var outputdata = [];
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
     url: root + '/posts',
     method: 'GET',
     dataType: "json",
     contentType: 'application/json; charset=utf-8',
     dataType: 'json',
     success: function(data) {
      $.each(data, function(i) {
       outputdata.push(data[i].title);
      });

      $("#tags").autocomplete({
       source: outputdata,

      }); //end of auto
     },
    }); //end of ajax
   });
  });
 });
 