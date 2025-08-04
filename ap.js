// assignment- no -46
// _______________________________________________________________
/*________________________ Question no 1 __________________________
Create a function multiplyBy that takes a number n.
It should return a function that multiplies any number by n.

Expected Output:

let double = multiplyBy(2);
double(5); // Output: 10
double(10); // Output: 20
_________________________ Answer ____________________________*/
// function multiplyBy(){let n = 2;
//     return function(num){console.log(n * num)};
//     return;
// }

// let final = multiplyBy();
// final(5);
// final(20);

/*________________________ Question no 2 __________________________
Create a function createBankAccount that starts with a balance of 0.
It should return two inner functions:

deposit(amount) → adds to balance

checkBalance() → returns current balance

Expected Output:

let account = createBankAccount();
account.deposit(100); 
account.checkBalance(); // Output: 100
account.deposit(50);
account.checkBalance(); // Output: 150
_________________________ Answer ____________________________*/
// function createBankAccount(){let balance = 0;
//     return {deposit : function(amount){
//         balance = balance + amount;
//     },
//     checkBalance : function(){return balance; }
// };
// }
// let account = createBankAccount();
// account.deposit(50);
// console.log(account.checkBalance());
// account.deposit(2000);
// console.log(account.checkBalance())
/*________________________ Question no 3 __________________________
Create a function jokeGenerator that stores 3 jokes in an array.
It should return a function that gives a random joke every time it is called.

Expected Output Example:
let tellJoke = jokeGenerator();
tellJoke(); // Output: "Why did the chicken cross the road?"
tellJoke(); // Outpu
_________________________ Answer ____________________________*/
// function jokeGenerator(){let array = ['The snake is flying','Aeroplance is swimming','Donkey is flying kites'];
//     return function(){let random = Math.random()*array.length;
//         random = Math.floor(random);
//         let ans = array[random];
//         console.log(ans)
//     }

// }
// let final = jokeGenerator();
// final()



/*________________________ Question no 4 __________________________
Create a function createDiscount that takes a percentage as a parameter.
It should return a function that takes a price and returns the discounted price.

Expected Output:

let tenPercentOff = createDiscount(10);
tenPercentOff(1000); // Output: 900
tenPercentOff(500);  // Output: 450
_________________________ Answer ____________________________*/
// function createDiscount(percentage){
//     return function(price){let ans = price * (percentage / 100);
//         console.log(ans)
//     }
// }
// let tenPercentOff = createDiscount(12);
// tenPercentOff(120);
// tenPercentOff(12879);

/*________________________ Question no 5 __________________________

Create a function greetUser that takes a greeting word (like "Hello").
It should return another function that takes a name and returns the greeting with the name.

Expected Output:
let sayHello = greetUser("Hello");
sayHello("Aziz");  // Output: "Hello Aziz"
sayHello("Ali");   // Output: "Hello Ali"
_________________________ Answer ____________________________*/
// function greetUser(word){
//     return function(name){console.log(`${word} ${name}`)}
// }
// let sayHello = greetUser('Hello');
// sayHello('Aziz');
// sayHello('Ali');

/*________________________ Question no 6 __________________________
Recursion function
_________________________ Answer ____________________________*/
// function countdown(n){if(n === 0){console.log('done');
//     return;
// }
// console.log(n)
// countdown(n-1)

// }
// countdown(5)


/*________________________ Question no 7 __________________________
Even Number Countdown

Create a recursive function that prints only even numbers from n to 0.

Example: evenCountdown(10) → Output: 10 8 6 4 2 0
_________________________ Answer ____________________________*/


// function counting(n) {
//   if (n < 0) return;  // Base case

//   if (n % 2 === 0) {  // Print only if even
//     console.log(n);
//   }

//   counting(n - 1); // Recursive call inside function
// }

// counting(20);



/*________________________ Question no 8 __________________________
Create a recursive function that returns the sum of numbers from n to 1.

Example: sum(5) → Output: 15 (because 5+4+3+2+1)
_________________________ Answer ____________________________*/
// function recursive(n){if(n === 0)return 0;
//     return n + recursive(n-1);
// }
// console.log(recursive(5))
// let n = 5;
// let total = 0;
// for(let i = n ; i >= 1; i--){total = total + i;

