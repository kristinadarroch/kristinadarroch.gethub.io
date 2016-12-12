/* $.each( data, function (key, val) {
    items.push( "<a href='" + val["link"] + "'><img src+'" + val["imgSrc"] + "'/></a> );
               
});
    <a href=' somepath.html'>
    */
console.log("f")
$.getJSON( "/CIT230FinalProject/spring.json", function( data ) {
    console.log("test");
    console.log(data);
  var items = [];
  $.each( data, function( key, val ) {
      console.log("Hello")
      items.push( "<a href='" + val["link"] + "'><img src+'" + val["imgSrc"] + "'/></a>" );
    /* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});