
// swiper

let currentSlide = 0;
const slider = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slider-item').length;
const currentPageDisplay = document.getElementById('currentPage');
const pageInput = document.getElementById('pageInput');

function updatePageNumber() {
    currentPageDisplay.textContent = currentSlide + 1;
    pageInput.value = currentSlide + 1;

    // const image = document.querySelector('.right-side-image-container img');

    // if (currentSlide + 1 == 2) {
    //     // Remove class to reset animation
    //     image.classList.remove('animate-slide-right');

    //     // Add a short delay before re-adding the class
    //     setTimeout(() => {
    //         image.classList.add('animate-slide-right');
    //     }, 50);
    // }

    if (currentSlide + 1 === 3) {
        startThirdPageAnmation();
    }else if(currentSlide + 1 === 29){
        startThirdPageAnmations();
    }if (currentSlide + 1 === 42) {
        startThirdPageAnmations1();
    }else if(currentSlide + 1 === 43){
        startThirdPageAnmations2();
    }

}


function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    if (currentSlide == 1) {
        let images = document.querySelectorAll(".right_left img, .right_right img");

    setTimeout(() => {
        images.forEach((img) => {
            img.classList.add("animate");
        });
    }, 100);
   
    
    }

  

    $(".nav-links a").css("color", "black");
if(currentSlide >= 0 && currentSlide <=2){
    $('.homeIntent').css("color", "red");
}else if(currentSlide>=3 && currentSlide<=13){
    $('.groupOfCopmaniesIntent').css("color", "red");
}else if(currentSlide>=25 && currentSlide<=30){
    $('.pneumaticIntent').css("color", "red");
}else if(currentSlide>=31 && currentSlide<=56){
    $('.productIntent').css("color", "red");
}

    updatePageNumber();
}

document.getElementById('nextButton').addEventListener('click', () => {
    console.log(totalSlides)
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    
    updateSlider();
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlider();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        document.getElementById('nextButton').click();
    } else if (event.key === 'ArrowLeft') {
        document.getElementById('prevButton').click();
    }
});

pageInput.addEventListener('input', () => {
    let pageNumber = parseInt(pageInput.value, 10);

    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalSlides) {
        currentSlide = pageNumber - 1;
        updateSlider();
    } else {
        pageInput.value = currentSlide + 1;
    }
});
const swiper5 = new Swiper('.venting-swiper4', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      }
    // Removed autoplay
  });
  const swiper7 = new Swiper('.swiper-container7', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      }
  });
 

const swiper1 = new Swiper('.venting-swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });

  const swiper4 = new Swiper('.venting-swiper3', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      }
    // Removed autoplay
  });

  const swiper6 = new Swiper('.page55-swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      }
    // Removed autoplay
  });

  const swiper2 = new Swiper('.venting-swiper1', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      }
    // Removed autoplay
  });
  
        

  const swiper3 = new Swiper('.venting-swiper2', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      }
    // Removed autoplay
  });
  
        
const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',   
    loop: false,               
    slidesPerView: 1,         
    spaceBetween: 0,          
    // speed: 1000,             
    mousewheel: true,         
    autoplay: {
        delay: 2000,          
        disableOnInteraction: false, 
        pauseOnMouseEnter: false,     
    },
    pagination: {
        el: '.swiper-pagination',   
        clickable: true,             
    },
    slideToClickedSlide: true,   
    watchOverflow: true,           
    preloadImages: false,        
    speed: 1000,                   
});

const swipers = new Swiper('.swiper-container1', {
    direction: 'vertical',   
    loop: false,               
    slidesPerView: 1,         
    spaceBetween: 0,          
    // speed: 1000,             
    mousewheel: true,         
    autoplay: {
        delay: 2000,          
        disableOnInteraction: false, 
        pauseOnMouseEnter: false,     
    },
    pagination: {
        el: '.swiper-pagination',   
        clickable: true,             
    },
    slideToClickedSlide: true,   
    watchOverflow: true,           
    preloadImages: false,        
    speed: 1000,                   
});

const swiperSlide = document.querySelector('.swiper-slide');
const swiperContainer = document.querySelector('.swiper-container');
const paraSlide = document.querySelector('.paraSlide');

paraSlide.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();  // Stop autoplay on hover
});

paraSlide.addEventListener('mouseleave', () => {
  swiper.autoplay.start();  // Start autoplay when hover is removed
});


