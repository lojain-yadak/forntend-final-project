/*let timeoutId=0.5;

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("mouseover", function () {
  dropdownMenu.classList.add("show"); // Add the "show" class to reveal the dropdown
});

dropdown.addEventListener("mouseleave", function () {
  dropdownMenu.classList.remove("show"); // Remove the "show" class to hide the dropdown
});

dropdown.addEventListener("mouseover", function () {
    clearTimeout(timeoutId); // Clear any existing timeout
    dropdownMenu.classList.add("show");
  });
  
  dropdown.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.remove("show");
    }, 300); // Delay hiding the dropdown by 300ms
  });*/
  const cursor = document.querySelector("#cursor");
  const cursorBorder = document.querySelector("#cursor-border");
  const cursorPos = { x: 0, y: 0 };
  const cursorBorderPos = { x: 0, y: 0 };
  
  document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;
  
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  
  requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
  
    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(loop);
  });
  
  document.querySelectorAll("[data-cursor]").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (item.dataset.cursor === "pointer") {
        cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
        cursorBorder.style.setProperty("--size", "30px");
      }
      if (item.dataset.cursor === "pointer2") {
        cursorBorder.style.backgroundColor = "white";
        cursorBorder.style.mixBlendMode = "difference";
        cursorBorder.style.setProperty("--size", "80px");
      }
    });
    item.addEventListener("mouseout", (e) => {
      cursorBorder.style.backgroundColor = "unset";
      cursorBorder.style.mixBlendMode = "unset";
      cursorBorder.style.setProperty("--size", "50px");
    });
  });
  



  const openButton = document.getElementById('open-sidebar-button');
  const navbar = document.getElementById('navbar');
  
  // Function to open the sidebar
  function openSidebar() {
    navbar.classList.add('show'); // Add the 'show' class to display the sidebar
    openButton.setAttribute('aria-expanded', 'true'); // Update accessibility attribute
    navbar.removeAttribute('inert'); // Make the sidebar interactive
  }
  
  // Function to close the sidebar
  function closeSidebar() {
    navbar.classList.remove('show'); // Remove the 'show' class to hide the sidebar
    openButton.setAttribute('aria-expanded', 'false'); // Update accessibility attribute
    navbar.setAttribute('inert', ''); // Make the sidebar non-interactive
  }
  
  // Attach event listeners
  openButton.addEventListener('click', openSidebar);
  
  // Optional: Add a close button inside the sidebar
  const closeButton = document.getElementById('close-sidebar-button');
  if (closeButton) {
    closeButton.addEventListener('click', closeSidebar);
  }
  const sidebar = document.getElementById('navbar');

// Open sidebar
openButton.addEventListener('click', () => {
    sidebar.classList.add('show');
});

// Close sidebar
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('show');
});
/*--------------*/
function custommodal() {
  const modal = document.querySelector(".my-modal");
  const modaljourney = document.querySelector(".my-modaljourney");

  const closebtn = document.querySelector(".x-btn");
  const playbtn = document.querySelector(".play-button");
  const playbtnjourney = document.querySelector(".play-buttonjourney");


  playbtnjourney.addEventListener("click", (e) => {
      modal.classList.remove("d-none");

  });
  playbtn.addEventListener("click", (e) => {
    modal.classList.remove("d-none");
    modaljourney.classList.remove("d-none");

});

  closebtn.addEventListener("click", (e) => {
      modal.classList.add("d-none");
      modaljourney.classList.add("d-none");

  });

  document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
          modal.classList.add("d-none");
          modaljourney.classList.add("d-none");

      }
  });
}

// Call the function to initialize the modal
custommodal();
/*------animation------*/
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animations
        const bringing = document.querySelector('.bringing');
        const flavor = document.querySelector('.flavorh2');
        if (bringing) bringing.classList.add('active');
        if (flavor) flavor.classList.add('active');

        // Trigger reveal animations
        document.querySelectorAll('.reveal').forEach(element => {
          element.classList.add('active');
        });

        // Stop observing after triggering animations
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe sections
  const bringingSection = document.querySelector('.opening');
  const chooseSection = document.querySelector('.chooseus');
  if (bringingSection) observer.observe(bringingSection);
  if (chooseSection) observer.observe(chooseSection);
});
/*---------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  // Find the maximum target value among all counters
  const maxTarget = Math.max(...Array.from(counters).map(counter => +counter.getAttribute('data-count')));

  const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-count');
      const speed = 3600; // Total time for the animation in milliseconds
      const increment = target / (speed / 16); // Adjust the increment based on the target value

      const updateCount = () => {
          let count = parseFloat(counter.innerText);
          
          if (count < target) {
              counter.innerText = Math.ceil(count + increment) + (target !== 50 ? '+' : '');
              requestAnimationFrame(updateCount);
          } else {
              counter.innerText = target + (target !== 50 ? '+' : '');
          }
      };
      updateCount();
  };

  const observerOptions = {
      root: null,
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  counters.forEach(counter => {
      observer.observe(counter);
  });
});
/*----------------*/
document.querySelectorAll('.btn-custom').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelector('.btn-custom.active').classList.remove('active');
    this.classList.add('active');
  });
});
/*----tabs------*/
function openCity(evt, cityName) {
  // Get all elements with class="tabcontent" and hide them
  var tabcontents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active");
  }

  // Get all elements with class="tablinks" and remove the class "active"
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Set the first tab as active by default
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.tablinks').classList.add('active');
  document.querySelector('.tabcontent').classList.add('active');
});
/*--------------------*/
/*icon toggle*/
document.addEventListener('DOMContentLoaded', function() {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Collapse all sections and set their icons to "+"
      accordionButtons.forEach(btn => {
        if (btn !== this) {
          btn.setAttribute('aria-expanded', 'false');
          btn.querySelector('.icon').textContent = '+';
          const targetId = btn.getAttribute('data-bs-target');
          const targetElement = document.querySelector(targetId);
          if (targetElement.classList.contains('show')) {
            targetElement.classList.remove('show');
          }
        }
      });

      // Toggle the clicked section's icon and state
      const icon = this.querySelector('.icon');
      if (this.getAttribute('aria-expanded') === 'true') {
        icon.textContent = '-';
      } else {
        icon.textContent = '+';
      }

      // Toggle the aria-expanded attribute of the clicked button
      this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });
  });
});
/*----------------*/

/*fade toggle*/
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the classes .fade-up and .fade-left
  const fadeElements = document.querySelectorAll(".fade-up, .fade-left");

  // Create an IntersectionObserver
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  // Add the 'animate' class when the element is in the viewport
                  entry.target.classList.add("animate");
              }
          });
      },
      {
          threshold: 0.5, // Trigger when 50% of the element is visible
      }
  );

  // Observe each element
  fadeElements.forEach((element) => {
      observer.observe(element);
  });
});
/*-----------------*/


// Initialize ScrollReveal
$(document).ready(function () {
  let animated = false; // Flag to ensure the animation runs only once

  $(window).on("scroll", function () {
    const imageContainer = $(".image-container");
    const imagePosition = imageContainer.offset().top; // Get the top position of the image container
    const scrollPosition = $(window).scrollTop() + $(window).height(); // Get the current scroll position

    // Check if the image container is in the viewport and hasn't been animated yet
    if (scrollPosition > imagePosition && !animated) {
      imageContainer.addClass("animate"); // Trigger the animation
      animated = true; // Set the flag to true to prevent re-triggering
    }
  });
});