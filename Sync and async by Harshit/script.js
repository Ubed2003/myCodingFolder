//callback

// function ubed(){
//     console.log('log')
//     console.log('123')

// }
// ubed()

// setTimeout

// console.log('script Start')

// const id = setTimeout(()=>{
//     console.log('hello world')
// },500)
// console.log('script end')

// clearTimeout(id)

//setInterval

// console.log('script Start')
// setInterval(()=>{
//     console.log(Math.random())
// },0)
// console.log('script end')

//setInterval Example

// const body = document.body
// console.log(body)
// const utton = document.querySelector('button')
// const intervalid = setInterval(()=>{
//     const red = Math.floor(Math.random() * 126)
//     const green = Math.floor(Math.random() * 126)
//     const blue = Math.floor(Math.random() * 126)
//     const rgb = `rgb(${red},${green},${blue})`
//     body.style.background =rgb

// },1000)

// utton.addEventListener('click',()=>{
//     clearInterval(intervalid)
//     utton.textContent = 'chal'
// })

// console.log(intervalid)

// UnderStand CallBack

// Example 1
// function myFunc(a){
//     console.log('kallu')
//    a()
// }
// myFunc(()=>{
//     console.log('jfajf')
// })

// Example 2
// function getTwoNumbersAndAdd(number1,number2,CallBack){
//     console.log(number1,number2)
//     CallBack(number1,number2)
// }
// getTwoNumbersAndAdd(4,5,addTwoNumbers)

// function addTwoNumbers(number1,number2){
// console.log(number1 + number2)
// }

// callbacks , callbacks hell, pyramid of doom
//asyncronous programming

// const heading1 = document.querySelector('.heading1')
// const heading2 = document.querySelector('.heading2')
// const heading3 = document.querySelector('.heading3')
// const heading4 = document.querySelector('.heading4')
// const heading5 = document.querySelector('.heading5')
// const heading6 = document.querySelector('.heading6')
// const heading7 = document.querySelector('.heading7')

//callback hell
// setTimeout(()=>{
//  heading1.textContent = 'one'
//  heading1.style.color = 'Violet'
//  setTimeout(()=>{
//     heading2.textContent = 'two'
//     heading2.style.color = 'purple'
//     setTimeout(()=>{
//         heading3.textContent = 'three'
//         heading3.style.color = 'red'
//         setTimeout(()=>{
//             heading4.textContent = 'four'
//             heading4.style.color = 'pink'
//             setTimeout(()=>{
//                 heading5.textContent = 'five'
//                 heading5.style.color = 'green'
//                 setTimeout(()=>{
//                     heading6.textContent = 'six'
//                     heading6.style.color = 'blue'
//                     setTimeout(()=>{
//                         heading7.textContent = 'seven'
//                         heading7.style.color = 'brown'
//                        },1000)
//                    },3000)
//                },2000)
//            },1000)
//        },2000)
//    },2000)
// },1000)

//callback hell in function
// function changeText(element, text, color, time,onSucessCallback, onFailureCallback){
// setTimeout(()=>{
//     if(element){
//         element.textContent = text;
//         element.style.color = color
//        if (onSucessCallback)
//        onSucessCallback()
//     }
// else{
// if(onFailureCallback){
//     onFailureCallback()
// }
// }
// },time)
// }
// changeText(heading1,'one','violet',1000,()=>{
//     changeText(heading2,'two','green',1000),()=>{
//         console.log('heading2 does not exist')
//     }
// })

// Intro to Promise

// const buckets =['coffee','chips','vegetables','salt','rice']

// making promise
// const mypromise = new Promise((resolve,reject)=>{
//     if (buckets.includes('vegetables')&& buckets.includes('salt')&&buckets.includes('rice')){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })

// // consuming promise
// // jab promise solve hoga
// mypromise.then((a)=>{
// console.log(a)
// },
// // jab promise reject hoga
// (error)=>{
//     console.log(error)
// }
// )



