//create an XHR Object

var request =new XMLHttpRequest();
//request a connection(which data you need to receive)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//sending a connetion request
request.send();
// once the data successfully received from the server(200)
request.onload = function() {
    var data = JSON.parse(request.response);
    for(var i = 0; i < data.length; i++) {
    //Assignment 2. Use the rest countries API and display all the country flags in console
    console.log(`flag:${data[i].flag}`);
    //Assignment 3.	Use the same rest countries and print all countries name, region, sub region and population
    console.log(`Name:${data[i].name} , Region:${data[i].region}, Subregion:${data[i].subregion}, population:${data[i].population}`);
    }
}