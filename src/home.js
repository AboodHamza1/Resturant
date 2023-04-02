export default function homePage(){

const newDiv = document.createElement('div')
newDiv.classList.add('content')

newDiv.innerHTML = `
<h1>Restaurant Description</h1>
<p>Bella Italia is a cozy Italian restaurant located in the heart of the city. Our menu features authentic Italian cuisine made with fresh ingredients sourced from local farms and markets. Our warm and welcoming atmosphere and friendly staff are sure to make you feel right at home.
</p>
`
return newDiv;
}