const paraSlide1 = document.querySelector('.para2');

paraSlide1.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();  // Stop autoplay on hover
});
swiperSlide.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();  // Stop autoplay on hover
  });
paraSlide1.addEventListener('mouseleave', () => {
  swiper.autoplay.start();  // Start autoplay when hover is removed
});

const ventingSlide = document.querySelectorAll('.venting-images1');
ventingSlide.forEach(s => {
    s.addEventListener('mouseenter', () => {
        swiper2.autoplay.stop();  // Stop autoplay on hover
      });
})

ventingSlide.forEach(s => {
    s.addEventListener('mouseleave', () => {
        swiper2.autoplay.start();  // Stop autoplay on hover
      });
})

const page44Contents = document.querySelectorAll('.page44leftcon, .page44rightcon');
page44Contents.forEach(s => {
    s.addEventListener('mouseenter', () => {
    swiper5.autoplay.stop();  // Stop autoplay on hover
    });
})
page44Contents.forEach(s => {
    s.addEventListener('mouseleave', () => {
    swiper5.autoplay.start();  // Start autoplay when hover is removed
    });
})


const homeIntentButton = document.querySelectorAll('.homeIntent');
const groupOfCopmaniesIntentButton = document.querySelectorAll('.groupOfCopmaniesIntent');
const pneumaticIntentButton = document.querySelectorAll('.pneumaticIntent');
const productIntentButton = document.querySelectorAll('.productIntent');

homeIntentButton.forEach(button => {
    button.addEventListener("click", function() {
        pageInput.value = 1;
        triggerPageChange();
    });
})

groupOfCopmaniesIntentButton.forEach(button => {
    button.addEventListener("click", function() {
        pageInput.value = 4;
        triggerPageChange();
    });
})

pneumaticIntentButton.forEach(button => {
    button.addEventListener("click", function() {
        pageInput.value = 26;
        triggerPageChange();
    });
})

productIntentButton.forEach(button => {
    button.addEventListener("click", function() {
        pageInput.value = 32;
        triggerPageChange();
    });
})

function triggerPageChange() {
    pageInput.dispatchEvent(new Event('input'));
}
// var swiper2 = new Swiper(".swiper2", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 2,
//       slideShadows: true
//     },
//     keyboard: {
//       enabled: true
//     },
//     mousewheel: {
//       thresholdDelta: 70
//     },
//     spaceBetween: 60,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination2",
//       clickable: true
//     }
//   });
  


const titleElement = document.getElementById('firstAnimationText');


const texts = [
    "Skill <br>Development <br>Guide",
    "Knowledge <br>empowers <br>your journey",
    "Solution Provider <br> for bulk solids <br> handling"
];

let index = 0; 

// Function to update text
function updateText() {
    titleElement.innerHTML = texts[index]; 
    index = (index + 1) % texts.length;
}

setInterval(updateText, 4900);

updateText();



function startThirdPageAnmation() {
    swiper.slideTo(0);  // Navigate to the first slide
    swiper.autoplay.start(); 
}

function startThirdPageAnmations() {
    swipers.slideTo(0);  // Navigate to the first slide
    swipers.autoplay.start(); 
}
function startThirdPageAnmations1() {
    swiper1.slideTo(0);  // Navigate to the first slide
    swiper1.autoplay.start(); 
}
function startThirdPageAnmations2() {
    swiper2.slideTo(0);  // Navigate to the first slide
    swiper2.autoplay.start(); 
}

document.querySelectorAll('img').forEach(img => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  }, {
    threshold: 0 
  });

  observer.observe(img);
});


// Get all the elements that will be animated
// const roleElement = document.querySelector('.role1');
// const departmentsElement = document.querySelector('.departments1');
// const leftArrow = document.querySelector('.left-side-arrow');
// const rightArrow = document.querySelector('.right-side-arrow');

// // Function to start the role animation
// function startRoleAnimation() {
//   roleElement.classList.add('animate-role');
// }

// // Function to start the department line animation
// function startDepartmentLineAnimation() {
//   departmentsElement.classList.add('animate-department');
// }

// // Function to start the departments line animation for each department
// function startDepartmentsLineAnimation() {
//   leftArrow.classList.add('animate-departments');
//   rightArrow.classList.add('animate-departments');
// }

