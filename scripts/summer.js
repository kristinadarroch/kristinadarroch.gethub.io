console.log("f")
$(function(){
$.getJSON( "summer.json", function( data ) {
    console.log("test");
    console.log(data);
  var items = [];
  $.each( data, function( key, val ) {
      console.log("Hello")
      items.push( "<li><a href='" + val["link"] + "'><img src='" + val["imgSrc"] + "' class='summersty'/></a></li>" );
      
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "main" );
});
});