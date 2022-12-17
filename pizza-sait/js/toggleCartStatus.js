//COMPLETED



function toggleCartStatus(){

const orderForm = document.querySelector('#order-form')
const dataCartEmpty = document.querySelector('[data-cart-empty]')
const cartWrapper = document.querySelector('.cart-wrapper')

if (cartWrapper.children.length > 0) {
    orderForm.classList.remove('none');
    dataCartEmpty.classList.add('none');
}
else {
    orderForm.classList.add('none');
    dataCartEmpty.classList.remove('none');
}
}

