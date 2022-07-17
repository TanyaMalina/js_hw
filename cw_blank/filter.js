window.addEventListener('load', function () {

    const filter = function () {

        let portfolioFilter = document.querySelectorAll('.portfolio__filter li');
        let portfolioList = document.querySelectorAll('.portfolio__list li');

        const filterPicture = function () {

            portfolioFilter.forEach(element => {
                element.classList.remove('active');
            })

            portfolioList.forEach(element => {

                if (!this.classList.contains('active')) this.classList.add('active');

                if (element.dataset.filter === this.dataset.filter || this.dataset.filter === 'all') {
                    element.classList.remove('display_none');
                } else if (!element.classList.contains('display_none')) {
                    element.classList.add('display_none');
                }

            })

        }

        portfolioFilter.forEach(element => {
            element.addEventListener('click', filterPicture);
        })

    }

    filter();
})