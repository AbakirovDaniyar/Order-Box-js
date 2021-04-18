let menu_list = document.getElementById('menu-list')
let orders_list = document.getElementById('orders-list')
let sum = document.getElementById('sum')
let items_count = document.getElementById('items-count')
// date - дата, убакыт
// data - Данные, маалымат
const renderMenuItem = (product) => {
    return `
        <div class="food-card" data-product='${JSON.stringify(product)}' onclick="onClickCard(event)">
            <img class="food-img" src="${product.img}" alt="">
            <div>
                <div>${product.title}</div>
                <div>${product.price} som</div>
            </div>
        </div>
    `
}
const renderOrderItem = (orderItem) => {
    return `
        <li class="order-item">
            <div>count:${orderItem.title}</div>
            <span>price:${orderItem.count}</span>
            <span>${orderItem.price}</span>
            <span>X</span>
        </li>
    `
}
// "''"
// '""'
// ""{name: 'blalala'}""
const renderOrders = (list) => {
    let items = []
    list.map((item, index) => {
        items.push(renderOrderItem(item))
    })
    orders_list.innerHTML = items.join('')
}
const renderMenuList = (list) => {
    let items = []
    list.map((item, index) => {
        items.push(renderMenuItem(item))
    })
    menu_list.innerHTML = items.join('')
}
const onClickCard = (event) => {
    // console.log(event.target)
    let card = JSON.parse(event.currentTarget.dataset.product)
    let currentIndex = orders_basket.findIndex(el => el.id == card.id)
    // findIndex - 0, 1, 2 ...
    // findIndex = -1, 
    // indefOF = -1
    if (currentIndex == -1) {
        orders_basket.push({
            ...card,
            count: 1
        })
    } else {
        orders_basket[currentIndex].count++
        orders_basket[currentIndex].price += card.price
    }
    solveSum()
    renderOrders(orders_basket)
}
const onDelete = () => {
}
const solveSum = () => {
    sum = orders_basket.reduce((el, {price}) => el + price, 0)
    console.log(sum)
}
const getCount = () => {
}
renderMenuList(menu_items)