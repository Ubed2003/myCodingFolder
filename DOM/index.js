// const rootNode =  document.getRootNode();
// const htmlElementNode = console.log(rootNode.childNodes[0])

// console.log(htmlElementNode)


// classList

// const  container =  document.querySelector('.container')
// console.log(container.classList)
// container.classList.add('bg-dark')
// const kallu = container.classList.contains('bg-dark')
// console.log(kallu)
// container.classList.toggle('bg-dark')


// createElement

// const newTodoItem = document.createElement('li')
// const newTodoItemText = document.createTextNode(' Teach students')
// const  todoList = document.querySelector('.container')
// newTodoItem.append(newTodoItemText)
// console.log(newTodoItem)

// Intro to Events


// addEventListener

// const container = document.querySelector('.container')

// container.addEventListener ('click', function(){
//     console.log('kallu')
// })


// 'this keyword' inside EventListener callBack

// const container = document.querySelector('.container')

// container.addEventListener ('click', function(){
//     console.log('kallu')
// console.log(this)
// })


// click event on multiple buttons

// const allButton = document.querySelectorAll('button')

// 1st Method 
// for ( let button  of  allButton){
//    button.addEventListener('click', function(){
//     console.log(this.textContent)
//    })
// }

// 2nd Method 
// allButton.forEach(function(button){
//     button.addEventListener('click', function(){
//         console.log(this)
//        })
// })


// Event Object


const firstButton = document.querySelector('#one')
firstButton.addEventListener('click', function(){
    console.log(this)
})