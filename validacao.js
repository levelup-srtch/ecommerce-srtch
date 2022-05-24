
const formularioCheckout = document.querySelector('.formulario-checkout');

formularioCheckout.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputNome = document.querySelector('#nome');
    if (!inputNome.value) {
        inputNome.classList.add('is-invalid');
    }

});

// document.querySelector('#nome').setCustomValidity('O nome é obrigatório')
// document.querySelector('#email').setCustomValidity('O email é obrigatório')
// document.querySelector('#cpf').setCustomValidity('O cpf é obrigatório')
// document.querySelector('#numero-cartao').setCustomValidity('O número do cartão é obrigatório')
// document.querySelector('#cvv-cartao').setCustomValidity('O CVV do cartão é obrigatório')