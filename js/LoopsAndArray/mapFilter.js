// alert("hellow world")

const products = [
  { name: "product 1", price: 1000, inStock: true },
  { name: "product 2", price: 4000, inStock: true },
  { name: "product 3", price: 10000, inStock: false },
];

// 1. Use filter to get only the products that are inStock.
const instock = products.filter(function(product, index){
    console.log(index, product.inStock)
})

// 2.Use map to get an array of just the product names.
const names = products.map(function(product, index){
    console.log(index, product.name)
})

// 3.Use forEach to log each product like: product 1 - $1000 (In Stock).
products.forEach(function(product, index){
    console.log(product.name, " - ", '$',product.price, '(In Stock)')
})

// 4.Use filter to get products priced above 2000.
const priceProduct = products.filter(
    function(product, index){
        if(product.price > 2000){
            console.log(index, product.price)
        }
    }
)

// 5.Use map to get an array of booleans representing whether each product is over $5000.
