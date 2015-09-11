$("#container").scroll(function() {
  if ($("#container").scrollTop() > 0) {
    $(".nav-logo").css({"height": "100%"});
  } else {
    $(".nav-logo").css({"height": "auto"});
  }
});

$(function() {
  var queryurl = window.location.href.substr(window.location.href.lastIndexOf("/"));
  $(".link").each(function(){
    if($(this).attr("href") == queryurl || $(this).attr("href") == '' ){
      $(this).addClass("active");
    }
  });
});
