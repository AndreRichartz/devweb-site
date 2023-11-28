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

/* slider */


const slider = document.getElementById('value');
const output = document.getElementById('print-value');
const numberInput = document.getElementById('number');

output.innerHTML = (slider.value / 100).toFixed(2).replace('.',',');

slider.oninput = function() {
    output.innerHTML = (this.value / 100).toFixed(2).replace('.',',');
    numberInput.value = this.value / 100;
}

numberInput.oninput = function() {
    slider.value = this.value * 100;
    output.innerHTML = this.value.replace('.',',');
}

/* open modal */

const modal = document.getElementById('modal')
const donateButton = document.getElementById('btn');

donateButton.onClick = function () {
    modal.classList.toggle('open2');
    const isOpen = modal.classList.contains('open2')


}

donateButton.addEventListener('click', () => {
    modal.classList.toggle('open2');
    const isOpen = modal.classList.contains('open2')
    console.log('Hello world')
})

const closeBtn = document.getElementById('close-btn')

closeBtn.onclick = () => {
    modal.classList.toggle('open2')
}

const modal1 = document.getElementById('modal')
const donateButton1 = document.getElementById('btn1');

donateButton1.onClick = function () {
    modal1.classList.toggle('open2');
    const isOpen = modal.classList.contains('open2')


}

donateButton1.addEventListener('click', () => {
    modal1.classList.toggle('open2');
    const isOpen = modal1.classList.contains('open2')
    console.log('Hello world')
})
});