// }
// console.log(total)
// let n = 5; 
// let total = 0;
// for(let i = 0;i <= n; i++){total = total + i}
// console.log(total)
/*________________________ Question no 9 __________________________
sum by recursion function
_________________________ Answer ____________________________*/
// function sum(num){
//     if(num >0){return num + sum(num -1)}

// else{return num;}}

// let inanl =sum(5);
// console.log(inanl)

/*________________________ Question no 10 __________________________
hoisting
_________________________ Answer ____________________________*/
// console.log(num);
// let num = 23;
// function hoisting checking
// hello();
// function hello(){console.log('hello world')}
// arrow function hoisting checking
// greeting('Mujib')
// const greeting = (name)=>{console.log('Hello :', name)}

//  advance js is not hoisted like let ,const and arrow funtion

/*________________________ Question no 11 __________________________
Exponentiation operator
_________________________ Answer ____________________________*/
// let num = 5; 
// let ans = num**2;
// console.log(ans)

// let num2 = 3; 
// let output = Math.pow(num2,2);
// console.log(output)

/*________________________ Question no 12 __________________________
local storage
_________________________ Answer ____________________________*/
// const obj = {name : 'aziz',
//     age : 22
// }
// console.log(obj,typeof obj);
// let convertType = JSON.stringify(obj);
// console.log(convertType, typeof convertType);

// localStorage.setItem('task',convertType);

// let getFromStorage = localStorage.getItem('task');
// console.log(getFromStorage,typeof getFromStorage);
// let convertObj = JSON.parse(getFromStorage);
// console.log(typeof convertObj, convertObj);

/*________________________ Question no 13 __________________________
Itrator of/in
_________________________ Answer ____________________________*/
// let array = ['apple','mango','banan'];
// for(let key of array){console.log(key)}
// for(let ind in array){console.log(ind)}
// const obj = { name : 'aziz',
//     age : 23
// }
// console.log(obj)
// for(let key in obj){console.log(`${key} ${obj[key]}`)}

/*________________________ Question no 14 __________________________
destructuring array
_________________________ Answer ____________________________*/
// let [name, age] = ['Azziz',30];
// name = 'Hadi';
// age = 40;
// console.log(name);
// console.log(age)

/*________________________ Question no 15 __________________________
object destructuring 
_________________________ Answer ____________________________*/
// let student = {name : 'aziz',
//     course : 'web',
//     center : 'city campus'
// }
// // console.log(student.name);
// // console.log(student.center);
// let {name, course,center} = student;
// console.log(name);
// console.log(course)
/*________________________ Question no 16 __________________________
optional chaining
_________________________ Answer ____________________________*/
// const obj = {name : 'aziz'
// ,district :{tehsil :'essakehl',
//     province : { division : 'sirgodha'}
// }
// }
// console.log(obj.district?.town?.province?.division)
/*________________________ Question no 17 __________________________
enhanced object literals 
_________________________ Answer ____________________________*/
// let name  = 'Azziz';
// let course = 'web';
// let age = 30;
// const obj = {name,
//     course,
//     age
// }

// console.log(obj)
/*________________________ Question no 18 __________________________
ternary operator
_________________________ Answer ____________________________*/
// let name = 'aziz';
// let condition = (name === 'aziz')?('ok'):('not ok');
// console.log(condition)
/*________________________ Question no 19 __________________________
default parameter
_________________________ Answer ____________________________*/
// function greeting(name = 'Hadi'){console.log(name)}
// greeting()
/*________________________ Question no 20 __________________________
rest parameter
_________________________ Answer ____________________________*/
// function ok(carrot, raddish,...pm){console.log(pm);
//     console.log(carrot);
//     console.log(raddish)
// }
// ok('apple','mango','banaa')
/*________________________ Question no 21 __________________________
spread operator 
_________________________ Answer ____________________________*/
// let a = ['fruit','vegetables'];
// let b = ['garments','shoes'];
// // let c = a.concat(b);
// let c = [...a,...b]
// console.log(c);

