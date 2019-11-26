//Global Varibales
const firstLayer = document.getElementById('color-round-one');
const secondColorLayer = document.getElementById('color-round-two');
const fortuneColorRoundOne = document.getElementsByClassName('color-name');
const fortuneNumberRoundThree = document.getElementsByClassName('number-name');
const thirdLayer = document.getElementById('number-layer-three');
const fortuneColorRoundTwo = document.getElementsByClassName('color-name-2');


//The Functionality for color
function loopThrough(){
  const changeColor = ()=>{
    this.classList.toggle('white');
  };
  for ( let i = 0; i < this.textContent.length * 2; i++){
    setTimeout(changeColor, i * 1000);
  }
};
//hides layer 1 switches to layer 2
function changeLayer(){
  const swap = ()=>{
    firstLayer.classList.add('wrapper-hide');
    secondColorLayer.classList.remove('wrapper-hide-color');


}

setTimeout(swap, this.textContent.length * 2 * 1000);
};


//run these
for (let i = 0; i < fortuneColorRoundOne.length; i++){
  fortuneColorRoundOne[i].addEventListener('click', loopThrough);
  fortuneColorRoundOne[i].addEventListener('click', changeLayer);
};





//Swith layers and run again//
function changeLayer2(){
  const swapTwo = ()=>{
    secondColorLayer.classList.add('wrapper-hide-color');
    thirdLayer.classList.add('wrapper-hide-number');
    thirdLayer.classList.add("grid-numbers");
}

setTimeout(swapTwo, this.textContent.length * 2 * 1000);
};

for (let i = 0; i < fortuneColorRoundTwo.length; i++){
  fortuneColorRoundTwo[i].addEventListener('click', loopThrough);
  fortuneColorRoundTwo[i].addEventListener('click', changeLayer);
};

for (let i = 0; i < fortuneColorRoundTwo.length; i++){
  fortuneColorRoundTwo[i].addEventListener('click', loopThrough);
  fortuneColorRoundTwo[i].addEventListener('click', changeLayer2);
};