// // Function to reset all animations immediately
// function resetAnimations() {
//     leftArrow.classList.remove('animate-departments');
//     rightArrow.classList.remove('animate-departments');
//     setTimeout(() => {
//         roleElement.classList.remove('animate-role');
//         departmentsElement.classList.remove('animate-department');
//     }, 500);
// }

// // Function to run all animations in sequence
// function runAnimations() {
//   // Reset animations before starting (ensure everything starts clean)
//   resetAnimations();

//   // Start the sequence of animations
//   setTimeout(() => {
//       startRoleAnimation();
//   }, 500);

//   // After role animation ends, start the department line animation
//   roleElement.addEventListener('animationend', function() {
//     startDepartmentLineAnimation();
//   });

//   // After department animation ends, start the department arrows animation
//   departmentsElement.addEventListener('animationend', function() {
//     startDepartmentsLineAnimation();
//   });

//   // After department arrows animation ends, reset and start again
//   leftArrow.addEventListener('animationend', function() {
//     // Reset everything immediately and start the cycle after a slight delay
//     resetAnimations();
//     setTimeout(runAnimations, 500); // Delay before restarting the animations
//   });
// }

// // Start the infinite loop of animations
// runAnimations();



// page 15

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

// Declare the unAcceptClick variable
let unAcceppClick;

// Function to handle the slider movement
// const showSlider = (type) => {
//     nextButton.style.pointerEvents = 'none';
//     prevButton.style.pointerEvents = 'none';

//     carousel.classList.remove('next', 'prev');
//     let items = document.querySelectorAll('.carousel .list .item');
//     if(type === 'next'){
//         listHTML.appendChild(items[0]);
//         carousel.classList.add('next');
//     }else{
//         listHTML.prepend(items[items.length - 1]);
//         carousel.classList.add('prev');
//     }
    
//     // Disable button click for 2 seconds
//     clearTimeout(unAcceppClick);
//     unAcceppClick = setTimeout(() => {
//         nextButton.style.pointerEvents = 'auto';
//         prevButton.style.pointerEvents = 'auto';
//     }, 2000);
// }

// Manual Next/Previous buttons functionality
// nextButton.onclick = function(){
//     showSlider('next');
// }
// prevButton.onclick = function(){
//     showSlider('prev');
// }

// Handle See More button click
// seeMoreButtons.forEach((button) => {
//     button.onclick = function(){
//         carousel.classList.remove('next', 'prev');
//         carousel.classList.add('showDetail');
//     }
// });

// Handle Back button click
// backButton.onclick = function(){
//     carousel.classList.remove('showDetail');
// }

// Automatic carousel movement
// let autoSlideInterval = setInterval(() => {
//     showSlider('next');
// }, 3000); // 3000ms = 3 seconds for automatic slide transition



// page 4 text animtaion

window.addEventListener('load', () => {
  const headings = document.querySelectorAll('h1');
  headings.forEach(heading => {
      // Ensure the typing effect starts over on page load
      heading.style.animation = 'none'; // Reset the animation
      heading.offsetHeight; // Trigger a reflow (important to reset animation)
      heading.style.animation = ''; // Start the animation again
  });
});

// Optional: If you're using a carousel/slide and need to reset on slide change:
function resetTypingAnimation() {
  const headings = document.querySelectorAll('h1');
  headings.forEach(heading => {
      heading.style.animation = 'none'; // Reset the animation
      heading.offsetHeight; // Trigger reflow to reset the animation
      heading.style.animation = ''; // Restart animation
  });
}



// page 4 text animtaion

window.addEventListener('load', () => {
  const headings = document.querySelectorAll('h1');
  headings.forEach(heading => {
      // Ensure the typing effect starts over on page load
      heading.style.animation = 'none'; // Reset the animation
      heading.offsetHeight; // Trigger a reflow (important to reset animation)
      heading.style.animation = ''; // Start the animation again
  });
});

// Optional: If you're using a carousel/slide and need to reset on slide change:
function resetTypingAnimation() {
  const headings = document.querySelectorAll('h1');
  headings.forEach(heading => {
      heading.style.animation = 'none'; // Reset the animation
      heading.offsetHeight; // Trigger reflow to reset the animation
      heading.style.animation = ''; // Restart animation
  });
}

// page 5 text animation 


// const textWrappers = ['.ml3', '.ml4', '.ml5', '.ml6', '.ml7'];

// textWrappers.forEach((selector, index) => {
//   let textWrapperAll = document.querySelectorAll(selector);
//   textWrapperAll.forEach(textWrapper => {

