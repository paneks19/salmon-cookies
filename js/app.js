'use strict';
// alert('JS connected');

//need an object for each of the locations: Seattle, Tokyo, Dubai, Paris, Lima

var seattleObject = {
    minCustomers: 23,       //minimum number of customers per hour
    maxCustomers: 65,       //maximum number of customers per hour
    avgCookie: 6.3,         //average cooke sales per hour

    customersPerHour: [], //array to store the number of customers per hour
    cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour
}



var tokyoObject = {
    minCustomers: 23,       //minimum number of customers per hour
    maxCustomers: 65,       //maximum number of customers per hour
    avgCookie: 6.3,         //average cooke sales per hour
    
    customersPerHour: [], //array to store the number of customers per hour
    cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour
    
}

var dubaiObject = {
    minCustomers: 23,       //minimum number of customers per hour
    maxCustomers: 65,       //maximum number of customers per hour
    avgCookie: 6.3,         //average cooke sales per hour
    
    customersPerHour: [], //array to store the number of customers per hour
    cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour
    
}

var parisObject = {
    minCustomers: 23,       //minimum number of customers per hour
    maxCustomers: 65,       //maximum number of customers per hour
    avgCookie: 6.3,         //average cooke sales per hour
    
    customersPerHour: [], //array to store the number of customers per hour
    cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour
    
}

var limaObject = {
    minCustomers: 23,       //minimum number of customers per hour
    maxCustomers: 65,       //maximum number of customers per hour
    avgCookie: 6.3,         //average cooke sales per hour
    
    customersPerHour: [], //array to store the number of customers per hour
    cookieSalesPerHour: [], //array to store the calculated number of cookies sold per hour
    
}


function hourSales(minCustomers, maxCustomers){ //generating a random number of customers per hour
  var min = Math.ceil(minCustomers);
  var max = Math.floor(maxCustomers);
        return Math.floor(Math.random() * (max-min +1) + min);
    }

 function loopCalculator(object){ //loop through each hour of the 14 hour work day to calculate random sales for each hour
   for (var i=0; i<14; i++){

    var randomSale = Math.floor(hourSales(object.minCustomers, object.maxCustomers));

    object.customersPerHour.push(randomSale); //calculates the random visits at each hour and appends to end of customersPerHour array

     object.cookieSalesPerHour.push(object.avgCookie * randomSale); //multiplies avgCookie sales per 

     console.log('customer per hour ', object.customersPerHour, 'cookieSalesPerHour ', object.cookieSalesPerHour); //print variable values to check
    }
    return object; //returns function data for use elsewhere

}

loopCalculator(seattleObject);
// seattleObject.hourlyCalculator(seattleObject.minCustomers, seattleObject.maxCustomers);