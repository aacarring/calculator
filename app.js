const calculator = document.querySelector('.calculator');
const keys = document.querySelectorAll('.calcKeys');
const display = document.querySelector('.calcDisplay')


function calculateIt() {
    
}

keys.forEach(key => key.addEventListener('click', calculateIt));