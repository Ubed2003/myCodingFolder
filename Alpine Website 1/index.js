let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
 navbar.classList.toggle('active')
 menu.classList.toggle('fa-times')
}

// window.onscroll = () =>{
//     navbar.classList.remove('active')
//     menu.classList.remove('fa-times')
// }


// image slider

var counter=1;
setInterval(function(){
    document.getElementById('radio'+ counter).checked=true; counter++;
    if(counter> 4){
        counter = 1
    }
},2000)


// popup
let popup = document.getElementById('popup')
function openPopup(){
popup.classList.add('open-Popup')
}
function closePopup(){
popup.classList.remove('open-Popup')
}
