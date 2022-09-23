const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-card');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

/* Funciones para abrir y cerrar los menus deplegables */

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleAsideCar);

function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    } 

    desktopMenu.classList.toggle('inactive');

    }

function toggleMobileMenu () {

    /* cierra el carrito de compras cuando abro el menu */
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    /* Me abre y cierra el menu */
    mobileMenu.classList.toggle('inactive');

}

function toggleAsideCar () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');    
}
//_________________________________________________________

/* Array de los productos que tenemos en la tienda*/
const productList = []
productList.push ({
    name: 'Reloj Escritorio',
    price: 120,
    image: 'https://i.postimg.cc/QMxh3Xvg/IMG-20201217-144234.jpg" alt="" class="product-img'
} ); 
productList.push ({
    name: 'Reloj personalizado',
    price: 120,
    image: 'https://i.postimg.cc/FKFnR1rR/IMG-20201106-WA0006.jpg" alt="" class="product-img'
} ); 
productList.push ({
    name: 'Reloj dos gatos',
    price: 120,
    image: 'https://i.postimg.cc/tgrvVyJz/IMG-20201125-142706.jpg" alt="" class="product-img'
} ); 
productList.push ({
    name: 'Reloj Black & White',
    price: 120,
    image: 'https://i.postimg.cc/zB6d0jnb/IMG-20201217-144151.jpg" alt="" class="product-img'
} ); 


//Creamos esta funcion para que podamos reutilizar el codigo que creamos para crear el card de producto

function renderProducts(arr) {

 /* Maquetamos el card de los productos tomando como base el codigo HTML original */

    for (product of arr) {

        // document.createElemente nos permite crear cada etiqueta de HTML de los productos en js
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // Product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' );
    
        // appendChild le dice que productImgCart es hijo de productImgCart
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        // Con Element.append() podemos agregar varios nodos y texto
        
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

// Llamamos la función
renderProducts(productList);