//       textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
//       anime.timeline({ loop: true })
//         .add({
//           targets: `${selector} .letter`,
//           opacity: [0, 1],
//           easing: "easeInOutQuad",
//           duration: 2250,
//           delay: (el, i) => 150 * (i + 1)
//         })
//         .add({
//           targets: selector,
//           opacity: 0,
//           duration: 1000,
//           easing: "easeOutExpo",
//           delay: 1500
//         });
//   })
// });




  // page 1 text animation

//   window.addEventListener('load', function() {
//     setTimeout(function() {
//         document.querySelector('.leftheading2').classList.add('visible');
//     }, 2000); // 6000ms = 6s, after the first animation completes
// });



// page 21
let nextButton1 = document.getElementById('next1');
let prevButton1 = document.getElementById('prev1');
let carousel1 = document.querySelector('.carousel1');
let listHTML1 = document.querySelector('.carousel1 .list1');
let seeMoreButtons1 = document.querySelectorAll('.seeMore1');
let backButton1 = document.getElementById('back1');
let autoSlideDelay = 5000; // 3 seconds interval for automatic slide
nextButton1.onclick = function(){
    showSlider1('next1');
}
prevButton1.onclick = function(){
    showSlider1('prev1');
}

let unAcceppClick1;
const showSlider1 = (type) => {
    nextButton1.style.pointerEvents = 'none';
    prevButton1.style.pointerEvents = 'none';

    carousel1.classList.remove('next1', 'prev1');
    let items = document.querySelectorAll('.carousel1 .list1 .item1');
    if(type === 'next1'){
        listHTML1.appendChild(items[0]);
        carousel1.classList.add('next1');
    }else if (type === 'prev1'){
        listHTML1.prepend(items[items.length - 1]);
        carousel1.classList.add('prev1');
    }
    clearTimeout(unAcceppClick1);
    unAcceppClick1 = setTimeout(() => {
        nextButton1.style.pointerEvents = 'auto';
        prevButton1.style.pointerEvents = 'auto';
    }, 6000);
}

seeMoreButtons1.forEach((button) => {
    button.onclick = function(){
        carousel1.classList.remove('next1', 'prev1');
        carousel1.classList.add('showDetail1');
    }
});
backButton1.onclick = function(){
    carousel1.classList.remove('showDetail1');
}

// Interval for auto-sliding
let autoSlideInterval1 = setInterval(() => {
  showSlider1('next1');
}, autoSlideDelay); // 5000ms = 3 seconds for automatic slide transition

// Select all items in the carousel
let carouselItems = document.querySelectorAll('.carousel1 .list1');

// Function to stop auto-slide
const stopAutoSlide = () => {
    clearInterval(autoSlideInterval1);
};

// Function to restart auto-slide
const startAutoSlide = () => {
    clearInterval(autoSlideInterval1); // Ensure no duplicate intervals
    showSlider1('next1');
    autoSlideInterval1 = setInterval(() => {
        showSlider1('next1');
    }, autoSlideDelay);
};

// Add event listeners for each item
carouselItems.forEach((item) => {
    item.addEventListener('mouseenter', stopAutoSlide);
    item.addEventListener('mouseleave', startAutoSlide);
});


// page 22

let nextButton2 = document.getElementById('next2');
let prevButton2 = document.getElementById('prev2');
let carousel2 = document.querySelector('.carousel2');
let listHTML2 = document.querySelector('.carousel2 .list2');
let seeMoreButtons2 = document.querySelectorAll('.seeMore2');
let backButton2 = document.getElementById('back2');
let autoSlideDelay2 = 5000; // 3 seconds interval for automatic slide


