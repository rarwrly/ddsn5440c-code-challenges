
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

 /* 3.Write a function that takes an array of numbers as argument and lists in another array all numbers bigger than 10; if there are no numbers bigger than ten just console.log("no numbers bigger than 10");*/

  function findLarge (array) {
	var largeArray = []
 	for(var i = 0; i < array.length; i++){
 		if (array[i] >10 ){
 			largeArray.push(array[i])
 		}

 	}
 	console.log(largeArray)	
 }


/*4. Write a function that takes a string as an argument and returns (console.logs) all the vowels in this string*/

/*5. Write a function that takes a string sentence as an argument and lists all the words that are longer than 5 characters in this sentence. IF there is no word longer than five characters console.log('very short words")*/

/*6. Write a function that lists all the numbers from 0 to 100; If a number is divisible by 3 console.log("Fizz"); if a number is divisible by 5, console.log("Buzz"); if a number is divisible by both 3 and 5 console.log("FizzBuzz")*/

  function FizzBuzzNum (end) {
 	for(var i = 0; i < end; i++){
 		if ([i] % 5 === 0 && [i] % 3 ===0 ){
 			console.log('FizzBuzz')
 		}
 		else if ([i] % 5 ===0){
 			console.log('Buzz')
 		}
 		else if ([i] % 3 ===0){
 			console.log('Fizz')
 		}
 		else{
 			console.log([i])
 		}
 	}
 }



/*7. Create a function that takes in a string of multiple words and returns the first word with “ish” added to the end. Example:
ishFunc(“Soup is my favorite.“) -> “Soupish” */


/*8. Write a function that takes and array of numbers and adds the sum of them.*/

/*9. Write a function that takes a string argument and returns all the instances of vowels ex. -> “whatever” - returns “aee”*/

/*10. Create an array. Using the .forEach() method on the array, print each element to  the console. If you are unsure on how to use .forEach(), Google it.*/
// checkNums( [1, 3, 5, 12, 22] ) -> true
//checkNums( [30, 99, 8, 22, 7] ) -> false