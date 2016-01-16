/* Sample function - not called */
function getWeatherDemo() {
    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
          'where woeid in (select woeid from geo.places(1) where text="London")&format=json', function (data) {
        console.log(data);
        alert("The temperatute in London is " +
            data.query.results.channel.item.condition.temp +
            data.query.results.channel.units.temperature
        );
    });
}

function getWeather() {
    var location = $('#city').val();

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            bootbox.alert("Location not found: " + location + "!");

        } else {
            $('.jumbotron').html('<h2>' + data.query.results.channel.item.title + '</h2>' +
                data.query.results.channel.item.description)
            $('.container').show();
        }

    });
}