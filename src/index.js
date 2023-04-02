import './style.css';

import homePage from './home';
import menuPage from './menu';
import aboutPage from './about';
// HOME PAGE

const container = document.querySelector('#content')

const headerDiv = document.createElement('div')
headerDiv.classList.add('header')

headerDiv.innerHTML = `
<div class="logo">Bella Italia</div>
<div class="tabs">
<button class="home">Home</button>
<button class="menu">Menu</button>
<button class="about">About</button>
</div>
`

const newContainer = document.createElement('div')
newContainer.classList.add('newContainer')
newContainer.appendChild(homePage())

container.appendChild(headerDiv)
container.appendChild(newContainer)


const homeButton = document.querySelector('.home')
const menuButton = document.querySelector('.menu')
const aboutButton = document.querySelector('.about')



homeButton.addEventListener('click', e=>{
    newContainer.innerHTML = ''
    newContainer.appendChild(homePage())
})


menuButton.addEventListener('click', e=>{
    newContainer.innerHTML = ''
    newContainer.appendChild(menuPage())
})

aboutButton.addEventListener('click', e=>{
    newContainer.innerHTML = ''
    newContainer.appendChild(aboutPage())
})
