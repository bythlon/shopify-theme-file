
var swiper = new Swiper(".articleSlider", {
  slidesPerView: "auto",
  // slidesPerView: 3,
  // spaceBetween: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//swiper js implementation code here
let sliderOne = new Swiper(".deatailImagCarousel", {
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  // ,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // }
});
let sliderTwo = new Swiper(".deatailCarousel", {
  loop: false,
  slidesPerView: 1,
  grabCursor: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1
    },
    // when window width is >= 640px
    750: {
      slidesPerView: 1
    }
  }
});

sliderOne.controller.control = sliderTwo;
sliderTwo.controller.control = sliderOne;

var reviewCarousel = new Swiper(".reviewCarousel", {
  // slidesPerView: "auto",
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 24,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2
    },
    // when window width is >= 640px
    750: {
      slidesPerView: 3,
      spaceBetween: 54,
    }
  }
});




// Custom Marquee Section 

function Marquee(selector, speed) {

  // Get all elements with the marquee class
  const marquees = document.querySelectorAll(selector);

  // Loop through each one
  marquees.forEach(marquee => {

    const clone = marquee.innerHTML;

    const firstElement = marquee.children[0];
        
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);

    let i = 0;
        
    setInterval(function() {

      firstElement.style.marginLeft = `-${i}px`;

      if (i > firstElement.clientWidth) {
        i = 0; 
      }
        
      i = i + speed;
        
    }, 0);

  });

}

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
window.addEventListener('load', () => {
  Marquee('.marquee', 0.2); 
});



document.addEventListener('DOMContentLoaded', function () {
  const videoPopupBtn = document.querySelector('.video-popup-btn');
  const videoPopup = document.querySelector('.video-popup');
if(videoPopup && videoPopupBtn){
  // Add click event listener to the video-popup-btn
  videoPopupBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    videoPopup.classList.toggle('active'); // Toggle the "active" class
});

// Add click event listener to the document to close the popup when clicking outside
document.addEventListener('click', function (event) {
    if (!videoPopup.contains(event.target) && event.target !== videoPopup) {
        videoPopup.classList.remove('active');
    }
});

// Prevent clicks inside the video popup from closing it
videoPopup.addEventListener('click', function (event) {
    event.stopPropagation();
});
}

});


  const closedElements = document.querySelectorAll('.tool-svg-wrap .closed');
  if(closedElements){
    closedElements.forEach((closedElement) => {
      closedElement.addEventListener('mouseenter', () => {
        const tooltipElement = closedElement.closest('.tooltip');
        if (tooltipElement) {
          tooltipElement.classList.add('active');
        }
      });
  
      closedElement.addEventListener('mouseleave', () => {
        const tooltipElement = closedElement.closest('.tooltip');
        if (tooltipElement) {
          tooltipElement.classList.remove('active');
        }
      });
    });
  }


