 /* $.each( data, function (key, val) {
    items.push( "<a href='" + val["link"] + "'><img src+'" + val["imgSrc"] + "'/></a> );
               
});
    <a href=' somepath.html'>
    */
console.log("f")
$(function(){
$.getJSON( "spring.json", function( data ) {
    console.log("test");
    console.log(data);
  var items = [];
  $.each( data, function( key, val ) {
      console.log("Hello")
      items.push( "<li><a href='" + val["link"] + "'><img src='" + val["imgSrc"] + "' class='styles'/></a></li>" );
      
  });
 
  $( "<ul/>", {
    "id": "my-new-list",
    html: items.join( "" )
  }).appendTo( "main" );
});
});