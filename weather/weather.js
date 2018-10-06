const request=require('request');

var weatherInfo=(lattitude,longitude,callback)=>{
  debugger;
  request({
    url:'https://api.darksky.net/forecast/9310bc68c585f763194d831390d9731e/'+lattitude+','+longitude,
    json:true
  },(error,response,body)=>{
    if(!error){
      callback(undefined,{
          temperature:body.currently.temperature,
          apparentTemperature:body.currently.apparentTemperature
      });
    }
    else{
      callback('Unable to fetch weather')
    }
  });
}

module.exports={
  weatherInfo
}
