const fs = require('fs');
const request = require('request-promise');
const { isReadable } = require('stream');

const readMovieFilePromise = (fileName) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if(error) reject(error);
            resolve(data);
        })
    })
}

//esta funcion es async para que nuestro codigo no se bloquee
//el await detiene todos los procesos y espera hasta que la promesa sea ejecutada
const getAllMovies = async() => {

    try {
        let query = await readMovieFilePromise('movie.txt');
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=12724b00b4c063fbc5f09f5729c5aec8&query='+query.toString();

    await request(url,{timeout:0})
        .then(body => {
        let movies = JSON.parse(body)

        movies.results.forEach((movie) => {
            console.log(movie.original_title)
        })
    })

    } catch(error) {
        console.log(error)
    } 
}

getAllMovies();