let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');
let cart = document.querySelector('#cart-btn');

let carts_item = document.querySelector('.cart-items-container');
let search = document.querySelector('#search-btn');
let search_form = document.querySelector('.search-form');


menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
    search_form.classList.remove('zoom');
    carts_item.classList.remove('open');
});

cart.addEventListener('click', () => {
    carts_item.classList.toggle('open');
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
    search_form.classList.remove('zoom');
});

search.addEventListener('click', () => {
    search_form.classList.toggle('zoom');
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
    carts_item.classList.remove('open');
});

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
    carts_item.classList.remove('open');
};