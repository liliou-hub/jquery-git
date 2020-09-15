$(document).ready(function(){

    function displaySecretText() {
        $('#exercise #text').show();
    }

    $("button").click(function(){
      $("#text").css("display","block",function() {
          return displaySecretText()
        
      });
    });
  });