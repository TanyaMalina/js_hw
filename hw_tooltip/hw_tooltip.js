const tooltip = function () {

    const tooltips = document.querySelectorAll('[title]');
    if (tooltips.length === 0) return;

    const ownTooltip = document.createElement('div');
    ownTooltip.classList.add('tooltip_position');


    const removeDefaultTooltip = function (id, elem) {
        document.body.append(ownTooltip);

        let title =  elem.getAttribute('title');

        ownTooltip.style.top = (elem.offsetTop + 45) + 'px';
        ownTooltip.style.left = elem.offsetLeft + 'px';

        ownTooltip.setAttribute('data-idTooltip', id);
        ownTooltip.innerHTML = title;

        elem.removeAttribute('title');
    }

    const addDefaultTooltip = function (id, elem) {
        let currentTooltip = document.querySelector(`[data-idTooltip = ${id}]`);
        elem.setAttribute('title', currentTooltip.innerHTML);

        currentTooltip.remove();
    }

    tooltips.forEach(elemTooltip => {
        let id = elemTooltip.dataset.id;
        if (!id) return;

        elemTooltip.addEventListener('mouseover', function() {
            removeDefaultTooltip(id, elemTooltip);
        })

        elemTooltip.addEventListener('mouseleave', function (){
            addDefaultTooltip(id, elemTooltip);
        })
    })

}

tooltip();

