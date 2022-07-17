window.addEventListener('load', function (){

    const gallery = function () {

        let galleryPreview = document.querySelector('.gallery__preview');
        let buttonClose = document.querySelector('.gallery__preview_close');
        let thumbs = document.querySelectorAll('.gallery__thumbs img');

        const previewHide = function () {

            let urlImg = 'https://via.placeholder.com/800/' + this.src.substring(this.src.length - 3);
            galleryPreview.style.backgroundImage = 'url(' + urlImg + ')';
            galleryPreview.style.display = 'flex';
        }

        const closePreview = function () {
            galleryPreview.style.display = 'none';
        }

        thumbs.forEach(element => {
            element.addEventListener('click', previewHide);
        })

        buttonClose.addEventListener('click', closePreview);
    }

    gallery();
})