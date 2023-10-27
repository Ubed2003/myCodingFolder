// variables 

// var firstName = 'ubed bhai'
// console.log(firstName)

// var firstname = 'ubed'
// console.log(firstName)


// let and const  keyword

// let firstName = 'ubed bhai'
// console.log(firstName)



// string indexing
// let firstName = 'nvjkvnlwkvjwiovhwho'
// console.log(firstName[firstName.length])


// Useful Strings Methods

// let Name = +'ubed'
// let age = 20 + ''
// console.log(typeof age )
// // age = age + ''
// console.log(typeof Name)
// console.log(value.slice(0,3))
// console.log(kallu)
// console.log(ubed.length)
// console.log(value.toLowerCase())
// let firstName = 'harshit'
// kaluu = firstName.toUpperCase()
// console.log(firstName)
// console.log(kaluu)


//convert Num into string & string into Num

// 1st method 
// let name = +'ubed'
// let age = 20
// console.log(typeof (age + ''))
// console.log(typeof name )

// 2nd method 
// let name = +'ubed'
// let age = '20'
// age = Number(age)
// console.log(typeof age)


// string concatenation

// let string1 = 'Ubed'
// let string2 = 'khan'
// let fullName = string1 + ' ' +  string2
// console.log(fullName)


// Template String 

// let age = 19
// let firstName = 'Ubed'
// let aboutMe =  ` ${age} ${firstName}`
// console.log(aboutMe)


// booleans & comparison operators

// booleans
// True, False
  
// let num1 = 7
// let num2 = '7'
// console.log(num1 == num2)
// console.log(num1 === num2)
// console.log(num1 != num2)
// console.log(num1 !== num2)


// if else condition

// let age = 8
// if (age >= 18){
//   console.log('kallu')
// }

// else{
//   console.log('dallu')
// }


// ternary operator
// let age = 4

// let drink = age <3 ? 'coffee' : 'chai'  
// console.log(drink)

// let drink = ''
// if (age>5){
//   drink= 2
// }

// else{
//   drink = 5
// }
// console.log(drink)


// and  operator
// let fName = 'ubed'
//  let age = 20
//  if(fName[0] === 'u' && age > 18 ){
//   console.log ('kallu')
//  }


//  or operator  
// let fName = 'ubed'
//  let age = 20
//  if(fName[0] === 'b' || age > 18 ){
//   console.log ('kallu')
//  }


// nested if else condition

// winning number  is 19
// if userGuess is 19 it is  right
// if userGuess is greater than  19 it is too high
// if userGuess is less than  19 it is too low

// let wN = 19
//  let userGuess = +prompt('guess a number')

// if (userGuess === 19){
//   console.log('your guess is right')
// }
// else{
//   if (userGuess < 19)
//   console.log('too low!!')
//   else
//   {
// console.log('too high !!')
//   }
// }


// if
// else if
// else if
// else if
// if

// let tempInDegree = prompt('guess')

// if(tempInDegree < 0){
//   console.log('Extreme cold outside')
// }
// else if(tempInDegree < 16){
// console.log('It is cold outside')
// }
// else if(tempInDegree < 25){
//   console.log('Weather is Ok')
//   }
// else if(tempInDegree < 35){
//     console.log('lets go for swim')
//     }
// else if(tempInDegree < 45){
//       console.log('turn on AC')
//       }
// else {
//    console.log('too hot!!')
//   }


// switch Statement

// let day = 2;

// switch(day){
//   case 0 :
//     console.log('sunday')
//     break
//   case 1 :
//     console.log('monday')
//     break
//   case 2 :
//     console.log('tuesday')
//     break
//   case 3 :
//     console.log('wednesday')
//     break
//   case 4 :
//     console.log('thursday')
//     break
//   case 5 :
//     console.log('friday')
//     break
//   case 6 :
//     console.log('saturday')
//     break
//     default:{
//       console.log('Invalid Day')
//     }
// }


// while loop

// var i = 0
// while (i<=2){
//   console.log(i)
//   i++
// }


// while loop example 
// let num = 10
// let total = 0
// let i = 0
// while (i<=10){
//   total = total + i
//   i++
// }
// console.log(total)


// do while loop  

