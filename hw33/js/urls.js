const domain = 'https://api.escuelajs.co/';

export default {
    products: `${domain}api/v1/products`,
    product: id => `${domain}api/v1/products/${id}`,
    productsPartial: (limit = 10, offset = 0) => `${domain}api/v1/products?limit=${limit}&offset=${offset}`
}