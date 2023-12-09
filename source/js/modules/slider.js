import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initSliderMain() {
    const sliderMain = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        lazy: true,
        autoplay: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            bulletActiveClass: 'custom-slider__bullet--active',
            clickable: true
        },
    });
}