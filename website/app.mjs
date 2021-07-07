// import {URL_,MyKey,post,get,newdate } from './dec.js'; // URL_ from
// const myJSON = JSON.stringify(URL_);      // For Other RESON  
/*
    I was want use (import or Require)  and  ( document.get... or window.document.get... )
     but i read about it hard to impelement require or import with Node.js 
    as this work as backend Language not with Clint Browser So can'
    
*/
const days=new Date(); // get Current Time from Date Function 
const newdate=(days.getMonth()+1)+'/'+days.getDate()+'/'+days.getFullYear();  // Equality Current time in newdate container 
const get="http://127.0.0.1:8000/all" ;      // this link that return response that display info 
const post="http://127.0.0.1:8000/addData"; // this link that send request to ask about current info then return it to server   
const URL_="http://api.openweathermap.org/data/2.5/forecast?id="; // the API of openweathermap.org site that return data
const MyKey="&appid=1834a80ff251e3825e4b27bc56b6c633&units=metric";// my key in this site-that return temp degree in celsius

 projectData = {}  ;

var generate=window.document.getElementById('generate').addEventListener("click",DO);
function DO(e){
    const city_id= document.getElementById('cid').value ;   // city id that i want to know temprature of this area                
    const my_feelings = document.getElementById('feelings').value ;  // random string that user enter it to say what he/she feels        

    function_weather(URL_,city_id,MyKey).then(function(data)
    {        
        postData(post,{date:newdate,temp:data.list[0].main.temp,content:my_feelings});
        updateUI();
        document.getElementById('cid').value=" " ;   // city id that i want to know temprature of this area                
    })};
/**********************************POST-METHOD************************************************/          
const postData = async(url='',data={})=>{
    const response = await fetch(url,{method:'POST',credentials:'same-origin',
    headers:{'Content-Type':'application/json',},body:JSON.stringify(data)});
    try{const newData = await response.json();
        return newData;}catch(err){console.log("err",err);}}
/************************************UPDATE-UI-METHOD**********************************************/
const updateUI = async()=>{
    const request = await fetch(get)
    try{
    const allData = await request.json();
    console.log(allData)
    document.getElementById('date').innerHTML =` Date:${allData.date}`;
    document.getElementById('temp').innerHTML = `Temperature:${allData.temp}`;
    document.getElementById('content').innerHTML = `I feel:${allData.feel}`;
    }catch(err){
    console.log("err",err);
    }}      
/**********************************************************************************/
const function_weather = async(URL_,cid,key)=>{  // example : cid = 2643743
    const response=await fetch(URL_+cid+key)
    try{const data=await response.json();
        return data;}catch(err){console.log("err",err);}}