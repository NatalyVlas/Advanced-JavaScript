const goods = [
    { title: 'Shirt', price: 150, img: 1 },
    { title: 'Socks', price: 50, img: 2 },
    { title: 'Jacket', price: 350, img: 3 },
    { title: 'Shoes', price: 250, img: 4 },
];

const renderGoodsItem = (prod) => {
    return `<div class="goods-item">
                <img class="goods-img" src="img/${prod.img}.jpg" alt="photo">
                <h3 class="goods-title">${prod.title}</h3>
                <p class="goods-price">${prod.price}</p>
                <button class="goods-button">Купить</button>
            </div>`
};

const renderGoodsList = list => {
    document.querySelector('.goods-list').innerHTML = list.map(item =>
        renderGoodsItem(item)).join('');
}

renderGoodsList(goods);
