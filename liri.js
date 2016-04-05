var keys = require('./keys.js');
var request = require('request');

var Twitter = require('twitter');
var twitterKeys = keys.twitterKeys;
var client = new Twitter(twitterKeys);

var spotify = require('spotify');

var arguments = process.argv.slice(2);

var action = arguments[0];
var data = arguments[1];

switch(action) {
    case 'my-tweets':
        //console.log('twitter: '+action);
        var screenName = {screen_name: data};
        client.get('statuses/user_timeline', screenName, function(error, tweets, response){
            if (!error) {
                for (var i = 0; i < tweets.length; i++) {
                    console.log(tweets[i].text);
                    console.log('----------------------------------------------------');
                }
            }
        });
        break;
    case 'spotify-this-song':
        //console.log('spotify: '+action);
        console.log(data);
        spotify.search({ type: 'track', query: data }, function(err, results) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            }
            console.log(results[0]);
        });
        break;
    case 'movie-this':
        console.log('movie: '+action);
        break;
    case 'do-what-it-says':
        console.log('text: '+action);
        break;
    default:
        console.log('That is not a valid action.');
}

