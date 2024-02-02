import Toastify from 'toastify-js';

window.toast = Toastify;

const ToastVariant = {
    CallbackSuccess: {
        name: 'CALLBACK_SUCCESS',
        text: 'Ваш запрос успешно отправлен!',
        style: {
            backgroundColor: '#3450A3'
        }
    }
};

const params = new URLSearchParams(document.location.search);
const toastParam = params.get('toast');

function initToast() {
    switch (toastParam) {
        case ToastVariant.CallbackSuccess.name:
            window.toast({
                text: ToastVariant.CallbackSuccess.text,
                style: ToastVariant.CallbackSuccess.style
            }).showToast();
            break;
    }
}

export {initToast};