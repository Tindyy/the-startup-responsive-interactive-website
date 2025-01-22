  // Select all the thumbnail images
  const thumbnail = document.querySelectorAll('.gallery img.thumbnail');

  // Select the main image
  const mainImage = document.getElementById('main-image');

  // Add a click event listener to each thumbnail
  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function () {
          // Update the `src` of the main image with the `data-src` of the clicked thumbnail
          const newSrc = thumbnail.getAttribute('data-src');
          mainImage.setAttribute('src', newSrc);

          // Optionally, you can add a small animation effect
          mainImage.classList.add('fade-in');
          setTimeout(() => {
              mainImage.classList.remove('fade-in');
          }, 300);
      });
  });



// Select the thumbnail container and buttons
const thumbnailContainer = document.querySelector('.thumbnail-container');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');

// Scroll left when the left button is clicked
leftButton.addEventListener('click', () => {
  thumbnailContainer.scrollBy({
      left: -200, // Adjust scroll distance (negative for left)
      behavior: 'smooth',
  });
});

// Scroll right when the right button is clicked
rightButton.addEventListener('click', () => {
  thumbnailContainer.scrollBy({
      left: 200, // Adjust scroll distance (positive for right)
      behavior: 'smooth',
  });
});

const thumbnails = document.querySelectorAll('.thumbnail-container img');
thumbnails.forEach((thumbnail, index) => {
  if (index >= 4) {
    thumbnail.style.display = 'none';
  }
});

