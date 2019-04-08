(function (doc, win) {

    'use strict'

    const name = doc.querySelector('[data-js="name"]');
    const nota = doc.querySelector('[data-js="nota"]');
    const novo = doc.querySelector('[data-js="new"]');
    const clear = doc.querySelector('[data-js="limpar"]');
    const list = doc.querySelector('[data-js="lista"]');

    async function alerta() {
        const alert = doc.querySelector('ion-alert-controller');
        await alert.componentOnReady();
        const alerta = await alert.create({
            header: 'Invalido',
            message: 'Curso Invalido',
            buttons: ['OK']
        });
        return await alerta.present();
    }

    const limpar = () => {
        name.value = '';
        nota.value = '';
    }

    novo.addEventListener('click', function () {
        const validateName = name.value;
        const validateCurso = nota.value

        if (
            validateName.trim() <= 0 ||
            validateCurso <= 0 ||
            validateCurso > 5 ||
            validateCurso.trim() <= 0
        ) {
            alerta();
            return;
        }

        const newItem = doc.createElement('ion-item');
        newItem.textContent = `${validateName} : Nota ${validateCurso}/5`

        list.appendChild(newItem);

        limpar()

    }, false);

    clear.addEventListener('click', limpar, false)



})(document, window)