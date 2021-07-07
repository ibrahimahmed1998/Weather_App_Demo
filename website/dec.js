const days=new Date(); // get Current Time from Date Function 
const newdate=(days.getMonth()+1)+'/'+days.getDate()+'/'+days.getFullYear();  // Equality Current time in newdate container 
const get="http://127.0.0.1:8000/all" ;      // this link that return response that display info 
const post="http://127.0.0.1:8000/addData"; // this link that send request to ask about current info then return it to server   
const URL_="http://api.openweathermap.org/data/2.5/forecast?id="; // the API of openweathermap.org site that return data
const MyKey="&appid=1834a80ff251e3825e4b27bc56b6c633&units=metric";// my key in this site-that return temp degree in celsius

module.exports = {URL_,MyKey,post,get,newdate }
// export default {URL_,MyKey,post,get,newdate } ES6
//console.log(module.exports);