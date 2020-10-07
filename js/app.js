'use strict';
// // alert('JS connected');

// //need an object for each of the locations: Seattle, Tokyo, Dubai, Paris, Lima

// var seattleObject = {
//   minCustomers: 23, //minimum number of customers per hour
//   maxCustomers: 65, //maximum number of customers per hour
//   avgCookie: 6.3, //average cooke sales per hour
//   objectId: 'seattle', //create a parameter for relating to html

//   customersPerHour: [], //array to store the number of customers per hour
//   cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour
// };


// var tokyoObject = {
//   minCustomers: 3, //minimum number of customers per hour
//   maxCustomers: 24, //maximum number of customers per hour
//   avgCookie: 1.2, //average cooke sales per hour
//   objectId: 'tokyo',

//   customersPerHour: [], //array to store the number of customers per hour
//   cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour

// };

// var dubaiObject = {
//   minCustomers: 11, //minimum number of customers per hour
//   maxCustomers: 38, //maximum number of customers per hour
//   avgCookie: 3.7, //average cooke sales per hour
//   objectId: 'dubai',

//   customersPerHour: [], //array to store the number of customers per hour
//   cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour

// };

// var parisObject = {
//   minCustomers: 20, //minimum number of customers per hour
//   maxCustomers: 38, //maximum number of customers per hour
//   avgCookie: 2.3, //average cooke sales per hour
//   objectId: 'paris',

//   customersPerHour: [], //array to store the number of customers per hour
//   cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour

// };

// var limaObject = {
//   minCustomers: 2, //minimum number of customers per hour
//   maxCustomers: 16, //maximum number of customers per hour
//   avgCookie: 4.6, //average cooke sales per hour
//   objectId: 'lima',

//   customersPerHour: [], //array to store the number of customers per hour
//   cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour

// };

// function hourSales(minCustomers, maxCustomers){ //generating a random number of customers per hour
//   var min = Math.ceil(minCustomers);
//   var max = Math.floor(maxCustomers);
//   return Math.floor(Math.random() * (max-min +1) + min);
// }

// function loopCalculator(object){ //loop through each hour of the 14 hour work day to calculate random sales for each hour
//   for (var i=0; i<14; i++){

//     var randomSale = Math.floor(hourSales(object.minCustomers, object.maxCustomers));

//     object.customersPerHour.push(Math.floor(randomSale)); //calculates the random visits at each hour and appends to end of customersPerHour array

//     object.cookieSalesPerHour.push(Math.floor(object.avgCookie * randomSale)); //multiplies avgCookie sales per

//     console.log('customer per hour ', object.customersPerHour, 'cookieSalesPerHour ', object.cookieSalesPerHour); //print variable values to check
//   }
//   // return object; //returns function data for use elsewhere

// }

// loopCalculator(seattleObject);

// loopCalculator(tokyoObject);

// loopCalculator(dubaiObject);

// loopCalculator(parisObject);

// loopCalculator(limaObject);

// // put cities in an array
// // nest loops

// // function printSales(object){                                        //create function to write data to sales page

// //   var objectUl = document.getElementById(object.objectId);          //indicate which node we will be changing

// //     for (i=0; i>14; i++){                                           //loop through array for each hour

// //         var hour = 6 + i;                                           //declare variable four hour write out

// //         var cookieSalesPerHourElement = document.createElement('li');   //create li for data
// //         cookieSalesPerHourElement.textContent = `${hour}am: ${object.cookieSalesPerHour[i]} cookies`;   //provide content
// //         objectUl.appendChild(cookieSalesPerHourElement);    //append it to the DOM
// // }
// //   return object;

// // }

// // var objectUl = document.getElementById('seattle');

// // var cookieSalesPerHourElement = document.createElement('li');   //create li for data
// // cookieSalesPerHourElement.textContent = `test`;   //provide content
// // objectUl.appendChild(cookieSalesPerHourElement);    //append it to the DOM

// // console.log('seattle cookie sales per hour', seattleObject.cookieSalesPerHour);

// //create array for city names that match CSS id's
// // var cityArray = [seattleObject.objectId, tokyoObject.objectId, dubaiObject.objectId, parisObject.objectId, limaObject.objectId];
// var cityArray = [seattleObject, tokyoObject, dubaiObject, parisObject, limaObject];


// function printSales(){ //creat function
//   for (var i=0; i<cityArray.length; i++) {

//     var cityName = cityArray[i].objectId;

//     var cityObject = cityArray[i];

