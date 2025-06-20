//function fetched all products from DummyJSON
export async function getAllProducts() {
    const response = await fetch('https://dummyjson.com/products?limit=200');
    const data = await response.json();

    //data.products will return array of product objects
    return data.products;
}