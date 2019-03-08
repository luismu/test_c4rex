const guestsModel = require('../model/guests.model');



exports.firstTask = function(req, res){
  let guests = guestsModel.readGuests();

  /*
    hardwell: 3 guests,
    tiesto: 3,
    afrojack: 4
  */
  let arr = []
  
  for (let i = 0; i < guests.length; i++) {
    let guestsOf = guests[i].guest_of
    let guestName = guests[i].name
        
    arr[i] = guestsOf
    }
  

  function getGuestsOfDj(arr) {
    let a = [], b = [], prev;
    
    arr.sort();
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    
    //return [a, b];

    var obj = {};
    for (var i = 0; i < a.length; i++) {
       obj[a[i]] = b[i] + " guests";
    }
    
    return obj;
  }

  let result = getGuestsOfDj(arr)
  
  res.send(result);

};

exports.secondTask = (req, res) => {
  
  let guests = guestsModel.readGuests();

  arr = guests.map((guest) => guest.favourite_dj)

  function getMax(arr) {
    let tmp = {}, tops = [];
    arr.forEach(function(item) {
        tmp[item] = tmp[item] ? tmp[item]+1 : 1;
    });
    //object with djs and likes
    console.log(tmp);
    //sorted array of djs
    tops = Object.keys(tmp).sort(function(a, b) { return tmp[a]-tmp[b] });
    return tops.reverse();
  }
 
  let top = getMax(arr)
  res.send(top);
};

exports.thirdTask = (req, res) => {

  let guests = guestsModel.readGuests();
  let result = []
  
  for (var i = 0; i<guests.length; i++) {
    let totalOfGuests = guests[i].name.length - guests[i].name.length + 1;
    result[i] = (guests[i].location + ' - ' + totalOfGuests);
  }

  res.send(result);

}