//     var runningCount = 0; //create a counter to add all hourly sales

//     for (var j=0; j<14; j++) {

//       var hour = 6 + j;

//       var objectLi = document.getElementById(cityName);

//       var cookieSalesPerHourElement = document.createElement('li');

//       if (hour<12){

//         cookieSalesPerHourElement.textContent = `${hour}am: ${cityObject.cookieSalesPerHour[j]} cookies`;

//       } else if (hour>12){

//         cookieSalesPerHourElement.textContent = `${hour-12}pm: ${cityObject.cookieSalesPerHour[j]} cookies`;

//       } else {

//         cookieSalesPerHourElement.textContent = `${hour}pm: ${cityObject.cookieSalesPerHour[j]} cookies`;

//       }

//       runningCount = runningCount + cityObject.cookieSalesPerHour[j];

//       // console.log('cityObject sales per hour', cityObject.cookieSalesPerHour[j]);

//       // console.log(runningCount);

//       // console.log(cityObject);

//       // console.log(cityName);

//       objectLi.append(cookieSalesPerHourElement);

//     }
//     //append total of runningCount here
//     var cookieSalesTotalElement = document.createElement('li');
//     cookieSalesTotalElement.textContent = `Total: ${runningCount} cookies`;
//     objectLi.append(cookieSalesTotalElement);

//   }

// }

// printSales();

// //printSales(tokyoObject);

// // printSales(dubaiObject);
// // printSales(parisObject);
// // printSales(limaObject);


///////////////////////////Day06 Objects Above, Day07 Constructor Functions Below //////////////////////

//global variables

var cityRowHeader = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima', 'Total'];
var allCities = [];

var hours = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'];


//constructor function

City.allCities=[];

function City (name, minimumCustomersPerHour, maximumCustomersPerHour, averageCookiesPerCustomer, totalCookiesSoldDay){
  this.name = name;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;

  this.totalCookiesSoldDay = totalCookiesSoldDay;

  this.customersPerHourArray = [];
  this.cookieSalesPerHourArray = [];

  City.allCities.push(this);

}

//prototypes

//generate random number
City.prototype.generateRandomNumber = function (){

  for (var i=0; i<hours.length-2; i++){
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

    this.customersPerHourArray.push(randomNumber);
  }
};

//generate cookies per hour
City.prototype.generateCookieSalesPerHour = function (){

  var cookieSalesThisHour = 0;

  for (var i=0; i<this.customersPerHourArray.length; i++){
    cookieSalesThisHour = Math.ceil(this.customersPerHourArray[i] * this.averageCookiesPerCustomer);
    this.totalCookiesSoldDay += cookieSalesThisHour;

    this.cookieSalesPerHourArray.push(cookieSalesThisHour);
  }
};

//generate sales per day
//City.prototype.salesPerDay = function(){

// for (var i=0; i<hours.length-2; i++);{
//   // this.generateCookieSalesPerHour();
//   // console.log(cookiesEachHour);
//   var cookiesSoldThisHour = Math.ceil(this.customersPerHourArray[i] * this.averageCookiesPerCustomer)
//   this.totalCookiesSoldDay += cookiesSoldThisHour;

// }
// };

//seattle.salesPerDay();

//instances

var seattle = new City('Seattle', 23, 65, 6.3, 0);

var tokyo = new City('Tokyo', 3 , 24, 1.2, 0);

var dubai = new City('Dubai', 11, 38, 2.3, 0);

var paris = new City('Paris', 20, 38, 2.3, 0);

var lima = new City('Lima', 2, 16, 4.6, 0);


//executables

seattle.generateRandomNumber();
seattle.generateCookieSalesPerHour();

tokyo.generateRandomNumber();
tokyo.generateCookieSalesPerHour();

dubai.generateRandomNumber();
dubai.generateCookieSalesPerHour();

paris.generateRandomNumber();
paris.generateCookieSalesPerHour();

lima.generateRandomNumber();
lima.generateCookieSalesPerHour();

//create table header
var parentElementHead=document.getElementById('thead');
var parentElementBody=document.getElementById('tbody');
var parentElementFoot=document.getElementById('tfoot');

function generateTableHeader(){
  for (var i=0; i<hours.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = hours[i];
    parentElementHead.appendChild(thElement);
  }
}

generateTableHeader();

//render table data

