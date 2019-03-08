const fs = require('fs');


exports.readGuests = () => {

  //read the file json
  let data = fs.readFileSync('./guests.json');
    
  let guests = JSON.parse(data);
  console.log(guests);

  return guests

}


//module.exports.readGuests = readGuests;