nextButton2.onclick = function(){
    showSlider2('next2');
}
prevButton2.onclick = function(){
    showSlider2('prev2');
}
let unAcceppClick2;
const showSlider2 = (type) => {
    nextButton2.style.pointerEvents = 'none';
    prevButton2.style.pointerEvents = 'none';

    carousel2.classList.remove('next2', 'prev2');
    let items = document.querySelectorAll('.carousel2 .list2 .item2');
    if(type === 'next2'){
        listHTML2.appendChild(items[0]);
        carousel2.classList.add('next2');
    }else{
        listHTML2.prepend(items[items.length - 1]);
        carousel2.classList.add('prev2');
    }
    clearTimeout(unAcceppClick2);
    unAcceppClick2 = setTimeout(()=>{
        nextButton2.style.pointerEvents = 'auto';
        prevButton2.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons2.forEach((button) => {
    button.onclick = function(){
        carousel2.classList.remove('next2', 'prev2');
        carousel2.classList.add('showDetail2');
    }
});
backButton2.onclick = function(){
    carousel2.classList.remove('showDetail2');
}

let autoSlideInterval2 = setInterval(() => {
  showSlider2('next2');
}, autoSlideDelay); // 5000ms = 3 seconds for automatic slide transition

 

let carouselItems2 = document.querySelectorAll('.carousel2 .list2 ');

// Function to stop auto-slide
const stopAutoSlide2 = () => {
    clearInterval(autoSlideInterval2);
};

// Function to restart auto-slide
const startAutoSlide2 = () => {
    clearInterval(autoSlideInterval2); // Ensure no duplicate intervals
    showSlider2('next2');
    autoSlideInterval2 = setInterval(() => {
        showSlider2('next2');
    }, autoSlideDelay2);
};

// Add event listeners for each item
carouselItems2.forEach((item) => {
    item.addEventListener('mouseenter', stopAutoSlide2);
    item.addEventListener('mouseleave', startAutoSlide2);
});
/*--------------------------------------------------------------------------------------------------------*/

let newnextButton2 = document.getElementById('next3');
let newprevButton2 = document.getElementById('prev3');
let newcarousel2 = document.querySelector('.newcarousel');
let newlistHTML2 = document.querySelector('.newcarousel .list3');
let newseeMoreButtons2 = document.querySelectorAll('.seeMore2');
let newbackButton2 = document.getElementById('back2');
let newautoSlideDelay2 = 3000; 


newnextButton2.onclick = function(){
    newshowSlider2('next3');
}
newprevButton2.onclick = function(){
    newshowSlider2('prev3');
}
let newunAcceppClick2;
const newshowSlider2 = (type) => {
    newnextButton2.style.pointerEvents = 'none';
    newprevButton2.style.pointerEvents = 'none';

    newcarousel2.classList.remove('next3', 'prev3');
    let items = document.querySelectorAll('.newcarousel .list3 .item3');
    if(type === 'next3'){
        newlistHTML2.appendChild(items[0]);
        newcarousel2.classList.add('next3');
    }else{
        newlistHTML2.prepend(items[items.length - 1]);
        newcarousel2.classList.add('prev3');
    }
    clearTimeout(unAcceppClick2);
    newunAcceppClick2 = setTimeout(()=>{
        newnextButton2.style.pointerEvents = 'auto';
        newprevButton2.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons2.forEach((button) => {
    button.onclick = function(){
        newcarousel2.classList.remove('next3', 'prev3');
        newcarousel2.classList.add('showDetail2');
    }
});
newbackButton2.onclick = function(){
    newcarousel2.classList.remove('showDetail2');
}

let newautoSlideInterval2 = setInterval(() => {
  newshowSlider2('next3');
}, newautoSlideDelay2); // 5000ms = 3 seconds for automatic slide transition

 

let newcarouselItems2 = document.querySelectorAll('.newcarousel .list3 ');

// Function to stop auto-slide
const newstopAutoSlide2 = () => {
    clearInterval(newautoSlideInterval2);
};

// Function to restart auto-slide
const newstartAutoSlide2 = () => {
    clearInterval(newautoSlideInterval2); // Ensure no duplicate intervals
    newshowSlider2('next3');
    newautoSlideInterval2 = setInterval(() => {
        newshowSlider2('next3');
    }, newautoSlideDelay2);
};

// Add event listeners for each item
newcarouselItems2.forEach((item) => {
    item.addEventListener('mouseenter', newstopAutoSlide2);
    item.addEventListener('mouseleave', newstartAutoSlide2);
});


//  page 16 new 


document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("DOMContentLoaded", function () {
        const audio = document.getElementById("bg-audio");
        audio.volume = 0.2; // Set mild volume
        audio.play().catch(e => {
     
          document.addEventListener("click", () => {
            audio.play();
          }, { once: true });
        });
      });
    $('.homeIntent').css("color", "red");
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            $(".nav-links a").css("color", "black");
            if (this.classList.contains("homeIntent")) {
                $('.homeIntent').css("color", "red");
            }else if (this.classList.contains("groupOfCopmaniesIntent")) {
                $('.groupOfCopmaniesIntent').css("color", "red");
            }else if (this.classList.contains("pneumaticIntent")) {
                $('.pneumaticIntent').css("color", "red");
            }else if (this.classList.contains("productIntent")) {
                $('.productIntent').css("color", "red");
            }
        });
    });
    
  const carousels = document.querySelectorAll(".circle-carousel");

  carousels.forEach((carousel) => {

      const cards = carousel.querySelectorAll(".circle-carousel-card");
      const active = carousel.querySelector(".circle-carousel-card.active");
      const previous = carousel.querySelector(".circle-carousel-controls.previous");
      const next = carousel.querySelector(".circle-carousel-controls.next");
      var index = 0;

      if (cards.length > 0 && previous && next) {

          const forcedFormat = carousel.classList.contains("force-format-to-1by1");

          const set_left = () => {
              if (index == 0) {
                  cards[cards.length - 1].classList.add("left");
              } else {
                  cards[index - 1].classList.add("left");
              }
          }

          const set_right = () => {
              if (index == cards.length - 1) {
                  cards[0].classList.add("right");
              } else {
                  cards[index + 1].classList.add("right");
              }
          }

          const remove_animations = () => {
              cards.forEach((card) => {
                  card.classList.remove("to-front-right");
                  card.classList.remove("to-back-right");
                  card.classList.remove("to-front-left");
                  card.classList.remove("to-back-left");
              })
          }

          const set_active = (direction = null, outdatedIndex = null) => {
              if (cards.length > 2 && !forcedFormat) {
                  cards[index].classList.add("active");
              } else if (cards.length == 2 || forcedFormat) {
                  if (direction === "previous") {
                      remove_animations();
                      cards[index].classList.add("to-front-left");
                      cards[outdatedIndex].classList.add("to-back-right");
                  } else if (direction === "next") {
                      remove_animations();
                      cards[index].classList.add("to-front-right");
                      cards[outdatedIndex].classList.add("to-back-left");
                  } else {
                      remove_animations();
                      cards[index].classList.add("to-front-right");
                  }
              }
          }

          const handleAction = (action = "next") => {
              const outdatedIndex = index;

              if (action === "previous") {
                  if (index === 0) {
                      index = cards.length - 1;
                  } else {
                      index--;
                  }
              } else if (action === "next") {
                  if (index === cards.length - 1) {
                      index = 0;
                  } else {
                      index++;
                  }
              }

              if (cards.length > 2 && !forcedFormat) {
                  carousel.querySelector(".active").classList.remove("active")
                  set_active();
                  carousel.querySelector(".right").classList.remove("right")
                  carousel.querySelector(".left").classList.remove("left")
                  set_left();
                  set_right();
              } else if (cards.length === 2 || forcedFormat) {
                  set_active(action, outdatedIndex);
              }
          }

          // Initialisation
          if (active) {
              index = Array.prototype.indexOf.call(cards, active);
          } else {
              set_active();
          }

          if (cards.length > 2 && !forcedFormat) {
              if (!carousel.querySelector(".left")) {
                  set_left();
              }
              if (!carousel.querySelector(".right")) {
                  set_right();
              }
              cards.forEach((card) => {
                  card.classList.add("transition")
              })
          }

          previous.addEventListener("click", () => {
              handleAction("previous");
          })
          next.addEventListener("click", () => {
              handleAction("next");
          })

          setInterval(() => {
              handleAction("next");
          }, 3000); 

      }
  })

})


