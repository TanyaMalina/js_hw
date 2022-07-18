const gallery = function () {

    let galleryPreview = document.querySelector('.gallery__preview');

    const previewHide = function () {
        let urlImg = 'https://via.placeholder.com/800/' + this.src.substring(this.src.length - 3);
        galleryPreview.style.backgroundImage = 'url(' + urlImg + ')';
        galleryPreview.style.display = 'flex';
    }

    const closePreview = function () {
        galleryPreview.style.display = 'none';
    }

    let thumbs = document.querySelectorAll('.gallery__thumbs img');
    thumbs.forEach(element => {
        element.addEventListener('click', previewHide);
    })

    let buttonClose = document.querySelector('.gallery__preview_close');
    buttonClose.addEventListener('click', closePreview);
}

window.addEventListener('load', function () {
    gallery();
})