//Global Varibales
const firstLayer = document.getElementById('layer-one');
const fortuneColor = document.getElementsByClassName('color-name');
const myLayerTwo = document.getElementsByClassName('number-name');
const secondLayer = document.getElementById('layer-two');


//The Functionality
function loopThrough(){
  const changeColor = ()=>{
    this.classList.toggle('white');
  };
  for ( let i = 0; i < this.textContent.length * 2; i++){
    setTimeout(changeColor, i * 1000);
  }
};


function changeLayer(){
  const swap = ()=>{
    firstLayer.classList.add('wrapper-hide');
    secondLayer.classList.remove('wrapper-hide');
}
setTimeout(swap, this.textContent.length * 2 * 1000);
};


for (let i = 0; i < fortuneColor.length; i++){
  fortuneColor[i].addEventListener('click', loopThrough);
  fortuneColor[i].addEventListener('click', changeLayer);
};
for (let i = 0; i < fortuneColor.length; i++){
  myLayerTwo[i].addEventListener('click', loopThrough);
  myLayerTwo[i].addEventListener('click', changeLayer);
};
