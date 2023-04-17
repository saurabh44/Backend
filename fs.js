const file = require('fs/promises');
let fileName = "newton.txt";
let content ="welcome to MERN stack";

console.log(__dirname);
const writeFileDetails= async (fileName,content)=>{
   await file.writeFile(fileName,content);
}