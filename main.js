//Global Varibales
const fortuneBox = document.getElementsByClassName('color-name');


//The Functionality
function loopThrough() {
  const blink = () => this.classList.toggle('white');
for(let i= 0; i< this.textContent.length * 2; i++){
  setTimeout(blink, i * 1000);
};
};

//The Event Listener
for (let i = 0; i < fortuneBox.length; i++) {
  fortuneBox[i].addEventListener('click', loopThrough);
};
