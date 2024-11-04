// Toggle class active for bars
const navbarNav = document.querySelector(".navbar-nav");
console.log(navbarNav)

// When clicked
document.querySelector("#grocery-products").onclick = () => {
    navbarNav.classList.toggle("active");
};

// Toggle class active for search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active for shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// When click outside feature
const bars = document.querySelector('#grocery-products');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!bars.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

document.querySelectorAll('.category-link').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');

        // Update active class on links
        document.querySelectorAll('.category-link').forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');

        // Filter products
        document.querySelectorAll('.products-card').forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            } else {
            card.style.display = 'none';
            }
        }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const quickViewButtons = document.querySelectorAll('.view-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', () => {
          const modalId = button.getAttribute('data-modal');
          const modal = document.getElementById(modalId);
          modal.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
          const modal = button.closest('.modal');
          modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
          event.target.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonialsCards = document.querySelector(".testimonials-cards");
    const dots = document.querySelectorAll(".dot");
    const testimonyCard = document.querySelector(".testimony-card");
    let currentIndex = 0;
    const totalCards = dots.length;

    function updateSlide(index) {
      const cardWidth = testimonyCard.offsetWidth + 30;
      testimonialsCards.style.transform = `translateX(-${index * cardWidth}px)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalCards;
      updateSlide(currentIndex);
    }

    let slideInterval = setInterval(nextSlide, 3000);

    dots.forEach(dot => {
      dot.addEventListener("click", function () {
          clearInterval(slideInterval);
          currentIndex = parseInt(dot.getAttribute("data-index"));
          updateSlide(currentIndex);
          slideInterval = setInterval(nextSlide, 3000);
      });
    });

    document.querySelector(".prev-btn").addEventListener("click", function () {
      clearInterval(slideInterval);
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateSlide(currentIndex);
      slideInterval = setInterval(nextSlide, 3000);
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
      clearInterval(slideInterval);
      nextSlide();
      slideInterval = setInterval(nextSlide, 3000);
    });
});