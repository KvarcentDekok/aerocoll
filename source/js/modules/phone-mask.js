const NUMBER_LENGTH = 11;

const inputPhone = document.querySelector('#phone');

function prefixNumber(string) {
    if (string === '7') {
        return '7 (';
    }
    if (string === '8') {
        return '8 (';
    }
    if (string === '9') {
        return '7 (9';
    }
    return '7 (';
}

function initPhoneMask() {
    inputPhone.addEventListener('input', () => {
        const value = inputPhone.value.replace(/\D+/g, '');

        let result;

        if (inputPhone.value.includes('+8') || inputPhone.value[0] === '8') {
            result = '';
        } else {
            result = '+';
        }

        for (let i = 0; i < value.length && i < NUMBER_LENGTH; i++) {
            switch (i) {
                case 0:
                    result += prefixNumber(value[i]);
                    continue;
                case 4:
                    result += ') ';
                    break;
                case 7:
                    result += '-';
                    break;
                case 9:
                    result += '-';
                    break;
                default:
                    break;
            }

            result += value[i];
        }

        inputPhone.value = result;
    });
}

export {initPhoneMask};
