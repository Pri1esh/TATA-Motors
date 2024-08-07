const textInputs = document.querySelectorAll('input[type="text"]');

    const updateFilledClass = (input) => {
        if (input.value.trim() !== '') {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    };

    textInputs.forEach(input => {
        // Check if the input is inside a .selectInput container
        const selectInput = input.closest('.selectInput');
        const dropdownList = selectInput ? selectInput.querySelector('.dropDownList') : null;

        if (selectInput && dropdownList) {
            const listItems = dropdownList.querySelectorAll('li');

            // Click event for the input
            input.addEventListener('click', function(event) {
                event.stopPropagation();
                
                // Close all dropdowns
                document.querySelectorAll('.dropDownList').forEach(list => {
                    if (list !== dropdownList) {
                        list.style.display = 'none';
                    }
                });

                // Toggle the clicked dropdown
                const isOpen = dropdownList.style.display === 'block';
                dropdownList.style.display = isOpen ? 'none' : 'block';
            });

            // Click event for the list items
            listItems.forEach(listItem => {
                listItem.addEventListener('click', function() {
                    input.value = listItem.textContent;
                    updateFilledClass(input);
                    dropdownList.style.display = 'none';
                    
                    // Trigger the input event manually
                    input.dispatchEvent(new Event('input'));
                });
            });
        }

        // Listen for input changes to add/remove the 'filled' class
        input.addEventListener('input', () => updateFilledClass(input));
        input.addEventListener('change', () => updateFilledClass(input));
        input.addEventListener('focus', () => updateFilledClass(input));

        // Update filled class on page load to handle prefilled values
        updateFilledClass(input);

        // Detect browser autofill by monitoring animationstart
        input.addEventListener('animationstart', function(event) {
            if (event.animationName === 'onAutofillStart') {
                updateFilledClass(input);
            }
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropDownList').forEach(dropdownList => {
            dropdownList.style.display = 'none';
        });
    });

    // Prevent clicks inside the dropdown from closing it
    document.querySelectorAll('.dropDownList').forEach(dropdownList => {
        dropdownList.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });



    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });


      document.addEventListener('DOMContentLoaded', function () {
        const toggleCheckbox = document.querySelector('.submissionsDiv .switch input[type="checkbox"]');
        const uploadDiv = document.querySelector('.submissionsDiv .uploadDiv');

        // Initial state
        if (!toggleCheckbox.checked) {
            uploadDiv.style.display = 'none';
        }

        // Toggle visibility based on checkbox state
        toggleCheckbox.addEventListener('change', function () {
            if (this.checked) {
                uploadDiv.style.display = 'block';
            } else {
                uploadDiv.style.display = 'none';
            }
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        const fileUploadInput = document.getElementById('file-upload');
        const fileNameInput = document.querySelector('.file-name');
        const fileLabel = document.querySelector('.uploadThumbNail label');

        // Enable the file input when the label is clicked
        fileLabel.addEventListener('click', function() {
            fileUploadInput.disabled = false;
        });

        // Handle file selection
        fileUploadInput.addEventListener('change', function() {
            if (fileUploadInput.files.length > 0) {
                const fileName = fileUploadInput.files[0].name;
                fileNameInput.value = fileName;
            } else {
                fileNameInput.value = 'Thumbnail.jpeg';
            }
        });
    });


    document.addEventListener('DOMContentLoaded', () => {
        const commentHistory = document.querySelector('.commentHistory');
        const openHistoryArrow = document.querySelector('.commentHistory img');
        const historyContent = document.querySelector('.historyContent');
    
       
    
        commentHistory.addEventListener('click', () => {
            const computedStyle = window.getComputedStyle(historyContent);
            const displayValue = computedStyle.getPropertyValue('display');
    
            if (displayValue === 'none') {
                historyContent.style.display = 'block'; // Show the content
                openHistoryArrow.classList.add('imgRotateArraow'); // Rotate the arrow
            } 
            if (displayValue === 'block') {
                historyContent.style.display = 'none'; // Hide the content
                openHistoryArrow.classList.remove('imgRotateArraow'); // Remove rotation
            }
        });
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        const commentHistory = document.querySelector('.commentHistory');
        const openHistoryArrow = document.querySelector('.commentHistory img');
        const historyContent = document.querySelector('.historyContent');
    
        // Ensure initial state
        historyContent.classList.add('show'); // Ensure content is hidden initially
    
        commentHistory.addEventListener('click', () => {
            // Toggle the 'show' class to manage visibility
            historyContent.classList.toggle('show');
            
            // Toggle the rotation class for the arrow
            openHistoryArrow.classList.toggle('imgRotateArraow');
        });
    });
    
    

    document.addEventListener('DOMContentLoaded', function() {
        const selectElements = document.querySelectorAll('select');

        selectElements.forEach(function(select) {
            // Simulate a change event to apply CSS on page load
            const event = new Event('change');
            select.dispatchEvent(event);

            // Add change event listener to each select element
            select.addEventListener('change', function() {
                if (this.value !== "hiddenOption") {
                    this.style.backgroundColor = '#f4f4f4'; // Change this to any color you like
                }
            });
        });
    });