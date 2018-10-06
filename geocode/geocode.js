const request=require('request');


var geocodeAddress=(address,callback)=>{

  addr=encodeURIComponent(address);
  console.log(addr);

  request({
    url:'http://www.mapquestapi.com/geocoding/v1/address?key=Y486PO2XLqo0UAfLXVTykg1s6hDGpT2W&location='+addr,
    json:true //data coming backwillbe json data
  },(error,response, body) =>{

    if(error){
      callback("Unable to connect to server");
    }else{
        callback(undefined,{
         address:body.results[0].locations[0],
         lattitude:body.results[0].locations[0].latLng.lat,
         longitude:body.results[0].locations[0].latLng.lng
       })


    }
  });
}

module.exports={
geocodeAddress
}
