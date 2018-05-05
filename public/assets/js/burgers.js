$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
    //   var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: "true"
      };
  

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed Devoured to true");

          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {

      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim()
      };
  

      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");

          location.reload();
        }
      );
    });
  });