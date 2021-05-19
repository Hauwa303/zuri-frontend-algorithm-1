// code by Hauwa Garba for Zuri project

convertFahrToCelsius(70);

function convertFahrToCelsius(num){
 //check if the input it is string
 var input = num;
 //using try catch error handling
try{
 if(typeof(input) === 'string' ){

    throw('it is not a valid number but a string');  

}
//check if the input it is array
if(typeof(input) === 'array') {
        
    throw('it is not a valid number but an array');

}
//check if the input it is object
if(typeof(input) === 'object') {

    throw('it is not a valid number but an object  ');

}
}catch(err){

    document.write(err);
   
   

}


 var nums =  (input - 32) *5/9;
  
 var result = nums.toFixed(4);
   
    if(typeof(input) != 'string' || typeof(input) != 'array' || typeof(input) != 'object' ){
 
        document.write ('<h1>' + result + ' celsius </h1>');

    }
}