const btn1 = document.getElementById('btn1'); 
const btn2 = document.getElementById('btn2'); 
const valveImg = document.getElementById('valveImg');
const driveImg = document.getElementById('driveImg');

btn1.addEventListener('click', () => {
  valveImg.style.display = 'flex';
  driveImg.style.display = 'none';
});

btn2.addEventListener('click', () => {
  valveImg.style.display = 'none';
  driveImg.style.display = 'flex';
});


// video playing 

// Create an Intersection Observer to detect when the page24 section is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const video = document.getElementById('autoPlayVideo');
        if (entry.isIntersecting && video) {
            video.addEventListener('mouseenter', () => {
                video.pause();  // Pause the video on hover
              });

              video.addEventListener('mouseleave', () => {
                video.play();  // Play the video when hover is released
              });
            // Play the video when the section is in view
            video.play();
        } else {
            // Pause the video if it's out of view (optional)
            video.pause();
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the section is in view
});

const videoElements = document.querySelectorAll('.videoHover');

// Add event listeners to each video element
videoElements.forEach(video => {
    video.addEventListener('mousemove', (e) => {
        // Get the position of the mouse relative to the video
        const videoWidth = video.offsetWidth;
        const mouseX = e.offsetX;

        // Check if the mouse is within the last 20% of the video's width
        if (mouseX >= videoWidth * 0.2 && mouseX <= videoWidth * 0.75) {
          // If mouse is within the last 20% of the video, pause it
          if (!video.paused) {
            video.pause();
          }
        } else {
          // If mouse is outside the last 20%, play the video
          if (video.paused) {
            video.play();
          }
        }
      });

      // Ensure the video starts playing when the mouse leaves
      video.addEventListener('mouseleave', () => {
        if (video.paused) {
          video.play();  // Play the video when the mouse leaves the video area
        }
      });
});