/*________________________ Question no 22 __________________________
spread operator for object
_________________________ Answer ____________________________*/
// const obj1 = {name : 'Aziz'}
// const obj2 = {course : 'web development'}
// const merge = {...obj1,...obj2};
// console.log(merge)
// // make copy of object 
// let newObj = {...merge};
// console.log(newObj)

// add data in obj 
// const obj = {name : 'Aziz'}
// const detail = {...obj, course : 'web',age : 23};
// console.log(detail)

/*________________________ Question no 23 __________________________
spread operator and math.max
_________________________ Answer ____________________________*/
// let array = [4,1,33,5];
// let mx = Math.max(...array);
// console.log(mx)
/*________________________ Question no 24 __________________________
copy of array 
_________________________ Answer ____________________________*/
//  let fruits = ['apple','banana','mango'];
//  let newFruits = [...fruits];
//  console.log(newFruits);

// add new fruits in array by ...
// let fruits = ['apple','banana','mango']
// let final = ['watermelon','orange',...fruits,'carrot'];
// console.log(final);
// console.log(...final);
/*________________________ Question no 25 __________________________
Create a function greetUser that takes a name and a callback function.

The callback function should decide how to greet the user.

Example Flow:

function greetUser(name, callback) {

}
_________________________ Answer ____________________________*/
// function calculation(a,b){let ans = a + b;
//     console.log(ans)
// }

// function process(calculation){calculation(2,3)}
// process(calculation);

/*________________________ Question no 26 __________________________
try and catch
_________________________ Answer ____________________________*/

//  try{console.log(a)}
//  catch(err){console.log(err.message)}

// console.log(3+7)

/*________________________ Question no 27 __________________________
try and catch
_________________________ Answer ____________________________*/
// try {
//   let num = 5;
//   if (num < 10) {
//     throw "Number is too small";  // Manually throwing an error
//   }
//   console.log(num);
// } 
// catch(err) {
//   console.log("Error caught:", err); // Catching thrown error
// }

// console.log(3 + 7); // Runs normally
// example two 
// try{let age = 40;
//     if(age >30){throw 'age is more'}
//     console.log(age)
// }

// catch(err){console.log('error caught: ' , err)}

/*________________________ Question no 28 __________________________
try catch
_________________________ Answer ____________________________*/
// try{let name = prompt('enter your name');
//     if(name !== 'Aziz'){throw 'name is not correct'}
//     console.log(name);
// }
// catch(err){console.log('error caught :', err)}

/*________________________ Question no 29 __________________________
Divide Numbers
Take two numbers as input.

Try to divide them.

If the second number is 0, throw an error "Cannot divide by zero".

Expected Output:

If input: 10, 2 → Output: Result is 5

If input: 10, 0 → Output: Error caught: Cannot divide by zero
_________________________ Answer ____________________________*/
// try{let num1 = prompt('enter number 1');
// let num2 = prompt('enter number 2');
// let ans = num1/num2;
// if(num2 === '0'){throw 'cannot divide by zero'}
// console.log(ans)
// }
// catch(err){console.log('error caught:' ,err)}


/*________________________ Question no 30 __________________________
 Array Access
Create an array of 5 elements.

Ask the user for an index number.

If the index is out of range, throw an error "Index out of range".

Expected Output:

If array: [10,20,30,40,50] and input: 2 → Output: Value is 30

If input: 10 → Output: Error caught: Index out of range
_________________________ Answer ____________________________*/

// try{let array = ['mango','banana','orange','lemon','grapes'];
//     let enterIndexNo = prompt('enter required index number')
//     let ans = array[enterIndexNo];
//     if(enterIndexNo > array.length-1){throw 'index out of range'}
// console.log('value ',ans)}
// catch(err)
// {console.log('error caught : ' ,err)}


/*________________________ Question no 31 __________________________
Take a string from the user.

Try to convert it into a number.

If it is not a valid number, throw an error "Not a number".

Expected Output:

If input: "123" → Output: Number is 123

If input: "abc" → Output: Error caught: Not a number
_________________________ Answer ____________________________*/
// try {
//     let userInput = prompt("Enter a string:");
//     let num = Number(userInput);

