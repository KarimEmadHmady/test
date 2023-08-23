

// Get all color squares
const colorSquares = document.querySelectorAll('.content-color .a-1');

// Get the "concat" element
const concatElement = document.getElementById('concat');

// Get the "img-2" element
const imgElement = document.querySelector('.img-2');

// Function to change the background gradient
function changeBackground(color) {
    concatElement.style.background = ` ${color}`;
}

// Function to show the img and change background
function showImageAndChangeBackground(color) {
    imgElement.style.display = 'block'; // Show the img
    changeBackground(color);

    setTimeout(() => {
        imgElement.style.display = 'none'; // Hide the img after a delay
    }, 4000); // Adjust the duration as needed (in milliseconds)
}

// Add click event listeners to each color square
colorSquares.forEach(square => {
    square.addEventListener('click', () => {
        const bgColor = square.getAttribute('data-color');
        showImageAndChangeBackground(bgColor);
    });
});


