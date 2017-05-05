//business logic //
var numbers= function(conditionals){
  for (var i = 1; i <= conditionals; i++) {
    if (i% 3===0 & i%5===0) {
      $("ul#output").append("<li class='remove'>pingpong</li>");
    }else if(i% 3===0){
      $("ul#output").append("<li class='remove'>ping</li>");
    }else if(i% 5===0){
      $("ul#output").append("<li class='remove'>pong</li>");
    }else($("ul#output").append("<li class='remove'>"+(i)+"</li>"))
  }
}



//user interface//
$(document).ready(function(){
    $("form#ping-pong").submit(function(event){
      event.preventDefault();
      $("li.remove").remove();
      var input=parseInt($("input#pong").val())
      numbers(input)
    })
})