// Target the section with id "page24"
const section = document.getElementById('page24');
observer.observe(section);

const objectContainer = document.getElementById('objectContainer');

// Add an event listener for when the object is loaded
objectContainer.addEventListener('load', function() {
  // Access the document inside the <object>
  const objectDoc = objectContainer.contentDocument || objectContainer.contentWindow.document;
  
  // Now, we can safely query the elements inside page4.html
  const cardButtonNavigation = objectDoc.querySelectorAll('.page5-content p');

  cardButtonNavigation.forEach(button => {
    button.addEventListener("click", function() {
      console.log("button clicked");
      const pgNo = button.getAttribute("pageNo");
      pageInput.value = pgNo; // Assuming 'pageInput' is already defined
      triggerPageChange(); // Assuming 'triggerPageChange' is already defined
    });
  });
});

const productData = {
    "1-Airlock": 
    `<p class="popupHeader">Airlock India</p>
    <ul>
        <li>1. Rotary Valves</li>
        <li>2. Diverter Valves</li>
        <li>3. Relief Valves</li>
        <li>4. Bin Activator</li>
        <li>5. Pneumatic Impactor</li>
    </ul>
    `,
    "1-PA":  `<p class="popupHeader">P&A Conveyors</p>
    <ul>
        <li>1. Screw Conveyors</li>
        <li>2. Volumetric Feeders</li>
        <li>3. Powder Samplers</li>
        <li>4. Bag Dump Station</li>
        <li>5. Bulk Bag Loader </li>
        <li>6. Bulk Bag Unloader</li>
        <li>7. Lump Breaker </li>
        <li>8. Magnetic Separator</li>
    </ul>
    `,
    "1-BFM":  `<p class="popupHeader">BFM Fittings </p>
    <ul>
        <li>1. Flexible Connectors</li>
    </ul>
    `,
    "1-Solimar":  `<p class="popupHeader">Solimar  </p>
    <ul>
        <li>1. Silo Fluidizers and Knockers</li>
    </ul>
    `,
    "1-Eclipse Magnetics":  `<p class="popupHeader">Eclipse Magnetics  </p>
    <ul>
        <li>1. Magnetic Separators and Metal Detectors</li>
    </ul>
    `,
    "1-Morris":  `<p class="popupHeader">Morris  </p>
    <ul>
        <li>1. Couplings, Bends and Pipes</li>
    </ul>
    `,
    "1-Sterivalves":  `<p class="popupHeader">Sterivalves  </p>
    <ul>
        <li>1. Sanitary Butterfly Valves</li>
    </ul>
    `,
    "1-Cipriani Harrison":  `<p class="popupHeader">Cipriani Harrison</p>
    <ul>
        <li>1. Butterfly Valves</li>
    </ul>
    `,
    "1-Delval":  `<p class="popupHeader">Delval  </p>
    <ul>
        <li>1. Butterfly Valves</li>
    </ul>
    `,
    "1-Keofitt":  `<p class="popupHeader">Keofitt</p>
    <ul>
        <li>1. Aseptic Samplers</li>
    </ul>
    `,
    "1-Ingersoll Rand":  `<p class="popupHeader">Ingersoll Rand  </p>
    <ul>
        <li>1. Roots Blowers and Packages</li>
    </ul>
    `,
    "1-Jacob":  `<p class="popupHeader">Jacob Components</p>
    <ul>
        <li>1. Modular Pipework Systems</li>
    </ul>
    `,
    
    // Add data for other companies here
  };

  // Get all logo elements
  const logos = document.querySelectorAll('.logo-img-product');

  // Get the popup elements
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const popupHeader = document.getElementById('popupHeader');
  const popupProducts = document.getElementById('popupProducts');
  const closePopup = document.getElementById('closePopup');

  // Function to open the popup and show products
  function openPopup(company) {
    // Set popup content
    popupHeader.textContent = company;
    popupProducts.innerHTML = '';  // Clear previous products

    // Get products for the clicked company
    const products = productData[company];

    if (products) {
        popupProducts.innerHTML = products;
    } else {
      popupProducts.innerHTML = "<li>No products available.</li>";
    }

    // Show the popup and overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }

  // Add event listeners to each logo
  logos.forEach(logo => {
    logo.addEventListener('click', () => {
      const company = logo.getAttribute('data-company');
      openPopup(company);
    });
  });

  // Close the popup when the "X" button is clicked
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  });

  // Close the popup when the overlay is clicked
  overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  });




