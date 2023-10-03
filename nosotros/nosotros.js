const form = document.querySelector('#form');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const error = document.querySelector('#error');

//formulario de contacto:

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
   const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if(response.ok){
        this.reset()
        alert('Su mensaje ha sido enviado con exito. Te responderemos a la brevedad, gracias!')
    }
}

form.addEventListener('submit', handleSubmit);

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let mensajesError = [];
//     if (nombre.value === null || nombre.value === '') {
//         mensajesError.push('Ingresa tu nombre');
//     }
//     if (email.value === null || email.value === '') {
//         mensajesError.push('Ingresa tu email');
//     }
//     if (mensaje.value === null || mensaje.value === '') {
//         mensajesError.push('Ingresa tu mensaje');
//     }
//     error.innerHTML = mensajesError.join(', ');

//     if (mensajesError.length === 0) {
//         form.reset();
//         error.innerHTML = 'Mensaje enviado correctamente';
//     }

// });