const fs = require('fs');
const request = require('request');
const { isReadable } = require('stream');

const readMovieFilePromise = (fileName) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if(error) reject(error);
            resolve(data);
        })
    })
}

readMovieFilePromise('movie.txt')
    .then(query => {
        return 'https://api.themoviedb.org/3/search/movie?api_key=12724b00b4c063fbc5f09f5729c5aec8&query='+query.toString()
    })
    .then(url => {
        request(url, {timeout: 0}, (error, response, body) => {

        let movies = JSON.parse(body);

        movies.results.forEach((movie) => {
            console.log(movie.original_title)
        })
    })

})
.catch(error => {
    console.log(error)
})