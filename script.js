//variables
const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

//functions to change currentColor,currentMode,curentSize

//capture current color
function setCurrentColor(newColor) {
    currentColor = newColor
  }
  
  //capture current mode by setting it
  function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
  }
  
  // grid f(x): sub fx 
  function setCurrentSize(newSize) {
    currentSize = newSize
  }

  // fetching all the other variables on the html page

const colorPicker = document.getElementById('colorPicker')
const colorBtn = document.getElementById('colorBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const grid = document.getElementById('grid')


//adding event listeners to al the variables and the functions

colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

//grid f(x):define what happens to grid when mouse is down,adding color to grid
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


//grid f(x): change size of grid
function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
  }
  
  //grid f(x): sub fx for change size fx
  function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
  }
  
  //grid f(x): sub fx for change size fx
  function reloadGrid() {
    clearGrid()
    setupGrid(currentSize)
  }
  
  //grid f(x): sub f(x) for reload grid(fx)
  function clearGrid() {
    grid.innerHTML = ''
  }

//grid f(x) : sub f(x) for reload grid,this loop shall reiterate on every squere of grid,and add event listener on each
function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      grid.appendChild(gridElement)
    }
  }



//grid fx: sub function for setupGrid(fx),added to event listener to change color when mouse is over/down a grid squere
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = 'transparent'
    }
  }


//this function will activate the button thats been pressed so that it cannot be double pressed,to do that we remove the active class that exists inside the button to make it known to the pc that this button is active as we speak,thus cannot be activated.if not yet activated we add the active class when it is pressed for the first time.

  function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }

window.onload = () => {
  setupGrid(DEFAULT_SIZE)
  activateButton(DEFAULT_MODE)
}


//variables.part2 modal
let openBtn =document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

//Event listeners for appearance and disappearance of modal
openBtn.addEventListener('click',function(){

    modalContainer.style.display = 'block';


});
closeBtn.addEventListener('click',function(){

    modalContainer.style.display= 'none';
})

window.addEventListener('click',function(e){
    if(e.target === modalContainer){
    
    modalContainer.style.display = 'none';}
console.log(e.target)
})

