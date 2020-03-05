require("dotenv").config();
// const axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var divider = '\-o-  -o-  -o-  -o-  -o-  -o-  -o-  -o-  -o-  -o-  -o-  -o-  -o-\n\n';
spotify
    .request(`https://api.spotify.com/v1/search?q=${process.argv[3]}&type=track`)
    .then(function (data) {
        var track = data.tracks.items[0];
        console.log('Artist(s): ' + track.artists[0].name);
        console.log('Track: ' + track.name);
        console.log('Spotify song link: ' + track.preview_url);
        console.log('Album: ' + track.album.name);
        console.log(divider);
    })
    .catch(function (err) {
        console.error('Error occurred: ' + err);
    });




