
document.documentElement.setAttribute('lang','en');

let meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
document.head.appendChild(meta);

let title =  document.createElement('title');
title.innerHTML = `Title`;
document.head.appendChild(title);

let fonts =  document.createElement('link');
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
fonts.setAttribute('rel', 'stylesheet');
document.head.appendChild(fonts);


let h1 = document.createElement('h1');

let header = document.createElement('header');
header.classList.add('header');
document.body.appendChild(header);

let headerContainer = document.createElement('div');
headerContainer.classList.add('container');
header.appendChild(headerContainer);
headerContainer.appendChild(h1);
h1.textContent = 'Choose Your Option';

let headerDescription = document.createElement('div');
headerDescription.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`;
headerDescription.classList.add('description');
headerContainer.appendChild(headerDescription);

let section = document.createElement('section');
section.classList.add('promo');
document.body.appendChild(section);

let sectionContainer = document.createElement('div');
sectionContainer.classList.add('container');
section.appendChild(sectionContainer);



let promoLeft = document.createElement('div');
promoLeft.classList.add('promo__left');
sectionContainer.appendChild(promoLeft);

let promoLeftName = document.createElement('div');
promoLeftName.innerHTML = `FREELANCER`;
promoLeftName.classList.add('promo__name');
promoLeft.appendChild(promoLeftName);

let promoLeftTitle = document.createElement('div');
promoLeftTitle.innerHTML = `Initially designed to`;
promoLeftTitle.classList.add('promo__title');
promoLeft.appendChild(promoLeftTitle);

let promoLeftDescription = document.createElement('div');
promoLeftDescription.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`;
promoLeftDescription.classList.add('description');
promoLeft.appendChild(promoLeftDescription);

let promoLefButton = document.createElement('button');
promoLefButton.innerHTML = `START HERE`;
promoLefButton.classList.add('promo__button');
promoLeft.appendChild(promoLefButton);


let promoRight = document.createElement('div');
promoRight.classList.add('promo__right');
sectionContainer.appendChild(promoRight);

let promoRightName = document.createElement('div');
promoRightName.innerHTML = `STUDIO`;
promoRightName.classList.add('promo__name');
promoRight.appendChild(promoRightName);

let promoRightTitle = document.createElement('div');
promoRightTitle.innerHTML = `Initially designed to`;
promoRightTitle.classList.add('promo__title');
promoRight.appendChild(promoRightTitle);

let promoRightDescription = document.createElement('div');
promoRightDescription.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`;
promoRightDescription.classList.add('description');
promoRight.appendChild(promoRightDescription);

let promoRightButton = document.createElement('button');
promoRightButton.innerHTML = `START HERE`;
promoRightButton.classList.add('promo__button');
promoRight.appendChild(promoRightButton);



let style = document.createElement('style');
document.head.appendChild(style);

style.innerHTML = `
* {
    margin: 0;
    padding: 0;
}

body {
    font-size: 18px;
}

.container {
    width: 50%;
    max-width: 1530px;
    margin: 0 auto;
}

h1 {
    font-family: 'Arvo';
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #212121;
}

.description {
    display: flex;
    align-items: center;
    text-align: center;

    font-family: 'OpenSans';
    font-size: 16px;
    line-height: 22px;
    color: #9FA3A7;

    margin-top: 25px;
}

.header .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 0 55px 0;
}

.header .description {
    margin-top: 15px;
}

.promo .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.promo__name {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 2.4px;
}

.promo__title {
    display: flex;
    align-items: center;
    text-align: center;

    font-family: 'Arvo';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;

    margin-top: 25px;
}

.promo__button {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    letter-spacing: 2.4px;

    margin-top: 60px;
    padding: 20px 25px;

    background-color: transparent;
    border: 3px solid #FFC80A;
    border-radius: 30px;

    cursor: pointer;
}

.promo__left {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: calc(50% - 95px - 95px);

    padding: 80px 95px;

    border: 1px solid #E8E9ED;
    border-radius: 5px;
}

.promo__left .promo__name {
    color: #9FA3A7;
}

.promo__left .promo__title {
    color: #212121;
}

.promo__left .promo__button {
    color: #212121;
}

.promo__right {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: calc(50% - 95px - 95px);
    background: #8F75BE;

    padding: 80px 95px;

    color: #FFFFFF;
}

.promo__right .promo__name {
    color: #FFC80A;
}

.promo__right .description {
    color: #FFFFFF;
}

.promo__right .promo__button {
    color: #FFFFFF;
}`

