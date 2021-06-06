projectData={};let days=new Date();
let newdate=(days.getMonth()+1)+'/'+days.getDate()+'/'+days.getFullYear();
const get="http://127.0.0.1:8000/all";
const post="http://127.0.0.1:8000/addData";
const URL_="http://api.openweathermap.org/data/2.5/forecast?id=";
const KEY="&appid=1834a80ff251e3825e4b27bc56b6c633&units=metric";
/**********************************************************************************/
generate=document.getElementById('generate').addEventListener("click",DO);
function DO(e){
    const newZip= document.getElementById('zip').value ;                  
    const feelings = document.getElementById('feelings').value ;          

    weather(URL_,newZip,KEY).then(function(data){                           
        postData(post,{date:newdate,temp:data.list[0].main.temp,content:feelings});update();})};
/**********************************************************************************/
const weather = async(URL_,zip,key)=>{ // zipcode = 2643743
    const response=await fetch(URL_+zip+key)
    try{const data=await response.json();
        return data;}catch(err){console.log("err",err);}}
/**********************************************************************************/          
const postData = async(url='',data={})=>{
    const response = await fetch(url,{method:'POST',credentials:'same-origin',
    headers:{  'Content-Type':'application/json',},body:JSON.stringify(data)});
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;}catch(err){console.log("err",err);}}
/**********************************************************************************/
const update = async() =>{
    const req = await fetch(get);
        try{ 
        const allData = await req.json();
        document.getElementById('content').innerHTML=`I feel:${allData[0].content}`;
        document.getElementById('temp').innerHTML=`Temperatuer:${allData[0].temp}`;
        document.getElementById('date').innerHTML=`Date:${allData[0].date}`;
    }catch(err){console.log("err",err);}}
/**********************************************************************************/