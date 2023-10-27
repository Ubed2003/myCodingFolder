const nextE1 =document.querySelector('.next')

const imgsE1 =document.querySelectorAll('img');


const imageContainerE1 = document.querySelector
('.image-container')

let currentImg = 1

nextE1.addEventListener('click', ()=>{
    currentImg++
    updateImg()
})

function updateImg(){
  if (currentImg >  imgsE1.length)
  { currentImg =1; }
    imageContainerE1.style.transform = `translateX(-${currentImg   * 500}px)`;
}


