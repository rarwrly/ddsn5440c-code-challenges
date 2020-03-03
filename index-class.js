
/* 1. Write a function that takes three arguments - all numbers - adds them together, divide by 3 and displays the result on the console.*/
function Numbers(a,b,c){
		var result = ((c+ b + a) / 3);
	 	console.log(result) 

}

 /*2. Write a function that takes an array of numbers as an argument. Then it lists ONLY the numbers that are divisible by 3  If there are not such numbers console.log(“Sorry, no 3-divisible numbers”). (Think of push() method)*/

 function findOdd (array) {
	var oddArray = []
 	for(var i = 0; i < array.length; i++){
 		if (array[i] %3 ==0){
 			oddArray.push(array[i])
 		}

 	}
 	console.log(oddArray)	
 }