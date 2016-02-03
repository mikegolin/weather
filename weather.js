$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.



//    if (data.currently.precipProbability = 0) {
    var markup = "In " + data.timezone + " the current temperature is " + data.currently.temperature +
    " degF but if feels like " + data.currently.apparentTemperature + ". Today was a " +
    data.currently.summary + " day. There is a " + data.currently.precipProbability*100 + "% chance of precipitation.";
//  } else {
//    var markup = "In " + data.timezone + " the current temperature is " + data.currently.temperature +
//    " degF but if feels like " + data.currently.apparentTemperature + ". Today was a " +
//    data.currently.summary + " day. There is a " + data.currently.precipProbability*100 + "% chance of " + data.currently.precipType + ".";
//  };



    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