//     if (isNaN(num)) {
//         throw "Not a number";
//     }

//     console.log("Number is", num);
// } 
// catch (err) {
//     console.log("Error caught:", err);
// }

// try{let input = prompt('enter string');
//     let ans = Number(input)
//     if(isNaN(ans)){throw 'input is not a number'}
//     console.log('Number is : ' ,ans)
// }
// catch(err){console.log('error caught', err)}

/*________________________ Question no 32 __________________________
check input is number or not
_________________________ Answer ____________________________*/
// let enterInput = prompt('enter string');
// let ans = Number(enterInput);
// if(isNaN(ans)){console.log('input is not number')}
// else{console.log('input is number')}


/*________________________ Question no 33 __________________________
Higher  order function 
_________________________ Answer ____________________________*/
// function squaring(num){return num*num;}

// function higherOrder(arr, cb){let ans = [];
//     for(let i = 0; i< arr.length;i++){ans.push(cb(arr[i]))}
//     return ans;
// }

// let final = higherOrder([2,3,5],squaring);
// console.log(final)

/*________________________ Question no 34 __________________________
higher order function 
_________________________ Answer ____________________________*/
// function cb(a,b,c){return a+b+c;}

// function higherOrder(a,b,c,mp){ return mp(a,b,c)}

// let final = higherOrder(2,3,4,cb)
// console.log(final)

/*________________________ Question no 35 __________________________
higher order function
_________________________ Answer ____________________________*/
// higher order function 
// function calculate(operation){return function (a,b){return operation(a,b);};}
// // example function 
// function add(x,y){return (x +  y)}
// // multiply function 
// function multiply(x,y){return x * y;}
// // use of higher order function 
// const addNumbers = calculate(add);
// const multiplyNumbers = calculate(multiply);
// console.log(addNumbers(3,2));
// console.log(multiplyNumbers(2,3))


/*________________________ Question no 36 __________________________
Create a higher-order function named createCalculator that:

Takes a function as an argument (for example: subtract or divide).

Returns a function that performs that operation on two numbers.

Create two functions:

subtract → subtracts two numbers

divide → divides two numbers

Use createCalculator to:

Make a subtraction calculator

Make a division calculator

Test both calculators with numbers and log the results.

Expected Output Example

Subtract: 10 - 3 = 7
Divide: 10 / 2 = 5
_________________________ Answer ____________________________*/
// function createCalculator(operation){return function(x,y){return operation (x,y)}}

// function subtract(a,b){return a - b;}
// function addition(a,b){return a + b;}

// let subtractCalculator = createCalculator(subtract);
// let addCalculator = createCalculator(addition);
// console.log(addCalculator(4,6))
// console.log(subtractCalculator(200,20))


/*________________________ Question no 37 __________________________
Higher order function
_________________________ Answer ____________________________*/
// higher order 
// function higher(cb){return function(m,n){return cb(m,n)}}


// function add(a,b){return a+b;}
// function subtract(a,b){return a - b;}
// function multiply(a,b){return a*b;}

// let addNumbers = higher(add);
// let subtractNumbers = higher(subtract);
// let multiplyNumbers = higher(multiply);
// console.log(addNumbers(8,9));
// console.log(subtractNumbers(7,1));
// console.log(multiplyNumbers(2,99))


/*________________________ Question no 38 __________________________
recursion function
_________________________ Answer ____________________________*/
// function greet(){let valu = 'hello';
//     return function inner(){console.log(valu)}
// }
// let ans = greet();
// ans()
/*________________________ Question no 39 __________________________
closure function
_________________________ Answer ____________________________*/
// function calculate(num){
//          return function(){let ans = num * 5;
//             console.log(ans)
            
//          }
   
// }

// let final = calculate(4);
// final()


/*________________________ Question no 40 __________________________
 
_________________________ Answer ____________________________*/





/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/


/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/



/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/





/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/





/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/





/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/




/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/





/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/




/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/





/*________________________ Question no 1 __________________________

_________________________ Answer ____________________________*/