// var i = 4

// do {
//   console.log(i)
//   i++
// }
// while (i<=10)




// for loop 

// for (let i = 0; i<5; )
// {
//   console.log(i)
// }

// for loop example 

// let total = 0
// let num = 10

// for(let i = 0; i<=10; i++){
//   total = total + i
// }
// console.log(total)


// Arrays

// let fruits = ['apple','mago','grapes']
// fruits[0] = 'mango'
// console.log(fruits)

// array push method  //  add in the last 
// let fruits = ['apple','mango','grapes']
// fruits.push()
// console.log(fruits)

// array pop method  //  remove  from  the last and give us 

// let fruits = ['apple','mago','grapes']
// let  a = fruits.pop()
// console.log(a)

// array unshift method  //  add in the first 

// let fruits = ['apple','mago','grapes']
// fruits.unshift('banana')
// console.log(fruits)

// array shift method  //  remove from the first and give us 

// let fruits = ['apple','mango','grapes']
// let b = fruits.shift()
// console.log(b)


// how to copy array

// 1st method
// let array1 = ['item1', 'item2' ]
// let array2  = ['item1', 'item2']
// array1.push('item3')
// console.log(array1,array2 )


// 2nd one   // slice method 
// let array1 = ['item1', 'item2','item3' ]
// let array2  = array1.slice(0)
// array1.push('item4')
// console.log(array1,array2 )


// 3rd one   // concat  method 
// let array1 = ['item1', 'item2','item3' ]
// let array2  = [].concat(array1)
// array1.push('item4')
// console.log(array1,array2 )


 // spread operator
// let array1 = ['item1', 'item2' ]
// let onemorArray = ['item4','item5']
// let array2  = [...array1,...onemorArray ]
// array1.push('item3')
// console.log(array1,array2 )



// for loop in array

// let fruits = ['apple','mango','grapes', 'banana']
// for(let i = 0 ; i<=fruits.length; i++){
// console.log(i)
// }


// length property in array
// let fruits = ['apple','mango','grapes', 'banana']
// console.log(fruits[fruits.length-1])



// for loop in array
// let fruits = ['apple','mango','grapes', 'banana']
// for(let i =0 ; i<fruits.length;i++){
//   console.log(fruits[i].toUpperCase())

// }

// while loop in array 
// let fruits = ['apple','mango','grapes', 'banana']
// let i = 0
// while(i<fruits.length){
//   console.log(fruits[i])
//   i++
// }

// for of loop 
// let fruits = ['apple','mango','grapes', 'banana']
// for (let fruit of fruits){
//   console.log(fruit)
// }

// for in loop
// let fruits = ['apple','mango','grapes', 'banana']
// for (let a in fruits){
//   console.log(fruits[a])
// }


// array destructuring

// const  myarray1 = ['mango' , 'grapes', 'banana','apple']
// let myvar1 = myarray1[0]
// let myvar2 = myarray1[1]
// let  [myvar1, myvar2, myvar3] = myarray1
// console.log(myvar1,myvar2,myvar3)


// objects

// const person ={
//   name: 'ubed',
//   age: 20,
//   hobbies: ['guitar', 'sleeping' , 'pubg']
// }
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies[0])

// person.gender = 'male'
// console.log(person)


// bracket notation in objects

// const person ={
//   name : 'ubed',
//   age: 20,
//   hobbies: ['guit ar', 'sleeping' , 'pubg']
// }
// person['gender'] = 'male'
// console.log(person['name'])

// difference between dot and bracket notation

// const key = 'Email'
// const person ={
//   name : 'ubed',
//   age: 20,
//  'person hobbies': ['guitar', 'sleeping' , 'pubg']
// }

// console.log(person['person hobbies'])
// person[key] = 'harshisthvashistha'
// console.log(person)


// how to iterate objects

// const person ={
//   name : 'ubed',
//   age: 20,
//  'person hobbies': ['guitar', 'sleeping' , 'pubg']
// }

// for in loop 
// Object.keys

//  for (let key in person){
//   console.log(key,':',person[key])
//  }


// computed properties
// const key1 = 'objkey1'
// const key2 = 'objkey2'

// const value1  = 'myValue1'
// const value2  = 'myValue2'

