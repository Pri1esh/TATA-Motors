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
          items: 3,
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

  document.getElementById('popupImage').addEventListener('click', function () {
    $('#myModal').modal('show');
});

document.getElementById('viewLeaderBoard').addEventListener('click', function () {
  $('#leaderBoardModal').modal('show');
});

document.addEventListener('DOMContentLoaded', () => {
  const pollOptions = document.querySelectorAll('input[name="poll"]');
  const progressBars = document.querySelectorAll('.progress');
  const percentageTexts = document.querySelectorAll('.progressText');

  // Set initial progress bar widths based on data-bs-target
  progressBars.forEach((progressBar, index) => {
    const targetPercentage = parseInt(progressBar.getAttribute('data-bs-target'));
    progressBar.style.width = targetPercentage + '%';
    percentageTexts[index].textContent = targetPercentage + '%';
  });

  // Update the progress bar, percentage text, and background color
  function updateProgress(index, change, isChecked) {
    const progressBar = progressBars[index];
    const percentageText = percentageTexts[index];
    let currentPercentage = parseInt(percentageText.textContent);

    currentPercentage += change;

    // Ensure the percentage stays within 0-100 range
    currentPercentage = Math.max(0, Math.min(100, currentPercentage));

    progressBar.setAttribute('data-bs-target', currentPercentage);
    progressBar.style.width = currentPercentage + '%';
    percentageText.textContent = currentPercentage + '%';

    // Change background color based on checkbox selection
    if (isChecked) {
      progressBar.classList.add('selected');
    } else {
      progressBar.classList.remove('selected');
    }
  }

  pollOptions.forEach((option, index) => {
    option.addEventListener('change', (event) => {
      if (event.target.checked) {
        updateProgress(index, 1, true);
      } else {
        updateProgress(index, -1, false);
      }
    });
  });
});
