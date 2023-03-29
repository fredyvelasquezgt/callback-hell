const { response } = require('express');
const fs = require('fs');
const request = require('request');

fs.readFile('movie.txt', (error, query) => {
    if(error) return console.log(error);

    request('https://api.themoviedb.org/3/search/movie?api_key=12724b00b4c063fbc5f09f5729c5aec8&query='+query.toString(), {timeout: 0}, (error, response, body) => {
        if(error) return console.log(error);

        let movies = JSON.parse(body);

        movies.results.forEach((movie) => {
            console.log(movie.original_title)
        })
    })
})