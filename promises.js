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