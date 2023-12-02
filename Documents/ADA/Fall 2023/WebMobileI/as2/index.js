fetch("https://dummyjson.com/products")
    .then(res => {
    return res.json();
    })
    //.then(data => console.log(data.products))
    .then(data=> {
        data.products.forEach(products => {
            const markup = 
            `<tr onclick="window.open('info.html', '_blank')">

            <td><img src = '${products.images[0]}' alt='Image is currently unavailable'></td>
            <td>${products.title}</td>
            <td>${products.price}$</td>
            <td>${products.discountPercentage}%</td>
            <td>${products.stock}</td>
            <td>${products.category}</td>

            </tr>`;

            document.querySelector('#data').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));



