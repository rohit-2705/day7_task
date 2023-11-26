//a.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}

//b.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    const pop = result.filter((element)=>{
        return element.population<200000;
    })
console.log(pop);}
//c.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   result.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}
//d.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var total = result.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}
//e.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   var currency = result.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }