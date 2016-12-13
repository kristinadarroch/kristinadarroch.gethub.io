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
    "id": "summergetit",
    html: items.join( "" )
  }).appendTo( "main" );
});
});