// Promises .catch wala
// const buckets =['coffee','chips','vegetable','salt','rice']

// making promise  
// const mypromise = new Promise((resolve,reject)=>{
//     if (buckets.includes('vegetables')&& buckets.includes('salt')&&buckets.includes('rice')){
//         resolve('haa bhai')
//     }
//     else{
//         reject('chal aa chal')
//     }
// })

// mypromise.then(()=>{
//     console.log('haa hogaya')
// },()=>{
// console.log('chal a')
// })

// consuming promise .catch wala
// mypromise.then((a)=>{
// console.log(a)
// }
// ).catch((error)=>[
// console.log(error)
// ])

// setTimeout(()=>{
// console.log('do some')
// },0)

// for (let i =0;i<100;i++){
//     console.log('Ubed',i)
// }

// console.log('script end')

// function returning promise
// const buckets =['coffee','chips','vegetables','salt','rice']
// function  ricePromise(){
//   return  new Promise((resolve,reject)=>{
//         if (buckets.includes('vegetables')&& buckets.includes('salt')&&buckets.includes('rice')){
//             resolve('solved')
//         }
//         else{
//             reject('couldnt do it')
//         }
//     })
// }

// ricePromise().then((a)=>{
// console.log(a)
// }
// ).catch((error)=>[
// console.log(error)
// ])

//promise and settimeout
// function myPromise() {
//   return new Promise((resolve, reject) => {
//     const value = false;
//     setTimeout(() => {
//       if (value) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 500);
//   });
// }

// Promise.resolve
// const myPromise = Promise.resolve(5)
// Promise.resolve(5).then(value=>{
//     console.log(value)
// })

// then()
// then method hamesha promise hi r eturn karta hai !  
// Promise chaining
// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         resolve('foo')
//     })
// }

// myPromise().then((value)=>{
//     console.log(value);
//     value +='barr'
//     return value
// })
// .then(value=>{
//     console.log(value)
// })


// callback hell to flat code
// const heading1 = document.querySelector('.heading1')
// const heading2 = document.querySelector('.heading2')
// const heading3 = document.querySelector('.heading3')
// const heading4 = document.querySelector('.heading4')
// const heading5 = document.querySelector('.heading5')
// const heading6 = document.querySelector('.heading6')
// const heading7 = document.querySelector('.heading7')
// const heading8 = document.querySelector('.heading8')
// const heading9 = document.querySelector('.heading9')
// const heading10 = document.querySelector('.heading10')

// function changeText(element, text, color, time ){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve()
//             }
//         else{
//             reject()
//         }
//         },time)
//     })

// }
// const returnedPromise = changeText(heading1,'one', 'red',1000)

// returnedPromise.then(()=>{
//     changeText(heading2,'two', 'purple',1000)

// }
// )

// function myfunc(){
//  function hello(){
//     console.log('hello inside func')
//  }
//     return hello
// }

// const ans = myfunc()
// ans()

//
// function myfunc(){
//  function hello(){
//     console.log('hello inside func')
//  }
//     return hello
// }

// const ans = myfunc()
// ans()

// map  // array method

//

// function multiplybyTwo(number, index){
//     console.log(number)
//     console.log( index)

// }

// multiplybyTwo(numbers[0],0)

// for(let i =0; i<=numbers.length; i++)
// {
//     console.log(i)
// }

// function ubed(a){
//     console.log(a*a)
// }

// numbers.map(ubed)

// let num =[1,2,3,4]

//  num.forEach((a,b,c)=>{
// console.log(a*a,b,c)

// })


// XHR

// const xhr = new XMLHttpRequest()
// console.log(xhr)
// const URL = 'https://jsonplaceholder.typicode.com/posts'
// // step 1

// xhr.open('GET', URL)

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState)
//     if(xhr.readyState === 4)
//     {
//         console.log(xhr)
//        const response = xhr.response
//     const data =  JSON.parse(response)
//     console.log(typeof data)
//     }
// }

