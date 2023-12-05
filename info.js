let id_location = window.location.href;
let id = id_location.substring(id_location.indexOf("=")+1, id_location.length);

link=`https://dummyjson.com/product/${id}`

fetch(link)
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => {
            a = data.price;
            b = data.discountPercentage;
            const profile = 
            `
            <p id="thumbnail"><img class="thumbnail" src = '${data.thumbnail}' alt='Image is currently unavailable'></p>

            <div id="item-details">

                <p id="title">${data.title}</p>
                <p id="price">${data.price}$</p>
                <p id="discount">${Mult(a,b)}$</p>
                <p id="rating">Rating: ${data.rating}<img id="star" src="https://cdn-icons-png.flaticon.com/512/118/118669.png"></p>
                <p id="stock">${data.stock} left in stock</p>
                <p id="category">Category: ${data.category}</p>
                <p id="brand">Brand: ${data.brand}</p>
                
            </div>

            <p id="description">About this item: <br>${data.description}</p>`;
            
            let i = 0;
            data.images.forEach(images => {
                const photo = `<div id="gallery"><img class="gallery-image" src = '${data.images[i]}' alt='Image of ${data.title}'></p></div>`;
                document.querySelector('#images').insertAdjacentHTML('beforeend', photo);
                i++;
            })

            document.querySelector('#info').insertAdjacentHTML('beforeend', profile);


        })
.catch(error => console.log(error));

//Find discounted price

const Mult = (a,b) => {
    b = (100-b)/100;
    return (a*b).toFixed(2);
}