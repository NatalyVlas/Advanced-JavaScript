const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        basketUrl: '/getBasket.json',
        products: [], // массив товаров каталога. заполняем методом getJson
        filtered: [], // массив товаров с учетов фильтра
        cartItems: [], // массив товаров корзины
        imgCatalog: 'https://via.placeholder.com/200x150',
        imgCart: 'https://via.placeholder.com/50x100',
        userSearch: '', // связан с инпутом
        show: false // корзина покупок по умолч скрыта
    }, // после date всегда разбираем mounted
    methods: {
        getJson(url) {
            return fetch(url) // коннектим к ресурсу с кат товаров
                .then(result => result.json()) // исходник преобразуем в массив объектов и вернем промис
                .catch(error => console.log(error))
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            console.log(this.filtered);
        },
        addProduct(product) {
            console.log(product.id_product);
        }
    },

    mounted() {
        this.getJson(`${API + this.catalogUrl}`) // массив объектов
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`${API + this.basketUrl}`) // объект
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
});
