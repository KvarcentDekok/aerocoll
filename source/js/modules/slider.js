import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export function initSliderMain() {
    const sliderMain = new Swiper('.home-slider', {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        lazy: true,

        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true
        },

        navigation: {
            nextEl: '.home-slider__button--next',
            prevEl: '.home-slider__button--prev',
        },

        pagination: {
            el: '.home-slider__pagination',
            bulletActiveClass: 'home-slider__bullet--active',
            clickable: true
        },

        breakpoints: {
            0: {
                navigation: {
                    enabled: false
                },

                pagination: {
                    enabled: true
                }
            },
            768: {
                navigation: {
                   enabled: true
                },

                pagination: {
                    enabled: false
                }
            }
        },
    });
}

export function initSliderNews() {
    const sliderMain = new Swiper('.news-slider', {
        modules: [Pagination],
        spaceBetween: 16,
        loop: true,
        lazy: true,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 4
            }
        },

        pagination: {
            el: '.news-slider__pagination',
            bulletActiveClass: 'news-slider__bullet--active',
            clickable: true
        }
    });
}