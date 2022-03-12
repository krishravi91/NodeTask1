
import { writeFile } from "fs";
import { fs } from "mz";


// const mz = require('mz');

// import date from 'date-and-time';

//creation of file
function fileCreation(){
var data = Math.floor(Date.now() / 1000); //realtime timestamp
var date1 =  data.toString();

var now = new Date();

var logicFileName = './' + now.getDate() + now.getMonth() + now.getFullYear() + "-" + date1 +'.txt';
writeFile(logicFileName, date1, (err) =>{
        console.log(date1);
}); // creation of file name
}

async function myReaddir () {
        try {
          const file = await fs.readdir('../NodejsTask1/');
          console.log(file);
        }
        catch (err) { console.error( err ) }
      };

// fileCreation();
myReaddir();

export{fileCreation, myReaddir};