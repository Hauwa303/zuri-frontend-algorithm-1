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


checkYuGiOh(30);

function checkYuGiOh(num){
 //create arrays
 var nums = num;
var arr = Array.from(Array(nums).keys())
 //nums.replace(arr,)


 function  multiplesOf(numbers,num2,num3,num5){
    var multiples = [];
 for(var i= 0; i < numbers.length; i++){
 

  if(numbers[i] % num2 === 0 && numbers[i] % num3 === 0  ){

        numbers[i] = 'yu-gi';
 }
 if(numbers[i] % num2 === 0 && numbers[i] % num5 === 0  ){

    numbers[i] = 'yu-oh';
}
if(numbers[i] % num3 === 0 && numbers[i] % num5 === 0  ){

    numbers[i] = 'gi-oh';
}
if(numbers[i] % num3 === 0 && numbers[i] % num5 === 0 && numbers[i] % num2 === 0 ){

    numbers[i] = 'yu-gi-oh';
}
      
 if(numbers[i] % num2 === 0 ){

    numbers[i] = 'yu';
 }


  if( numbers[i] % num3 === 0 ){

       numbers[i] = 'gi';
  }
  if(numbers[i] % num5 === 0 ){

       numbers[i] = 'oh';
  }
  var rep = multiples.push(numbers[i]);



 // var rep = multiples.replace(numbers[i], numbers);
 
 }
 return '<h2>' + multiples + '</h2>';
 
 
 
 
 
 }
 document.write(multiplesOf(arr,2,3,5));

}