// xhr.onload = function(){
//     const response = xhr.response
//      const data =  JSON.parse(response)
//      console.log(data)

// }

// xhr.send()


// Error Handling

// const URL = 'https://jsonplaceholder.typicode.com/posts'
// const xhr = new XMLHttpRequest()
// console.log(xhr)


// xhr.open('GET', URL)

// xhr.onload = () =>{
//     if(xhr.status>=200 && xhr.status <300){
//         const data = JSON.parse(xhr.response)  
//         console.log(data)
//         const id = data[3].id
//       const xhr2 = new XMLHttpRequest()
//       const URL2 = `${URL}/${id}`
//       console.log(URL2)
//       xhr2.open('GET', URL2)
//       xhr2.onload = ()=>{
//     const data2 =  JSON.parse(xhr2.response)
//     console.log(data2)
//       }
//       xhr2.send()

//     }
//   else{
//     console.log('something went wrong')
//   }
// }

// xhr.onerror = () =>{
//     console.log('net error')
// }

// xhr.send()


// xhr consume using promise 

// const URL = 'https://jsonplaceholder.typicode.com/posts'

// function sendRequest(method,url){
//     return new Promise (function(resolve,reject){
//         const xhr = new XMLHttpRequest()
//         xhr.open(method,url )
//         xhr.onload = function(){
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.response)
//             }

//             else{
//                 reject(new Error('Invalid'))
//             }
//         }

//         xhr.onerror = function(){
//             reject(new Error('Something went wrong'))
//         }

//          xhr.send()
//     })
// }


// sendRequest('GET',URL)
// .then(response =>{
//    const data = JSON.parse(response)
//   return data

// })
// .then(data =>{
//   const id =  (data[3].id)
//   return id 
// })

// .then(id =>{
// const url = `${URL}/${id}`
// return sendRequest('GET', url)
// })
// .then(newResponse =>{
//    const newData = JSON.parse(newResponse)
//    console.log(newData)
// })
// .catch(error =>{
//     console.log(error)
// })


// fetch api
// const URL = 'https://jsonplaceholder.typicode.com/posts'

//  fetch(URL,{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }).then(response=>{
   
//    if(response.ok){
//     return response
//    }
//    else{
    // throw new Error('something went wrong')
//    }

//  })
//  .then(data=>{
//     return data.json()
//  })
//  .then(final=>{
//     console.log(final)
//  })
//  .catch(error=>{
//     console.log('catch party')
//     console.log(error)
//  })



// async await


// fetch(URL)
// .then(res=>{
// return res.json()
// } )
// .then(data=>{
//    console.log(data)
// })


// const URL = 'https://jsonplaceholder.typicode.com/posts'

//  async function getPosts(){
//   const response  = await fetch(URL)
//   if(!response.ok){
//     throw new Error('something went wrong')
// }
//  const data =  await response.json()
//   return data
//  }

// // const myData =  getPosts()
// // console.log(myData)

// getPosts().then(myData =>{
//     console.log(myData)
// })
// .catch(error=>{
//  console.log(error)   
// })


// const datas =[
//   {name: 'ajay', profession:'coder'},
//   {name: 'anuj', profession:'coder'}
// ]

// function getDatas(){
//   setTimeout(()=>{
//   let output = ''
//   datas.forEach((data,index)=>{
//     output+= `<li>${data.name}<li/>`

//   })
//   document.body.innerHTML = output
// },100)
// }


// function createdata(newData){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       datas.push(newData)
//       let error =  false
//       if(!error){
//        resolve()
//       }
//       else{
//         reject('sahi nhi hai')
//       }
//     },500 );
//   })
// }


// createdata({name:'vivek',profession:'coder'})
// .then(getDatas)


// async function start(){
//  await createdata({name:'vivek',profession:'coder'})
//    getDatas()
// }

// start()

