import urls from './urls.js';
import Templates from './templates.js';

export default class Products {
    static formatPayloadBody(data) {
        return JSON.stringify({ ...data, price: Number(data.price), images: data.images.split(',') });
    }

    products = null;

    #templates = null;
    #productsContainer = document.querySelector('.products');
    #productDetailsContainer = document.querySelector('.product-details');
    #addProductBtn = document.querySelector('.add-product-btn');

    constructor() {
        this.#templates = new Templates();

        this.#getProducts();
    }

    #bindEvents() {
        this.#productsContainer.addEventListener('click', this.#productClick.bind(this));
        this.#addProductBtn.addEventListener('click', this.renderProductAdd.bind(this));
    }

    #productClick(event) {
        const { target } = event;
        const product = target.closest('.product-card');
        const {productId} = product.dataset;

        if (!productId) {
            return;
        }

        this.showProductDetails(productId);
    }

    async #getProducts() {
        const url = urls.productsPartial(12);

        this.products = await fetch(url).then(response => response.json());

        this.renderProducts();
        this.#bindEvents();
    }

    renderProducts() {
        this.#productsContainer.innerHTML = '';

        this.products.forEach(product => this.#productsContainer.append(this.#templates.getProductContent(product)));
    }

    showProductDetails(productId) {
        const targetProduct = this.products.find(product => product.id === Number(productId));

        if (!targetProduct) {
            return;
        }

        this.renderProductDetails(targetProduct);
    }

    renderProductDetails(product) {
        const title = product.title;
        const closeFn = this.hideProductDetails.bind(this);
        const editFn = this.renderProductEdit.bind(this, product);
        const content = this.#templates.getProductDetails(product);

        this.renderDetails({ title, editFn, closeFn, content });
    }

    renderProductAdd() {
        const product = {
            category: { id: 5 },
            title: '',
            price: '',
            description: '',
            images: ''
        }

        const title = 'New product';
        const closeFn = this.hideProductDetails.bind(this);
        const saveFn = this.#addProduct.bind(this);
        const content = this.#templates.getProductForm(product, 'Add', saveFn);

        this.renderDetails({ title, closeFn, content });
    }

    renderProductEdit(product) {
        const title = product.title;
        const closeFn = this.hideProductDetails.bind(this);
        const saveFn = this.#saveProduct.bind(this);
        const content = this.#templates.getProductForm(product, 'Save', saveFn);

        this.renderDetails({ title, closeFn, content });
    }

    renderDetails(data) {
        const detailsArea = this.#templates.getDetailsArea(data);

        this.#productDetailsContainer.innerHTML = '';
        this.#productDetailsContainer.append(detailsArea);

        document.body.classList.add('show-details');
    }

    hideProductDetails() {
        document.body.classList.remove('show-details');
    }

    async #addProduct(event, data) {
        event.preventDefault();

        const url = urls.products;
        const body = Products.formatPayloadBody(data);
        const payload = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body
        };
        const newProduct = await fetch(url, payload).then(response => response.json());

        this.#productsContainer.append(this.#templates.getProductContent(newProduct));
        this.renderProductDetails(newProduct);
    }

    async #saveProduct(event, data, productId) {
        event.preventDefault();

        const url = urls.product(productId);
        const body = Products.formatPayloadBody(data);
        const payload = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body
        };
        const updatedProduct = await fetch(url, payload).then(response => response.json());

        this.products = this.products.map(product => product.id === updatedProduct.id ? updatedProduct : product);

        this.renderProducts();
        this.hideProductDetails();
    }
}