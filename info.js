let id_location = window.location.href;
let id = id_location.substring(id_location.indexOf("=")+1, id_location.length);
//console.log(id);

link=`https://dummyjson.com/product/${id}`

fetch(link)
    .then(res => res.json())

    .then(data => {
            const markup = 
            `<div id="info",'_blank'>

            <p id="thumbnail"><img src = '${data.thumbnail}' alt='Image is currently unavailable'></p>
            <p id="title">${data.title}</p>
            <p id="price">${data.price}$</p>
            <p id="discount">${data.discountPercentage}%</p>
            <p id="stock">${data.stock}</p>
            <p id="category">${data.category}</p>



            </div>`;

            document.querySelector('#info').insertAdjacentHTML('beforeend', markup);

        })
.catch(error => console.log(error));
