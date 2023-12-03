fetch("https://dummyjson.com/products")
    .then(res => {
    return res.json();
    })
    //.then(data => console.log(data.products))
    .then(data=> {
        data.products.forEach(products => {
     
            a = products.price;
            b = products.discountPercentage;
            const markup = 
            `<div id="product" class="${products.category}" onclick=window.open('info.html?id=${products.id}'),'_blank'>

            <p id="thumbnail"><img src = '${products.thumbnail}' alt='Image of ${products.title}'></p>
            <p id="title">${products.title}</p>
            <p id="price">${products.price}$</p>
            <p id="discount">${Mult(a,b)}$</p>
            <p id="stock">${products.stock} left in stock</p>
            <p id="category" class="${products.category}">Category: ${products.category}</p>

            </div>`;

            document.querySelector('#info').insertAdjacentHTML('beforeend', markup);

        });
    })
.catch(error => console.log(error));

//Find discounted price
const Mult = (a,b) => {
    b = (100-b)/100;
    return (a*b).toFixed(2);
}

const Filter = (cat) => {

    let obj = document.querySelectorAll("#product")
    if(cat != 'all') {

    obj.forEach(hide => {
                
        if(hide.className != cat) {hide.style.display="none";}
        else hide.style.display="inline-block";
        }
    )
}    
    else {

        obj.forEach(show => {
                show.style.display="inline-block";
            }
        )
    }
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("info");
    li = ul.getElementsByTagName('p');
  
    // Loop through all list items, and hide those who don't match the search query
    let obj = document.querySelectorAll("#product")
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
