export default function menuPage(){

const newDiv = document.createElement('div')
newDiv.classList.add('content')
    
newDiv.innerHTML = `
<div class="card-container">
<div class="card">
  <h2>Bruschetta</h2>
  <p>Toasted bread topped with fresh tomatoes, basil, and garlic</p>
  <span>$8</span>
</div>
<div class="card">
  <h2>Fried Calamari</h2>
  <p>Crispy fried calamari served with marinara sauce</p>
  <span>$12</span>
</div>
<div class="card">
  <h2>Caprese Salad</h2>
  <p>Fresh mozzarella, sliced tomatoes, and basil drizzled with balsamic glaze</p>
  <span>$10</span>
</div>
<div class="card">
  <h2>Spaghetti Carbonara</h2>
  <p>Spaghetti tossed in a creamy sauce with pancetta, egg yolks, and Parmesan cheese</p>
  <span>$16</span>
</div>
<div class="card">
  <h2>Chicken Parmesan</h2>
  <p>Breaded chicken breast topped with marinara sauce and melted mozzarella cheese, served with spaghetti</p>
  <span>$18</span>
</div>
<div class="card">
  <h2>Linguine with Clams</h2>
  <p>Linguine tossed with fresh clams, garlic, white wine, and parsley</p>
  <span>$20</span>
</div>

</div>`

return newDiv;
}