// const obj ={
//   [key1] :value1,
//   [key2] :value2

// }
// console.log(obj)


// spread operators in array

// const array1 =[ 1,2,3]
// const array2 =[ 4,5,6]

// const newArray = [...array1,...array2, ]
// console.log(newArray)


// spread operators in objects

// const obj1 = {
//   key1: 'value1',
//   key2:'value2',

// }

// const obj2 = {
//   key1: 'value10',
//   key3:'value3',
//   key4:'value4',

// }
// const newObjects = {...obj1, ...obj2}
// console.log(newObjects)

// const newObjects = {...['item1'  , 'item2']}
// console.log(newObjects)



// array destructuring

// const  myarray1 = ['value1' , 'value2', 'value3','value4']
// let  [myvar1, myvar2] = myarray1


// object destructuring 

// let band = {
//   bandName: 'led zepplin',
//   famousSong: 'stairway to heaven',
//   year: 1968,
//   anotherFamousSong: 'kashmir'
// }

// const var1 = band.bandName
// const var2 = band.famousSong
// console.log(var1,var2)

// let  {bandName:var1 , famousSong:var2} = band
// console.log(var2)


// object inside array

// const users = [
//   {userid:1, firstName : 'ubed', gender:'male'},
//   {userid:2, firstName : 'bahi', gender:'male'},
//   {userid:3, firstName : 'blote', gender:'male'},
// ]
// for (let user of users){
// console.log(user)
// }



// Function Declaration

// function ubed(){
//   console.log('kallu')
// }
// ubed()


// method 

// function findtarget(array,target){
//   for(let i= 5 ; i<array.length; i++){
//     if(array[i]===target)
//     return i
//   }
//   return -1
// }

// const ans = findtarget([1,3,5,8,9],8)
// console.log(ans)


// Function Expression

// const kallu = function ubed(){
//   console.log('kallu')
// }
// kallu()


// arrow function 

// let a = ()=> console.log('kallu')

// a()


// function inside function
 
// const app = ()=>{
//   const  myFunc = ()=>{
//      console.log('hello from my func')
//   }
//   const addTwo = (num1, num2) =>{
//     return num1 + num2 
//   }
//   const mul = (number1,number2)=> number1 * number2

  

//   console.log('inside app')
//   myFunc()
//   console.log(addTwo(2,3))
//   console.log(mul(2,3))
// }

// app()

// lexical scope

// function myapp(){
//   console.log('ubed')
//   const myVar = 'value1'
// const myfunc2 = function(){
//   const myVar = 'value59'
//   console.log('inside my Func',myVar)
// }
// const myfunc3 = () =>{}
// myfunc2()
// console.log(myVar)
// }
// myapp()


// block scope vs function scope

// {
//   let    a = 8
// }

//   console.log(a)


// default parameters

// function addTwo(a,b=0){
//   return a + b
// }
// const ans = addTwo(4)
// console.log(ans)


// rest parameters

// function myFunc(a,b,...c){
//   console.log(`a is ${a}`)
//   console.log(`b is ${b}`)
//   console.log(`c is ${c}`)

// }
// myFunc(1,2,3,4,5)'

// function addAll(a,b,c,d){
// return a + b + c + d
// }

// const sum = addAll(1,2,3,4)
// console.log(sum)


//  callback function

// function myFunc(a){
//   console.log('ubedBhai')
//   a('b hu')
 
// }
//  myFunc((b)=>{
//   console.log('kallu')
//   console.log(b)
//  })


// function returning function 

// function myFunc(){
//   function hello(){
//     console.log('Hello World')
//   }
//   return hello
// }
// const ans = myFunc()
// ans()


//forEach Method 

// const numbers = [4,2,5,8]

//  numbers.forEach((number,index,array)=>{
//   console.log(number,index,array)

// })


// use in work

// const users = [{
//     firstName: 'ubed',age:  20,},
//     {
//         firstName: 'ubqed',age:  0,},
//         {
//             firstName: '2y',age:  2,},
//             {
//                 firstName: 'SGH',age:  22,}
// ]

// users.forEach(function(user){
//     console.log(user.firstName)
// })


// Array.from

