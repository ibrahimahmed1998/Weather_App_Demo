
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
/***************************/
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
/***************************/
const cors = require('cors'); 
app.use(cors());
/***************************/
app.use(express.static('website'));

projectData = [];

const port = 8000 ; 

const server = app.listen(port,listening) ; 

function listening()
{
    console.log(' server runing');
     console.log(`runing on localhost: ${port}`);
}

app.get('/all',sendData); // call back function : send res from server to browser 
app.post('/addData',addData); // App send req to server  

function addData(request,response)
{
    /*
    let data = request.body;

    console.log('server side data ', data)

    projectData["date"] = data.date;
    projectData["temp"] = data.temp;
    projectData["feel"] = data.content;

 
    response.send(projectData);

    */

    
    newEntry =
    {
       date: request.body.date,
       temp:request.body.temp,
       content:request.body.content
    }

    projectData.push(newEntry);

   
}

function sendData(request,response)
{
    console.log('data before send is : ', projectData)

    response.send(projectData);

    projectData = [] ;
  
}

 