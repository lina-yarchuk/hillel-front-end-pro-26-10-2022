export default class Templates {
    #items = {};

    constructor() {
        this.#getTemplates();
    }

    #getTemplates() {
        const templatesList = document.querySelectorAll('template');

        templatesList.forEach(template => {
            this.#items[template.dataset['name']] = template.content.cloneNode(true);
        });
    }

    #getImage(src, alt) {
        const fragment = this.#items['productImage'].cloneNode(true);
        const img = fragment.querySelector('img');

        img.src = src;
        img.alt = alt;

        return fragment;
    }

    getProductContent(product) {
        const fragment = this.#items['productCard'].cloneNode(true);
        const card = fragment.querySelector('.card');
        const img = fragment.querySelector('.main-image');
        const h2 = fragment.querySelector('h2');
        const price = fragment.querySelector('.price');
        const button = fragment.querySelector('button');

        const [ mainImageSrc ] = product.images;

        card.dataset['productId'] = product.id;

        img.append(this.#getImage(mainImageSrc, product.title))

        h2.textContent = product.title;
        price.textContent = `$${product.price}`;
        button.dataset['productId'] = product.id;

        return fragment;
    }

    getDetailsArea({ title, editFn, closeFn, content }) {
        const fragment = this.#items['detailsArea'].cloneNode(true);
        const h2 = fragment.querySelector('h2');
        const edit = fragment.querySelector('.edit-btn');
        const close = fragment.querySelector('.close-btn');
        const contentElement = fragment.querySelector('.content');

        h2.textContent = title;
        contentElement.append(content);

        if (editFn) {
            edit.addEventListener('click', editFn);
        } else {
            edit.remove();
        }

        close.addEventListener('click', closeFn);

        return fragment;
    }

    getProductDetails(product) {
        const fragment = this.#items['productDetails'].cloneNode(true);
        const gallery = fragment.querySelector('.gallery');
        const h3 = fragment.querySelector('h3');
        const price = fragment.querySelector('.price');
        const description = fragment.querySelector('.description');
        const button = fragment.querySelector('button');

        product.images.forEach(imageSrc => {
            gallery.append(this.#getImage(imageSrc, product.title))
        });

        h3.textContent = product.category.name;
        price.textContent = `$${product.price}`;
        description.textContent = product.description;
        button.dataset['productId'] = product.id;

        return fragment;
    }

    getProductForm(product, submit, submitFn) {
        const { id: productId } = product;
        const { id: categoryId } = product.category;

        const fragment = this.#items['productForm'].cloneNode(true);
        const form = fragment.querySelector('form');
        const titleInput = fragment.querySelector('input[name="title"]');
        const priceInput = fragment.querySelector('input[name="price"]');
        const descriptionInput = fragment.querySelector('textarea[name="description"]');
        const imagesInput = fragment.querySelector('input[name="images"]');
        const submitBtn = fragment.querySelector('button[type="submit"]');

        titleInput.value = product.title;
        priceInput.value = product.price;
        descriptionInput.value = product.description;
        imagesInput.value = product.images;
        submitBtn.textContent = submit;

        form.addEventListener('submit', event => {
            const formData = Object.fromEntries(new FormData(form));
            const data = { categoryId, ...formData };

            submitFn(event, data, productId);
        });

        return fragment;
    }
}