// let name = 'ubed'
// let arr = Array.from(name)
// console.log(arr)


// map Method  //returns a new array

// const numbers = [4,2,5,8]

// const a = numbers.map((number,index,array)=>{

// return index
// })
// console.log(a)

// map Method in work

// const users = [{
//     firstName: 'ubed',age:  20,},
//     {
//         firstName: 'ubqed',age:  0,},
//         {
//             firstName: '2y',age:  2,},
//             {
//                 firstName: 'SGH',age:  22,}
// ]

// const userNames = users.map(function(user){
//     return user.firstName 
// })

// console.log(userNames)


// filter method   //returns the true value

// const numbers = [11,3,2,4,6,18]

// const a = numbers.filter((number)=>{
//  return number<10
// })

// console.log(a)

// reduce method

// const numbers = [1,2,3,4,5,1]

// const sum = numbers.reduce((accumulator,currentValue)=>{
// return accumulator + currentValue
// })

// console.log(sum)


// // accumulator   ,   currentValue   ,   return
// //     1          +       2          =      3
// //     3         +       3          =      6
// //     6         +       4          =     10
// //    10         +       5     =         15


// Dom 

// // get element by id
// console.log(document.getElementById('heading'))


// get element by querySelector 
// console.log(document.querySelector('.heading'))



//  textContent
// const text = document.querySelector('.heading')
// console.log(text)
// text.textContent = 'Kallu'
// console.log(text.textContent)


// innerText
// const text = document.querySelector('.heading')
// console.log(text)
// console.log(text.innerText)
// text.innerText = 'kallu'
// console.log(text.innerText)


// change the style of the elements
// const heading = document.querySelector('.heading')
// heading.style.color = 'blue'


// get  attributes
// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))


// set attributes
// const link = document.querySelector('a')   
// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'https://codprog.com')
// console.log(link.getAttribute('href'))


// get multiple elements using getElementbyClassName
// const navItems = document.getElementsByClassName('nav-item')
// console.log(navItems)


// get element by querySelector 
// console.log(document.querySelectorAll('.heading'))


// iterate elements
// ......

 
// innerHTML
// const heading = document.querySelector('.heading')
// console.log(heading.innerHTML)


// Dom traversing 
// const rootNode = document.getRootNode()
// const htmlElementNode = rootNode.childNodes
// console.log(htmlElementNode.childNodes)
// const headElementNode = htmlElementNode.childNodes

// ... continues



// Hoisting

// console.log(a)
  //  bcz it is made from  the 'var' it is undefined in code execution of Global Execution Context


// var a = 5  
 // undefined after creating a context of Global Execution Context


// console.log(a)
 // It is defined after the code executing phase of the Global Execution Context


//  console.log(myFunction)

//  var myFunction = function(){
//     console.log('this is my function')
//  }

// map filter reduce method 
// map method

// let arr = [45,23,21]
//  let a = arr.map((value,index,array)=>{
//   console.log(value,index,array)

// })
// console.log(a)


// Array filter method 
// let arr = [20,30,40,0,1,2]
// let a2 = arr.filter((value)=>{
// return value<10

// })
// console.log(a2)

//
//  let arr = [{
//   user: 'ubed',
//   age: 20
//  }]
//  let a = arr.map((a)=>{
//   return a.user
//  })
// console.log(a)



// function ubed(a,b){
//   return a+b
// }

// let a = ubed(2+2+2,3)
// console.log(a)

// Async js programming by technicalSuneja(humble man)


// function ubed(id){
//   console.log(id)
// }
// ubed(1)


// Dom by Sheryians coding school

// 4  pillars of DOM
// 1. selection of an Element 
var  a = document.querySelector('h1')
console.log(a)
// 2.Changing Html 
var a = document.querySelector('h1')
a.innerHTML = 'kal'
// 3. Changing CSS
var a = document.querySelector('h1')
a.style.color ='green'
a.style.backgroundColor ='red'
// 4. Event Listener
var a = document.querySelector('h1')
a.addEventListener('click',()=>{
a.innerHTML ='Red'

})

// SELECTING MULTIPLE EVENTS AT THE SAME TIME

var h  = document.querySelectorAll('h1')
console.log(h)


