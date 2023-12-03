// Pegando nome do usuário para mostrar no alert 

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameUser = document.getElementById('nameUser').value;
    userMensage = alert(`Sua mensagem foi enviado com sucesso senhor(a)
    ${nameUser}`);

    // limpando os inputs de texto

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

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