City.prototype.renderData = function (){
  //console.log('Life!');
  // this.salesPerDay(); //calls salesPerDay
  var trElement = document.createElement('tr'); //creates a tr2Element
  parentElementBody.appendChild(trElement); //appends to parent
  var tdElement = document.createElement('td'); //creates a tdElement
  tdElement.textContent = this.name; //provides content (use: this.name)
  trElement.appendChild(tdElement); //appends to tr2Element

  for(var i=0; i<hours.length-1; i++){
    var td2Element = document.createElement('td'); //create a tdElement
    //var cookiesData = this.cookieSalesThisHour[i];
    //console.log(cookiesData);
    var totalCookieSum = totalCookieSum + this.totalCookiesSoldDay;

    if (i<hours.length-2){
      td2Element.textContent = this.cookieSalesPerHourArray[i]; //cookiesData or this.cookieSalesPerHourArray = [i] *needs to go here! ||| 'test' works!
    } else {
      td2Element.textContent = this.totalCookiesSoldDay; //cookiesData or this.cookieSalesPerHourArray = [i] *needs to go here! ||| 'test' works!
    }
    trElement.appendChild(td2Element);
  }
};

// function sumDailyTotals(){
//   var totalCookieSum = totalCookieSum + this.totalCookiesSoldDay[i]
// }

seattle.renderData();
tokyo.renderData();
dubai.renderData();
paris.renderData();
lima.renderData();

//generate grand total across all stores

var grandTotal = 0;
//console.log (grandTotal);

City.prototype.generateCookieGrandTotals = function (){

  //loop through and add all daily totals position [6]
  // console.log('Alive');
  for (var i=0; i<5; i++){

    grandTotal = grandTotal + City.allCities[i].totalCookiesSoldDay; //to access a property inside of an array of objects// to access an array index value inside a property of an array of objections use .property[#]

    console.log('array at i', City.allCities[i]);
    console.log('array at i 4', i, City.allCities[i].totalCookiesSoldDay);

  }

};

seattle.generateCookieGrandTotals();

//generate total cookies for each hour across all stores

City.prototype.generateAllCityHourTotal = function (){
  //loop through hours
  //access the property that holds the array of cookies each hour
  //nest loop through array of cookies each hour
  //add all cities 

  
  for (var i=0; i<hours.length-2; i++){
    
    var totalCookiesThisHour = 0;

    for (var j=0; j<City.allCities.length; j++){

      totalCookiesThisHour += City.allCities[j].cookieSalesPerHourArray[i];

      console.log('totalCookiesThisHour',i ,j , totalCookiesThisHour);
      


    }

    console.log('i= ', i, 'totalCookiesThisHour', totalCookiesThisHour);

  }


};

seattle.generateAllCityHourTotal();

//generate total across all stores each our
//loop through each array and internal array at position [1]


//generate table footer

function generateTableFooter(){

  //create bottom left cell with "Total"
  var tfElement = document.createElement('tf');
  tfElement.textContent = 'Totals';
  parentElementFoot.appendChild(tfElement);

  //create hourly totals
  for (var i=0; i<hours.length-1; i++){
    var td3Element = document.createElement('td'); //create next tfooter element
    if(i<hours.length - 2){
      td3Element.textContent = 'hour total'; //add content, needs total for all stores each hour
    } else {
      td3Element.textContent = grandTotal; //add content, needs total for all stores all days
    }
    parentElementFoot.appendChild(td3Element);
  }

}

generateTableFooter();






// if(City.allCities[i]){
//   City.allCities[i].renderData();
// }
// City.prototype.printSales = function(){
// var tr2Element = document.createElement('tr');
// }

// seattle.printSales();


//console.log tests

console.log(City.allCities);

// console.log('seattle', seattle.cookieSalesPerHourArray);
// console.log('seattle', seattle.totalCookiesSoldDay);

// console.log('tokyo', tokyo.cookieSalesPerHourArray);
// console.log('tokyo', tokyo.totalCookiesSoldDay);

// console.log('dubai', dubai.cookieSalesPerHourArray);
// console.log('dubai', dubai.totalCookiesSoldDay);

// console.log('paris', paris.cookieSalesPerHourArray);
// console.log('paris', paris.totalCookiesSoldDay);

// console.log('lima', lima.cookieSalesPerHourArray);
// console.log('lima', lima.totalCookiesSoldDay);


// var tableRow = document.createElement('tr');
//   var tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Locations';
//   tableRow.appendChild(tableHeader);
//   for (var i = 0; i < hours.length; i++) {
//     tableHeader = document.createElement('th');
//     tableHeader.textContent = hours[i];
//     tableRow.appendChild(tableHeader);
//   }
