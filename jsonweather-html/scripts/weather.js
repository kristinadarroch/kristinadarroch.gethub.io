// Current Location Scripts
$(function() {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long) {
    $.ajax({
      url : 'https://api.wunderground.com/api/a5c6a1e0c48cd54e/geolookup/conditions/forecast/q/' + lat + ',' + long + '.json',
      dataType : "jsonp",
      success : function(data){
        console.log(data);
        var location = data.location.city + ', ' + data.location.state;
        var today = 0;  
        var temp = Math.round(data.current_observation.temp_f);
        var high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
        var low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;  
        var summary = data.current_observation.weather;
        var feelsLike = data.current_observation.feelslike_f;
        var windspeed = data.current_observation.wind_mph;
        var visibility = data.current_observation.visibility_mi;
        $('#h1').text(location);
        $('title').text(location + ' | Weather Home');
        $('#currenttemp').text(temp + "°F");
        $('#high').text("High " + high + "°F");
        $('#low').text("Low " + low + "°F");  
        $('#summary').text(summary);
        $('#feelslike').text("Feels Like: " + feelsLike + "°F");
        $('#windspeed').text("Windspeed: " + windspeed + " mph");
        $('#visibility').text("Visibility: " + visibility + " mi");
        $("#cover").fadeOut(250);
      }
    });
  }

  // A function for changing a string to TitleCase
  function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                                              });
  }
});


// Current Condition Options
// wind_dir
// windchill_f
// precip_today_in
