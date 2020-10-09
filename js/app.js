'use strict';

//global variables

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

// var grandTotal = 0;
// //console.log (grandTotal);

// City.prototype.generateCookieGrandTotals = function (){

//   //loop through and add all daily totals position [6]
//   // console.log('Alive');
//   for (var i=0; i<5; i++){
//     grandTotal = grandTotal + City.allCities[i].totalCookiesSoldDay; //to access a property inside of an array of objects// to access an array index value inside a property of an array of objections use .property[#]
//   }
// };

// seattle.generateCookieGrandTotals();

function generateTableFooter(){

  //create bottom left cell with "Total"
  var tfElement = document.createElement('tf');
  tfElement.textContent = 'Totals';
  parentElementFoot.appendChild(tfElement);

  var grandTotal=0;

  //create hourly totals
  for (var i=0; i<hours.length-1; i++){
    var td3Element = document.createElement('td'); //create next tfooter element
    if(i<hours.length - 2){

      var totalCookiesThisHour = 0;

      for (var j=0; j<City.allCities.length; j++){

        totalCookiesThisHour += City.allCities[j].cookieSalesPerHourArray[i];

      }
      grandTotal += totalCookiesThisHour;



      td3Element.textContent = totalCookiesThisHour; //add content, needs total for all stores each hour
      // td3Element.textContent = 'hour total'; //add content, needs total for all stores each hour
    } else {
      td3Element.textContent = grandTotal; //add content, needs total for all stores all days
    }
    parentElementFoot.appendChild(td3Element);
  }

}

generateTableFooter();

////////////////////////////////////Form and Event Listener Below/////////////////////////////////////////////

//make new city instance from form entry, form will provide city name, min customers, max customers, and avg cookies
// set up event listener for form submit
// run callback function
// collect info from form
// run form info into constructor function
// push object instances into an array

var formElement = document.getElementById('newStoreForm');

function handleSubmit(event){
  event.preventDefault();

  //console.log(cityName, cityMinimumCustomers, cityMaximumCustomers, cityAverageCookies);

  var cityName = event.target.cityNameInput.value;
  var cityMinimumCustomers = parseInt(event.target.minimumCustomersInput.value);
  var cityMaximumCustomers = parseInt(event.target.maximumCustomersInput.value);
  var cityAverageCookies = parseInt(event.target.averageCookiesSoldInput.value);

  //console.log(cityName, cityMinimumCustomers, cityMaximumCustomers, cityAverageCookies);

  var inputCity = new City (cityName, cityMinimumCustomers, cityMaximumCustomers, cityAverageCookies, 0);


  inputCity.generateRandomNumber();
  inputCity.generateCookieSalesPerHour();
 // inputCity.generateCookieGrandTotals();
  inputCity.renderData();

  parentElementFoot.innerHTML = ''; //resets the table footer html - Thanks, Skyler!

  generateTableFooter();


  console.log(City.allCities);

}

formElement.addEventListener('submit', handleSubmit);



