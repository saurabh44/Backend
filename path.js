const global = require('path');

let locationDetails = '/users/Web Newton\Backend/index.js';
let fileName = global.basename(locationDetails);
console.log(fileName);

let directory = global.dirname(locationDetails);
console.log(directory);

let extension = global.extname(locationDetails);
console.log(extension);