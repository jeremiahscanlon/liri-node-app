// =====================================================================
// Requires
// =====================================================================

// hidden keys file that holds the key data
var keys = require('./keys.js');
// require the twitter npm app
var Twitter = require('twitter');
var twitterKeys = keys.twitterKeys;
var client = new Twitter(twitterKeys);

// require the spotify npm app
var spotify = require('spotify');

// require the requst npm app
var request = require('request');

// require the file system node app
var fs = require('fs');

// =====================================================================
// Grab the input from the command line
// =====================================================================

// build a new array by removing the first two items
var arguments = process.argv.slice(2);

// grab the action from input
var action = arguments[0];
// grab the data from input
var data = arguments[1];

// =====================================================================
// Main function
// =====================================================================

// create a function that takes the input of an action and data.
function doit(action,data) {
    // create a switch case function based on the action from the input
    switch(action) {
        // if the action is "my-tweets"
        case 'my-tweets':
            // the screen name is the "data" variable
            var screenName = {screen_name: data};
            // use the tiwtter keys to request the most recent tweets from that screen name
            client.get('statuses/user_timeline', screenName, function(error, tweets, response){                
                // if there is no error
                if (!error) {
                    // if there is 1 or more tweets
                    if(tweets.length > 0){
                        // loop through tweet text with a line between each tweet
                        for (var i = 0; i < tweets.length; i++) {
                            console.log(tweets[i].text);
                            console.log('----------------------------------------------------');
                        } 
                    // if there are zero tweets
                    } else {
                        // tell the user to choose a new handle
                        console.log('Please search for another Twitter handle.')
                    }
                // if there is an error
                } else {
                    // tell the user the error
                    console.log('Error: '+error);
                }
            });
            // end the switch case here
            break;

        // if the action is "spotify-this-song"
        case 'spotify-this-song':
            // use spoify tool to request a search for the track name as the "data" variable
            spotify.search({ type: 'track', query: data }, function(err, results) {
                // if there is an error console log it
                if ( err ) {
                    console.log('Error occurred: ' + err);
                    return;
                }
                // if there are results
                if (results.tracks.items[0].artists[0].name) {
                    // tell the user the results
                    console.log('Artist Name: '+results.tracks.items[0].artists[0].name);
                    console.log('Song Name: '+results.tracks.items[0].name);
                    console.log('Spotify URL: '+results.tracks.items[0].artists[0].external_urls.spotify);
                    console.log('Album Name: '+results.tracks.items[0].album.name);
                
                // if there are no results
                } else {
                    // tell the user to choose a new song
                    console.log('We did not find any results for that song.');
                } 
            });
            // end the switch case here
            break;

        // if the action is "spotify-this-song"
        case 'movie-this':
            // use the request app to send a request to the OMDB api
            request('http://www.omdbapi.com/?t='+data+'&y=&plot=short&tomatoes=true&r=json', function (error, response, body) {
                // if there is no error and a status of 200
                if (!error && response.statusCode == 200) {
                    // convert the result string to actionable JSON
                    body = JSON.parse(body);
                    // console log the specific results that we want
                    // Title
                    console.log('Title: '+body.Title);
                    // Year
                    console.log('Year: '+body.Year);
                    // IMDB Rating
                    console.log('IMDB Rating: '+body.imdbRating);
                    // Country
                    console.log('Country: '+body.Country);
                    // Language
                    console.log('Language: '+body.Language);
                    // Plot
                    console.log('Short Plot: '+body.Plot);
                    // Actors
                    console.log('Actors: '+body.Actors);
                    // Rotten Tomatoes Rating
                    console.log('Rotten Tomatoes Rating: '+body.tomatoUserRating);
                    // Rotton Tomatoes UrL
                    console.log('Rotton Tomatoes URL: '+body.tomatoURL);
                // if there is an error
                } else {
                    // tell the user the error
                    console.log('Error: '+error);
                }
            })
            // end the switch case here
            break;

        // if the action is "spotify-this-song"
        case 'do-what-it-says':
            // use Node file system to get and read the file
            fs.readFile(data, "utf8", function(err,data){
                // split the info on the file at the comma
                var array = data.split(',');
                // create new variables with the array data
                var fileAction = array[0];
                var fileData = array[1];
                // run the main function again with the data from the file.
                doit(fileAction,fileData);
            });
            // end the switch case here
            break;
        // if the action does not meet any case ...
        default:
            // ask them to submit a valid action
            console.log('That is not a valid action.');
    }
}

// =====================================================================
// Run the main function with the initial action and data
// =====================================================================

doit(action,data);