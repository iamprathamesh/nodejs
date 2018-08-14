$(document).ready(function(){

  $('form').on('submit', function(){

      var songName = $('form input');
      var songobj = {songName: songName.val()};

      $.ajax({
        type: 'POST',
        url: '/search',
        data: songobj,
        success: function(data){
          //do something with the data via front-end framework
          //location.reload();
        }
      });

      return false;

  });

  /*$('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      //var route = '/todo/' + '!' + item '!';
      //route.replace(/!-/g, "");
      //route.replace(/-!/g, "");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });*/

});
