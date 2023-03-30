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
    let query = await readMovieFilePromise('movie.txt');
    

}