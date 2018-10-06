const yargs=require('yargs');
const geocode = require('./geocode/geocode.js');
const weather=require('./weather/weather.js')

const argv=yargs
            .options({
              a:{
                demand:true,
                alias:'address',
                describe:'Address to fetch weather',
                string:true   //Parse the input as string
              }
            })
            .help()
            .argv;

geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
  if(errorMessage){
    console.log('Error message');
  }
  else{
    console.log(JSON.stringify(results.address.adminArea5,undefined,2));
    weather.weatherInfo(results.lattitude,results.longitude,(errorMessage,weatherResults)=>{
      if(errorMessage){
        console.log('Error message');
      }
      else{
        console.log(JSON.stringify(`weatherResults: Temperature is ${weatherResults.temperature} and feels like`+
          ` ${weatherResults.apparentTemperature}`,undefined,2));
      }
    });
  }
});

//9310bc68c585f763194d831390d9731e
