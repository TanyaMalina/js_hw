const slider = function (opt) {
    if (!opt.name || !opt.btns.left || !opt.btns.right) return;

    const listElem = document.querySelector('#' + opt.name);
    let sliderWrappers = listElem.querySelectorAll('.slider__items__wrapper');

    const btnLeft = document.querySelector('#' + opt.btns.left);
    const btnRight = document.querySelector('#' + opt.btns.right);

    const dots = document.querySelector('#' + opt.dots.name).children;
    const dot1 = document.querySelector('#' + opt.dots.dot1);
    const dot2 = document.querySelector('#' + opt.dots.dot2);
    const dot3 = document.querySelector('#' + opt.dots.dot3);


    if (!btnLeft || !btnRight) return;
    if (!dot1 || !dot2 || !dot3) return;

    sliderWrappers[0].classList.add('firstPosition');

    const prevNex = function (n) {

        let firstPosition = listElem.querySelector('.firstPosition');
        let x = firstPosition.style.transform;

        if (!x) {
            x = 0;
        } else {
            x = x.replace('translateX(', '');
            x = x.replace('%)', '')
            x = Math.abs(x);
        }

        const stopPoint = (listElem.children.length - 1) * 100;

        if (x === 0 && n === -1) {
            x = stopPoint;
        } else if (x === stopPoint && n === 1) {
            //x = 0;
            sliderWrappers[0].style.transform = `translateX(${100}%)`;
        } else {
            x += 100 / opt.quantitySliders * n;
        }

        sliderWrappers.forEach((elem, index) => {


            // if (x % 100 === 0 && n === 1 && elem.classList.contains('firstPosition')) {
            //     elem.classList.remove('firstPosition');
            //     firstPosition.style.transform = `translateX(${x}%)`;
            //
            //     sliderWrappers[index].classList.remove('firstPosition');
            //
            // }
                elem.style.transform = `translateX(-${x}%)`;

        })

    if (x === stopPoint && n === 1) sliderWrappers[0].style.transform = `translateX(${100}%)`;

    }

    const dotPress = function (n) {

        for (let i = 0; i < dots.length; i++) dots[i].classList.remove('active')
        dots[n].classList.add('active');
    }

    btnLeft.addEventListener('click', function () {
        prevNex(-1);
    })

    btnRight.addEventListener('click', function () {
        prevNex(1);
    })

    dot1.addEventListener('click', function (event) {
        dotPress(0, event);
    })

    dot2.addEventListener('click', function (event) {
        dotPress(1, event);
    })

    dot3.addEventListener('click', function (event) {
        dotPress(2, event);
    })
}

window.addEventListener('load', function () {

    const slider1_options = {
        name: 'slider1',
        quantitySliders: 5,
        btns: {
            left: 'slider1_btn_left',
            right: 'slider1_btn_right'
        },

        dots: {
            name: 'slider_dots',
            dot1: 'slider__dot1',
            dot2: 'slider__dot2',
            dot3: 'slider__dot3'
        }
    };

    slider(slider1_options);
})