
projectData = {};   // empty list to contain information lisk [date||temp||content"feelings"]
const express = require('express'); // require express javascript 
const bodyParser = require('body-parser');  // require bodyParser from express Packages  
const app = express();  
/***************************/
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
/***************************/
const cors = require('cors');
app.use(cors());
/***************************/
app.use(express.static('website'));   // require html+css+app.js files from website Directory 

const port = 8000 ;     // open port on local server : 8000 
const server = app.listen(port,listening) ;     // listen to server on port 8000 

function listening(){  
    /* if server run correctly this function return 2 log message contains : 
    " server runing " , "runing on localhost:  8000" */ 
    console.log(' server runing');console.log(`runing on localhost: ${port}`);}

app.get('/all',sendData); // call back function : send res from server to browser 
app.post('/addData',addData); // App send req to server  

function addData(request,response)
{
    let data = request.body;

    console.log('server side data ', data)

    projectData["date"] = data.date; projectData["temp"] = data.temp; projectData["feel"] = data.content;
    response.send(projectData);
}
function sendData(request,response)
{
    response.send(projectData);      // send data as response from app server 
    projectData={}; // make projectData Empty after send information to Display it 
}                 