var requst = new XMLHttpRequest
requst.open("GET","https://restcountries.com/v3.1/all")
requst.send ()
requst.onload=function(){
    var res= JSON.parse (requst.response);
console.log (res);
}

var request =  new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res); 
    for(var i =0;i<res.length;i++){
        if(res[i].capital){
            console.log(res[i].capital[0]+" "+res[i].area)
        }
        else{
            console.log("Invalid capital"+res[i].area);
        }
    }
    }