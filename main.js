async function getProducts(){
   const response = await fetch("https://dummyjson.com/products");
   const data = await response.json();
   const products = data.products;
   console.log(products);


   const result = products.map(function(product){
      return `
      <div class="card">
      <div class="image">
      <img src=${product.thumbnail} />
      </div>
      <h2>${product.title}</h2>
      <a href=# >price = ${product.price}$</a> 
      <br/>
      <span> category : ${product.category}</span>
      </div>
      
      `

   }).join("");
   document.querySelector(".product").innerHTML = result;
}

getProducts();



