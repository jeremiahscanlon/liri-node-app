# liri-node-app
LIRI - Language Interpretation and Recognition Interface

Basic javascript application run in command line using node.js that calls various APIs. Application allows users to get information about: tweets from a public twitter handle, songs using the Spotify API, and movies using the OMDB API. The app can also read input from a .txt file and saves all searches to a log.txt file. NOTE: the log.txt file contained in this repo has some entries as an example to start from scratch with your install simply open it and delete the contents.
 
## Instructions to run locally 

1) Clone repository 

```
git clone https://github.com/jeremiahscanlon/liri-node-app.git
```

2) Navigate to newly installed folder and download npm packages

```
cd *path*/liri-node-app/
npm install
```

3) Run liri.js by using node and passing in an *action* and *argument*

````
node liri.js *action* *argument*
````

## Argument Formats

In order for the app to run properly submit the *argument* as a string.

## Availalble Actions

1) **my-tweets** - pass in a public twitter handle as the *argument* to get the most recent 20 tweets by that handle.
````
node liri.js my-tweets 'jeremiahscanlon'
````

2) **spotify-this-song** - pass in a song title as the *argument* to get the artist, song name, spotify url, and album name for the first song response from spotify api.

````
node liri.js spotify-this-song 'dancing in the dark'
````

3) **movie-this** - pass in a movie title as the *argument* to get the Title, Year, IMDB Rating, Country, Language, Plot, Actors, Rotten Tomatoes Rating, Rotton Tomatoes UrL for the first movie response from the OMDB api.

````
node liri.js movie-this 'the matrix'
````

4) **do-what-it-says** - pass in the name of a text file (located in the same direcotry) as the *argument* to pull a new *action* *argument* combo from that file.

````
node liri.js do-what-it-says 'random.txt'
````

NOTE: the text inside the file needs to be in the following format: *action*,*argument* (i.e. - spotify-this-song,"I Want it That Way")


## Questions

For questions, contact Jeremiah Scanlon (jeremiah.j.scanlon@gmail.com)
