const navBlock = document.querySelector('#navContent')
const steamBlock = document.querySelector('#steamContent')
const navToggle = document.querySelector('#navToggle')
const steamToggle = document.querySelector('#steamToggle')
var navStatus = false
var steamStatus = false

function setViewportHeightReal(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
function setViewportWidthReal(){
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}

function setViewportProperties(){
    setViewportWidthReal()
    setViewportHeightReal()
}

navToggle.addEventListener('click', () => {
    if (steamStatus == true){
        steamBlock.style.display = 'none'
        steamStatus = false
        steamToggle.classList.add('fa-steam')
        steamToggle.classList.add('fab')
        steamToggle.classList.remove('fas')
        steamToggle.classList.remove('fa-times')
    }
    if (navStatus == false){
        navBlock.style.display = ''
        navStatus = true
        navToggle.classList.remove('fa-bars')
        navToggle.classList.add('fa-times')
    }
    else if (navStatus == true){
        navBlock.style.display = 'none'
        navStatus = false
        navToggle.classList.remove('fa-times')
        navToggle.classList.add('fa-bars')
    }
})
steamToggle.addEventListener('click', () => {
    if (navStatus == true){
        navBlock.style.display = 'none'
        navStatus = false
        navToggle.classList.remove('fa-times')
        navToggle.classList.add('fa-bars')
    }
    if (steamStatus == false){
        steamBlock.style.display = ''
        steamStatus = true
        steamToggle.classList.remove('fa-steam')
        steamToggle.classList.remove('fab')
        steamToggle.classList.add('fas')
        steamToggle.classList.add('fa-times')
    }
    else if (steamStatus == true){
        steamBlock.style.display = 'none'
        steamStatus = false
        steamToggle.classList.add('fa-steam')
        steamToggle.classList.add('fab')
        steamToggle.classList.remove('fas')
        steamToggle.classList.remove('fa-times')
    }
})

window.addEventListener('resize', () => {
    setViewportProperties()
})

setViewportProperties()

navBlock.style.display = 'none'
steamBlock.style.display = 'none'