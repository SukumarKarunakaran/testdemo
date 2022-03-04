//create an XHR Object
var request = new XMLHttpRequest();
//request a connection(which data you need to receive)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//request.open("GET","https://www.anapioficeandfire.com/api/books/1");
//sending a connetion request
request.send();
// once the data successfully received from the server(200)
request.onload=function() {
    var data=JSON.parse(request.response);
    //console.log(data);
    //console.log(data[0].capital);
    //console.log(data[1].currencies);
    //for (var i=0; i<data.length; i++)
    //console.log(`name:${data[i].name} Capital:${data[i].capital}`);
    //console.log(data);
    //for (var i=0; i<10; i++)
   // console.log(`flag:${data[i].flag}`);
   //console.log(`authorname:${data.authors[0]} , isbn:${data.isbn} , numberOfPages:${data.numberOfPages} , Publisher:${data.publisher}`);
   console.log(data);
   let res=data.filter((element)=>element.region==="Asia");
   console.log(res);
//    for(var i=0;i<res.length;i++){
//        console.log(res[i].name);
//    }
// let final=res.map((element)=>element.name);
// console.log(final);
let totpop=res.reduce((sum, element)=>sum+element.population,0);
console.log(totpop);
}