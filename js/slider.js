const buttonLeft = document.querySelector('#sliderLeft');
const buttonRight = document.querySelector('#sliderRight');
const itemsList = document.querySelector('#slider');
const items = document.querySelector(".assortment__item");


const step = items[0].getBoundingClientRect().width;
const minRight = 0;
const maxRight = (items.length - 1) + step; 

let currentRight = 0;

itemsList.style.right = currentRight;

buttonRight.addEventListener("click", e => {
  e.preventDefault();

  if(currentRight === maxRight) {
    currentRight = minRight;
    itemsList.style.right = `${currentRight}px`;
    return;
  }

  if(currentRight < maxRight) {
    currentRight += step;
    itemsList.style.right = `${currentRight}px`;
  } 
})

buttonLeft.addEventListener("click", e => {
  e.preventDefault();

  if(currentRight === minRight) {
    currentRight = maxRight;
    itemsList.style.right = `${currentRight}px`;
    return;
  } 

  if(currentRight > minRight) {
    currentRight -= step;
    itemsList.style.right = `${currentRight}px`;
  } 
})