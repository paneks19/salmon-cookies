'use strict';
// alert('JS connected');

//need an object for each of the locations: Seattle, Tokyo, Dubai, Paris, Lima

var seattleObject = {
  minCustomers: 23, //minimum number of customers per hour
  maxCustomers: 65, //maximum number of customers per hour
  avgCookie: 6.3, //average cooke sales per hour
  objectId: 'seattle', //create a parameter for relating to html

  customersPerHour: [], //array to store the number of customers per hour
  cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour
};


var tokyoObject = {
  minCustomers: 3, //minimum number of customers per hour
  maxCustomers: 24, //maximum number of customers per hour
  avgCookie: 1.2, //average cooke sales per hour
  objectId: 'tokyo',

  customersPerHour: [], //array to store the number of customers per hour
  cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour

};

var dubaiObject = {
  minCustomers: 11, //minimum number of customers per hour
  maxCustomers: 38, //maximum number of customers per hour
  avgCookie: 3.7, //average cooke sales per hour
  objectId: 'dubai',

  customersPerHour: [], //array to store the number of customers per hour
  cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour

};

var parisObject = {
  minCustomers: 20, //minimum number of customers per hour
  maxCustomers: 38, //maximum number of customers per hour
  avgCookie: 2.3, //average cooke sales per hour
  objectId: 'paris',

  customersPerHour: [], //array to store the number of customers per hour
  cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour

};

var limaObject = {
  minCustomers: 2, //minimum number of customers per hour
  maxCustomers: 16, //maximum number of customers per hour
  avgCookie: 4.6, //average cooke sales per hour
  objectId: 'lima',

  customersPerHour: [], //array to store the number of customers per hour
  cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour

};

function hourSales(minCustomers, maxCustomers){ //generating a random number of customers per hour
  var min = Math.ceil(minCustomers);
  var max = Math.floor(maxCustomers);
  return Math.floor(Math.random() * (max-min +1) + min);
}

function loopCalculator(object){ //loop through each hour of the 14 hour work day to calculate random sales for each hour
  for (var i=0; i<14; i++){

    var randomSale = Math.floor(hourSales(object.minCustomers, object.maxCustomers));

    object.customersPerHour.push(Math.floor(randomSale)); //calculates the random visits at each hour and appends to end of customersPerHour array

    object.cookieSalesPerHour.push(Math.floor(object.avgCookie * randomSale)); //multiplies avgCookie sales per

    console.log('customer per hour ', object.customersPerHour, 'cookieSalesPerHour ', object.cookieSalesPerHour); //print variable values to check
  }
  // return object; //returns function data for use elsewhere

}

loopCalculator(seattleObject);

loopCalculator(tokyoObject);

loopCalculator(dubaiObject);

loopCalculator(parisObject);

loopCalculator(limaObject);

// put cities in an array
// nest loops

// function printSales(object){                                        //create function to write data to sales page

//   var objectUl = document.getElementById(object.objectId);          //indicate which node we will be changing

//     for (i=0; i>14; i++){                                           //loop through array for each hour

//         var hour = 6 + i;                                           //declare variable four hour write out

//         var cookieSalesPerHourElement = document.createElement('li');   //create li for data
//         cookieSalesPerHourElement.textContent = `${hour}am: ${object.cookieSalesPerHour[i]} cookies`;   //provide content
//         objectUl.appendChild(cookieSalesPerHourElement);    //append it to the DOM
// }
//   return object;

// }

// var objectUl = document.getElementById('seattle');

// var cookieSalesPerHourElement = document.createElement('li');   //create li for data
// cookieSalesPerHourElement.textContent = `test`;   //provide content
// objectUl.appendChild(cookieSalesPerHourElement);    //append it to the DOM

// console.log('seattle cookie sales per hour', seattleObject.cookieSalesPerHour);

//create array for city names that match CSS id's
// var cityArray = [seattleObject.objectId, tokyoObject.objectId, dubaiObject.objectId, parisObject.objectId, limaObject.objectId];
var cityArray = [seattleObject, tokyoObject, dubaiObject, parisObject, limaObject];


function printSales(){ //creat function
  for (var i=0; i<cityArray.length; i++) {

    var cityName = cityArray[i].objectId;

    var cityObject = cityArray[i];

    var runningCount = 0; //create a counter to add all hourly sales

    for (var j=0; j<14; j++) {

      var hour = 6 + j;

      var objectLi = document.getElementById(cityName);

      var cookieSalesPerHourElement = document.createElement('li');

      if (hour<12){

        cookieSalesPerHourElement.textContent = `${hour}am: ${cityObject.cookieSalesPerHour[j]} cookies`;

      } else if (hour>12){

        cookieSalesPerHourElement.textContent = `${hour-12}pm: ${cityObject.cookieSalesPerHour[j]} cookies`;

      } else {

        cookieSalesPerHourElement.textContent = `${hour}pm: ${cityObject.cookieSalesPerHour[j]} cookies`;

      }

      runningCount = runningCount + cityObject.cookieSalesPerHour[j];

      // console.log('cityObject sales per hour', cityObject.cookieSalesPerHour[j]);

      // console.log(runningCount);

      // console.log(cityObject);

      // console.log(cityName);

      objectLi.append(cookieSalesPerHourElement);

    }
    //append total of runningCount here
    var cookieSalesTotalElement = document.createElement('li');
    cookieSalesTotalElement.textContent = `Total: ${runningCount} cookies`;
    objectLi.append(cookieSalesTotalElement);

  }

}

printSales();

//printSales(tokyoObject);

// printSales(dubaiObject);
// printSales(parisObject);
// printSales(limaObject);
