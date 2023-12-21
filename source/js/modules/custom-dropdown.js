import Dropdown from "bootstrap/js/src/dropdown";

const DESKTOP_WINDOW_WIDTH = 992;

const customDropdowns = document.querySelectorAll('.custom-dropdown');
const dropdownElementList = [].slice.call(document.querySelectorAll('.custom-dropdown__toggle'));

let dropdownList = [];

function initDropdowns() {
    dropdownList = dropdownElementList.map((dropdownToggleElement) => {
        return new Dropdown(dropdownToggleElement);
    });

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
    if (window.innerWidth > DESKTOP_WINDOW_WIDTH) {
        initDropdowns();
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > DESKTOP_WINDOW_WIDTH && !dropdownList.length) {
            initDropdowns();
        }

        if (window.innerWidth <= DESKTOP_WINDOW_WIDTH && dropdownList.length) {
            for (let i = 0; i < dropdownList.length; i++) {
                dropdownList[i].dispose();
            }

            dropdownList = [];
        }
    });
}

export {customDropdown};