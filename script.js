document.addEventListener('DOMContentLoaded', function() {
const toggleButton = document.getElementById('btn-menu');
const dropDownMenu = document.getElementById('dropdown-menu');

toggleButton.onClick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open')


}

toggleButton.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open')
    console.log('Hello world')
})

});
