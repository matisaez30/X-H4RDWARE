//formulario de contacto:
function validar(){
    const name = document.getElementById('nombre');
    const lastName = document.getElementById('apellido');
    const email = document.getElementById('client-email');
    const phone = document.getElementById('telefono');
    const msg = document.getElementById('mensaje');
    console.log(name.value)
    console.log(lastName.value)
    console.log(email.value)
    console.log(msg.value)
    let error = false;

    if(name.value == ''){
        document.getElementById('validar_name').innerHTML = 'Por favor, ingrese su nombre';
        error = true;
        name.focus();
    }
    if(lastName.value == ''){
        document.getElementById('validar_lastName').innerHTML = 'Por favor, ingrese su apellido';
        error = true;
        lastName.focus();
    }
    if(email.value == ''){
        document.getElementById('validar_email').innerHTML = 'Por favor, ingrese su email';
        error = true;
        email.focus();
    }
    if(phone.value == ''){
        document.getElementById('validar_phone').innerHTML = 'Por favor, ingrese su teléfono';
        error = true;
        phone.focus();
    }
    if(msg.value.length == 10){
        document.getElementById('validar_msg').innerHTML = 'Por favor, ingrese su mensaje';
        error = true;
        msg.focus();
    }
    if(error == false){
        document.getElementById('nombre').value = '';
        document.getElementById('validar_name').innerHTML ='&nbsp;';
        document.getElementById('email').value = '';
        document.getElementById('validar_email').innerHTML ='&nbsp;';
        document.getElementById('telefono').value = '';
        document.getElementById('validar_phone').innerHTML ='&nbsp;';
        document.getElementById('mensaje').value ='';
        document.getElementById('validar_msg').innerHTML ='&nbsp;';
        alert("Gracias, responderemos a la brevedad");
        const form = document.getElementById('form');
        form.addEventListener('submit', handleSubmit);
    }
}

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