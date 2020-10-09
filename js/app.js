'use strict';

//global variables//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var hours = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'];

var parentElementHead=document.getElementById('thead');
var parentElementBody=document.getElementById('tbody');
var parentElementFoot=document.getElementById('tfoot');

var formElement = document.getElementById('newStoreForm');

//constructor function///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

City.allCities=[];

function City (name, minimumCustomersPerHour, maximumCustomersPerHour, averageCookiesPerCustomer){
  this.name = name;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;

  this.totalCookiesSoldDay = 0;

  this.customersPerHourArray = [];
  this.cookieSalesPerHourArray = [];

  City.allCities.push(this);

}

//prototypes and helper functions/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//generate random number
City.prototype.generateRandomNumber = function (){

  for (var i=0; i<hours.length-2; i++){
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

    this.customersPerHourArray.push(randomNumber);
  }
};

//generate cookies per hour
City.prototype.generateCookieSalesPerHour = function (){

  this.generateRandomNumber();

  var cookieSalesThisHour = 0;

  for (var i=0; i<this.customersPerHourArray.length; i++){
    cookieSalesThisHour = Math.ceil(this.customersPerHourArray[i] * this.averageCookiesPerCustomer);
    this.totalCookiesSoldDay += cookieSalesThisHour;

    this.cookieSalesPerHourArray.push(cookieSalesThisHour);
  }
};

//render table data

City.prototype.renderData = function (){
  this.generateCookieSalesPerHour();
  var trElement = document.createElement('tr'); //creates a tr2Element
  parentElementBody.appendChild(trElement); //appends to parent
  var tdElement = document.createElement('td'); //creates a tdElement
  tdElement.textContent = this.name; //provides content (use: this.name)
  trElement.appendChild(tdElement); //appends to tr2Element

  for(var i=0; i<hours.length-1; i++){
    var td2Element = document.createElement('td'); //create a tdElement
    var totalCookieSum = totalCookieSum + this.totalCookiesSoldDay;

    if (i<hours.length-2){
      td2Element.textContent = this.cookieSalesPerHourArray[i]; //cookiesData or this.cookieSalesPerHourArray = [i] *needs to go here! ||| 'test' works!
    } else {
      td2Element.textContent = this.totalCookiesSoldDay; //cookiesData or this.cookieSalesPerHourArray = [i] *needs to go here! ||| 'test' works!
    }
    trElement.appendChild(td2Element);
  }
};

//create table header

function generateTableHeader(){
  for (var i=0; i<hours.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = hours[i];
    parentElementHead.appendChild(thElement);
  }
}

function generateTableFooter(){

  createBottomLeftCellTotal();

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

//create bottom left cell with row heading total

function createBottomLeftCellTotal(){
  var tfElement = document.createElement('tf');
  tfElement.textContent = 'Totals';
  parentElementFoot.appendChild(tfElement);
}

//event handler

function handleSubmit(event){
  event.preventDefault();

  var cityName = event.target.cityNameInput.value;
  var cityMinimumCustomers = parseInt(event.target.minimumCustomersInput.value);
  var cityMaximumCustomers = parseInt(event.target.maximumCustomersInput.value);
  var cityAverageCookies = parseInt(event.target.averageCookiesSoldInput.value);

  var inputCity = new City (cityName, cityMinimumCustomers, cityMaximumCustomers, cityAverageCookies, 0);

  inputCity.generateRandomNumber();
  inputCity.generateCookieSalesPerHour();

  inputCity.renderData();

  parentElementFoot.innerHTML = ''; //resets the table footer html - Thanks, Skyler!

  generateTableFooter();
}

function masterRender(){
  for (var i=0; i<City.allCities.length; i++){
    City.allCities[i].renderData();
    console.log(City.allCities[i]);
  }
}

//instances///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

new City('Seattle', 23, 65, 6.3);

new City('Tokyo', 3 , 24, 1.2);

new City('Dubai', 11, 38, 2.3);

new City('Paris', 20, 38, 2.3);

new City('Lima', 2, 16, 4.6);

//executables//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

masterRender();
generateTableHeader();
generateTableFooter();

formElement.addEventListener('submit', handleSubmit);
