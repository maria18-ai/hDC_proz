// mostrando o popUp 

const button = document.getElementById('button');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'
});