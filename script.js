let productTitle = document.getElementById('product-title');
let productDescription = document.getElementById('product-description');
let productImage1 = document.getElementById('product-image-1');
let productImage2 = document.getElementById('product-image-2');
let container = document.querySelector('.container');
let icons = document.querySelectorAll('.icons img');

let clickIndex = 0;

function updateProduct(title, description, imageSrc, color) {
    productTitle.textContent = title;
    productDescription.textContent = description;
    productImage1.classList.add('product-image'); // Add the class for transition
    productImage2.classList.add('product-image'); // Add the class for transition
    container.style.background = color;
    
    setTimeout(() => {
        productImage1.src = imageSrc;
        // productImage2.src = imageSrc;
        container.style.background = color;
    }, 500);
}


function updateProduct(title, description, imageSrc, color) {
    productTitle.textContent = title;
    productDescription.textContent = description;
    productImage1.classList.add('product-image'); // Add the class for transition
    productImage2.classList.add('product-image'); // Add the class for transition
    container.style.background = color;
    
    setTimeout(() => {
        productImage1.src = imageSrc;
        // productImage2.src = imageSrc;
        container.style.background = color;

        // Remove the .product-image class after a short delay
        setTimeout(() => {
            productImage1.classList.remove('product-image');
            productImage2.classList.remove('product-image');
        }, 100); // Adjust the delay as needed
    }, 500); 
}

function clickNextImage() {
    if (clickIndex < icons.length) {
        icons[clickIndex].click();
        clickIndex += 1;
    } else {
        clickIndex = 0;
    }
}

// Set an interval to simulate clicks on every image
let interval = setInterval(clickNextImage, 4000); // 2000 milliseconds = 2 seconds













