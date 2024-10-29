// Function to display the selected image
document.getElementById('image-input').addEventListener('change', function () {
    const imageContainer = document.getElementById('image-container');
    const uploadedImage = document.getElementById('uploaded-image');
    const file = this.files[0];
    console.log(file);
    if (file) {
        const reader = new FileReader();
        console.log(reader);
        console.log(reader);
        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            imageContainer.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        imageContainer.style.display = 'none';
    }
});

// Function to resize the image to specific dimensions when a button is clicked
document.getElementById('resize-button-instagram').addEventListener('click', function () {
    resizeImage(180, 180);
});

document.getElementById('resize-button-facebook').addEventListener('click', function () {
    resizeImage(120, 60);
});

document.getElementById('resize-button-twitter').addEventListener('click', function () {
    resizeImage(100, 67);
});

document.getElementById('resize-button-website').addEventListener('click', function () {
    resizeImage(60, 30);
});

// Function to resize the image
function resizeImage(width, height) {
    const uploadedImage = document.getElementById('uploaded-image');

    // Set the width and height of the image
    uploadedImage.width = width;
    uploadedImage.height = height;
}