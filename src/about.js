export default function aboutPage(){
    const newDiv = document.createElement('div')
    newDiv.classList.add('content')
    
    newDiv.innerHTML = `
    <h2>Contact Us</h2>
    <p>+972 0598000518</p>
    <p>TEL PHONE 390W8978 467E4673</p>
    <p>abood@gmail.com</p>
    <h2>Location</h2>
    <p>Ramallah , al-irsal st.</p>
    <p>Al Bakri Building , 3rd Floor</p>
    `
    return newDiv;
}