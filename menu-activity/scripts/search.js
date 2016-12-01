$('#query').keyup(function(){
  // my code goes here
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
  
  }); // end getJSON
    
    console.log(data);
    
}); // end keyup