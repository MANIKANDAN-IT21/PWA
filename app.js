const container = document.querySelector(".container");
const coffees = [
  { name: "Perspiciatis", image: "images/coffe.jpg" },
  { name: "Voluptatem", image: "images/coffe.jpg" },
  { name: "Explicabo", image: "images/coffe.jpg" },
  { name: "Rchitecto", image: "images/coffe.jpg" },
  { name: " Beatae", image: "images/coffe.jpg" },
  { name: " Vitae", image: "images/coffe.jpg" },
  { name: "Inventore", image: "images/coffe.jpg" },
  { name: "Veritatis", image: "images/coffe.jpg" },
  { name: "Accusantium", image: "images/coffe.jpg" },
];
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)