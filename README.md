# liri-node-app
LIRI - Language Interpretation and Recognition Interface

Basic javascript application run in command line using node.js that calls various APIs. Application allows users to get information about: public tweets from a user, movies using the OMDB API, and songs using the Spotify API. 
 
## Instructions to run locally 

1) Clone repository and download npm packages 

```
git clone https://github.com/jeremiahscanlon/liri-node-app.git
npm install
```

2) Run liri.js by using node and passing in an action and argument

````
node liri.js *action* *argument*
````

## Argument formats

In order for the app to run properly submit the *argument* as a string.

## Availalble Actions

1) my-tweets - pass in a public twitter handle as the *argument* to get the most recent 20 tweets by that handle
````
node liri.js my-tweets 'jeremiahscanlon'
````

2) spotify-this-song - pass in a public twitter handle as the *argument* to get the most recent 20 tweets by that handle

````
node liri.js spotify-this-song 'dancing in the dark'
````

3) movie-this - pass in a public twitter handle as the *argument* to get the most recent 20 tweets by that handle

````
node liri.js movie-this 'the matrix'
````

4) do-what-it-says - pass in the name of a text file as the *argument* to get a new *action* *argument* combo from that file

````
node liri.js do-what-it-says 'random.txt'
````

NOTE: the text inside the file needs to be in the following format: *action*,*argument* (i.e. - spotify-this-song,"I Want it That Way")


## Questions

For questions, contact Jeremiah Scanlon (jeremiah.j.scanlon@gmail.com)
