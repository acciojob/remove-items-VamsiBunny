let colorSelect = document.getElementById("colorSelect");
let button = document.querySelector('input[type="button"]');

button.addEventListener('click', function() {
    let selectedOption = colorSelect.options[colorSelect.selectedIndex];
    
    colorSelect.removeChild(selectedOption);
});
