
  const myContriTabs = document.getElementsByClassName("myContriTab");
  const myteamContriTabs = document.getElementsByClassName("myteamContriTab");

  // Assuming there's only one element with these classes, use [0] to access the first one.
  const myContriTab = myContriTabs[0];
  const myteamContriTab = myteamContriTabs[0];

  const myContri = document.getElementById("myContri");
  const myteamContri = document.getElementById("myteamContri");
  
  myteamContri.style.display = "none";

  // Add myContriTabUnderline to myContriTab by default
  myContriTab.classList.add("myContriTabUnderline");
  myContriTab.querySelector("h2").classList.add("active");

  // Function to handle tab click and toggle the underline class
  function toggleTab(tab, otherTab, content, otherContent) {
    tab.querySelector("h2").classList.add("active");
    otherTab.querySelector("h2").classList.remove("active");
    tab.classList.add("myContriTabUnderline");
    otherTab.classList.remove("myContriTabUnderline");
    content.style.display = "block";
    otherContent.style.display = "none";
  }

  myContriTab.addEventListener("click", function () {
    toggleTab(myContriTab, myteamContriTab, myContri, myteamContri);
  });

  myteamContriTab.addEventListener("click", function () {
    toggleTab(myteamContriTab, myContriTab, myteamContri, myContri);
  });



  // Get all the menu items
  const menuItems = document.querySelectorAll(".menuIconDiv");

  // Function to remove active class from all items
  function removeActiveClass() {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  }

  // Add click event listener to each menu item
  menuItems.forEach((item, index) => {
    // Set the first item as active initially
    if (index === 0) {
      item.classList.add("active");
    }

    item.addEventListener("click", function () {
      // Remove active class from all items
      removeActiveClass();

      // Add active class to the clicked item
      item.classList.add("active");
    });
  });


$(document).ready(function () {
  $(".trendings .owl-carousel").owlCarousel({
    loop: true,
    margin: 23,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
});


$(document).ready(function() {
  $('.mostViewed').show();
  $('.selectionDiv').click(function() {
    var id = $(this).attr('id');

    // Remove 'active' class from all selection divs
    $('.selectionDiv').removeClass('active');

    // Add 'active' class to the clicked div
    $(this).addClass('active');

    // Hide all content sections
    $('.contentSectionTrends').hide();

    // Show the selected content section
    $('.' + id).show();
  });
});


  const arrow = document.querySelector('.arrow');
  const arrowSVG = document.querySelector('.arrow svg');
  const submenu = document.querySelector('.submenu');
  const userProfile = submenu.querySelector('h5:first-child');

  // Toggle submenu on arrow click
  arrow.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the click event from bubbling up
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      if(submenu.style.display==='block')
        {
          arrowSVG.classList.add('arrowRotate')
        }
        else{
          arrowSVG.classList.remove('arrowRotate')
        }


  // Close submenu when clicking outside
  document.addEventListener('click', function(event) {
      // Check if the click was outside the submenu and the arrow
      if (!submenu.contains(event.target) && !arrow.contains(event.target)) {
          submenu.style.display = 'none';
          arrowSVG.classList.remove('arrowRotate')
      }
  });

  // Prevent submenu from closing when clicking inside it
  submenu.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document level
  });

  // Call cls function on "User Profile" click
  userProfile.addEventListener('click', function() {
    cls();
  });

  function cls(){
    alert(1);
  }
});



  const hamburgerIcons = document.getElementsByClassName('hamburgerIcon');
  const closeMenuButtons = document.getElementsByClassName('closeMenu');
  const mobileMenus = document.querySelector('.mobileMenus');
  const overlay = document.querySelector('.overlay');
  
  for (let i = 0; i < hamburgerIcons.length; i++) {
      hamburgerIcons[i].addEventListener('click', function() {
          mobileMenus.classList.add('active');
          overlay.classList.add('active');
      });
  }


  for (let i = 0; i < closeMenuButtons.length; i++) {
      closeMenuButtons[i].addEventListener('click', function() {
          mobileMenus.classList.remove('active');
          overlay.classList.remove('active');
      });
  }
  overlay.addEventListener('click', function() {
      mobileMenus.classList.remove('active');
      overlay.classList.remove('active');
  });

  



  // Get all elements with the class 'menuIconDiv'
  const menuIcons = document.querySelectorAll('.menuIconDiv');

  // Loop through each menu icon div
  menuIcons.forEach(icon => {
    // Get the tooltip element inside the current menu icon div
    const tooltip = icon.querySelector('.customTool');

    // Add mouseenter event to show the tooltip
    icon.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
    });

    // Add mouseleave event to hide the tooltip
    icon.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });

