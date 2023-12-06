import Dropdown from "bootstrap/js/src/dropdown";

const customDropdowns = document.querySelectorAll('.custom-dropdown');
const dropdownElementList = [].slice.call(document.querySelectorAll('.custom-dropdown__toggle'));
const dropdownList = dropdownElementList.map((dropdownToggleElement) => {
    return new Dropdown(dropdownToggleElement);
});

function dropdownMouseOverHandler(index) {
    dropdownList[index].show();
}

function dropdownMouseOutHandler(index) {
    dropdownList[index].hide();
}

function dropdownFocusOutHandler(evt, index) {
    let relatedTarget = evt.relatedTarget;

    while (relatedTarget && relatedTarget !== document.body) {
        if (relatedTarget.classList.contains('custom-dropdown__menu')) {
            return;
        }

        relatedTarget = relatedTarget.parentNode;
    }

    dropdownList[index].hide();
}

function customDropdown() {
    for (let i = 0; i < customDropdowns.length; i++) {
        const toggleElement = customDropdowns[i].querySelector('.custom-dropdown__toggle');
        const menuElement = customDropdowns[i].querySelector('.custom-dropdown__menu');

        toggleElement.addEventListener('mouseover', () => {
            dropdownMouseOverHandler(i);
        });

        toggleElement.addEventListener('focusin', () => {
            dropdownMouseOverHandler(i);
        });

        toggleElement.addEventListener('mouseout', () => {
            dropdownMouseOutHandler(i);
        });

        toggleElement.addEventListener('focusout', (evt) => {
            dropdownFocusOutHandler(evt, i);
        });

        menuElement.addEventListener('mouseover', () => {
            dropdownMouseOverHandler(i);
        });

        menuElement.addEventListener('mouseout', () => {
            dropdownMouseOutHandler(i);
        });

        menuElement.addEventListener('focusout', (evt) => {
            dropdownFocusOutHandler(evt, i);
        });
    }
}

export {customDropdown};