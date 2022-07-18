const filter = function () {

    let portfolioFilter = document.querySelectorAll('.portfolio__filter li');
    let portfolioList = document.querySelectorAll('.portfolio__list li');

    portfolioList.forEach(elem => elem.classList.add('active'));

    const filterPicture = function () {

        portfolioFilter.forEach(elem => {
            elem.classList.remove('active');
        })

        if (!this.classList.contains('active')) this.classList.add('active');

        portfolioList.forEach(elem => {

            if (elem.dataset.filter === this.dataset.filter || this.dataset.filter === 'all') {
                elem.classList.add('active');
            } else if (elem.classList.contains('active')) {
               elem.classList.remove('active');
            }

        })

    }

    portfolioFilter.forEach(elem => {
        elem.addEventListener('click', filterPicture);
    })
}

window.addEventListener('load', function () {
    filter();
})