// $(".custom-carousel").owlCarousel({
//     autoWidth: true,
//     loop: true
//   });
//   $(document).ready(function () {
//     $(".custom-carousel .item").click(function () {
//       $(".custom-carousel .item").not($(this)).removeClass("active");
//       $(this).toggleClass("active");
//     });
//   });

// var glide = new Glide('#options-hoverpause', {
//     type: 'carousel',
//       hoverpause: true,
//       autoplay: 1500,
//       perView: 5,
//       gap: 70,
//       focusAt: "center",
//       startAt: 1,
//       bound: true,
//       breakpoints: {
//         // For screens 1500px or smaller, set perView to 3
//         1520: {
//             perView: 4,
//             gap: 0,
//         },
//         1200: {
//             perView: 3,
//             gap: 50,
//         },
//         // Optional: you can add more breakpoints for smaller devices if needed
//         768: {
//             perView: 3 // For screens 768px or smaller, show 2 slides
//         },
//         480: {
//             perView: 1 // For screens 480px or smaller, show 1 slide
//         }
//     }
//     })
    
//     glide.mount()
    
// var glide2 = new Glide('#options-hoverpause2', {
//     type: 'carousel',
//       hoverpause: true,
//       autoplay: 1500,
//       perView: 5,
//       gap: 70,
//       focusAt: "center",
//       startAt: 1,
//       bound: true,
//       breakpoints: {
//         // For screens 1500px or smaller, set perView to 3
//         1520: {
//             perView: 4,
//             gap: 0,
//         },
//         1200: {
//             perView: 3,
//             gap: 50,
//         },
//         // Optional: you can add more breakpoints for smaller devices if needed
//         768: {
//             perView: 3 // For screens 768px or smaller, show 2 slides
//         },
//         480: {
//             perView: 1 // For screens 480px or smaller, show 1 slide
//         }
//     }
//     })
    
//     glide2.mount()
    

// var glide3 = new Glide('#options-hoverpause3', {
//     type: 'carousel',
//       hoverpause: true,
//       autoplay: 1500,
//       perView: 5,
//       gap: 70,
//       focusAt: "center",
//       startAt: 1,
//       bound: true,
//       breakpoints: {
//         // For screens 1500px or smaller, set perView to 3
//         1520: {
//             perView: 4,
//             gap: 0,
//         },
//         1200: {
//             perView: 3,
//             gap: 50,
//         },
//         // Optional: you can add more breakpoints for smaller devices if needed
//         768: {
//             perView: 3 // For screens 768px or smaller, show 2 slides
//         },
//         480: {
//             perView: 1 // For screens 480px or smaller, show 1 slide
//         }
//     }
//     })
    
//     glide3.mount()
    
    // Select all cards
    // const cards = document.querySelectorAll('.glide-card');
    
    // // Loop through each card and add event listeners
    // cards.forEach(card => {
    //     card.addEventListener('mousedown', () => {
    //         // When the card is grabbed, change the cursor to grabbing
    //         card.style.cursor = 'grabbing';
    //     });
    
    //     // Reset cursor when mouse is released
    //     card.addEventListener('mouseup', () => {
    //         // When the mouse is released, change the cursor back to normal
    //         card.style.cursor = 'grab';
    //     });
    
    //     // Optionally, if you want to ensure that the cursor is reset even if mouse leaves the card
    //     card.addEventListener('mouseleave', () => {
    //         card.style.cursor = 'grab';
    //     });
    // });
    