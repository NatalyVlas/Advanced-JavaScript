"use strict";

// const goods = [
//     { title: 'Shirt', price: 150, img: 1 },
//     { title: 'Socks', price: 50, img: 2 },
//     { title: 'Jacket', price: 350, img: 3 },
//     { title: 'Shoes', price: 250, img: 4 },
// ];

// const renderGoodsItem = (prod) => {
//     return `<div class="goods-item">
//                 <img class="goods-img" src="img/${prod.img}.jpg" alt="photo">
//                 <h3 class="goods-title">${prod.title}</h3>
//                 <p class="goods-price">${prod.price}</p>
//                 <button class="goods-button">Купить</button>
//             </div>`
// };

// const renderGoodsList = list => {
//     document.querySelector('.goods-list').innerHTML = list.map(item =>
//         renderGoodsItem(item)).join('');
// }

// renderGoodsList(goods);

class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
    }

    render() {
        return `<div class="goods-item">
                    <img class="goods-img" src="img/${this.img}.jpg" alt="photo">
                    <h3 class="goods-title">${this.title}</h3>
                    <p class="goods-price">${this.price}</p>
                    <button class="goods-button">Купить</button>
                </div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, img: 1 },
            { title: 'Socks', price: 50, img: 2 },
            { title: 'Jacket', price: 350, img: 3 },
            { title: 'Shoes', price: 250, img: 4 },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    sum() {
        let totalPrice = 0;
        this.goods.forEach(good => totalPrice += good.price);
        return totalPrice;
    }
}

class Basket {
    addGood() { } // добавить товар в корзину

    deleteGood() { } // удалить товар из корзины

    changeGood() { } // изменить товар в корзине

    render() { } // вывести готовый список товаров

}

class BasketItem {
    render() { } // нужно сформировать какой-то элемент, который будет дальше 
    // использоваться в классе Basket
}


const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.sum());
