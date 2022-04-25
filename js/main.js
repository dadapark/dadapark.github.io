const navButtons = document.querySelectorAll("[class^=dp-carousel-nav__]");
const currentCarousel = document.getElementsByClassName("dp-carousel-board")[0];
const colorButton = document.getElementsByClassName("dp-carousel-navbar-circle")[0];
const modalButtons = document.querySelectorAll("div.dp-carousel-board-item:not(.item-lock)");
const colorLine = (colorButton ? colorButton.parentElement : false);
const bodyContent = document.getElementsByTagName('body')[0];
const headContent = document.getElementsByTagName('header')[0];
const modal = document.getElementsByClassName('dp-modal')[0];
const modalClose = document.getElementsByClassName('dp-modal-close');
const modalImage = document.getElementById('dp-modal-img');

// (i, int)
const switchCarousel = (i) => {
    targetCarousel = document.getElementsByClassName("dp-carousel-board__" + i)[0]
    currentCarousel.style.transform = "translateX(-" + targetCarousel.offsetLeft + "px)";

    [...currentCarousel.children].forEach((carousel) => {
        if (carousel == targetCarousel) {
            carousel.classList.add('board-fullheight');
        } else {
            carousel.classList.remove('board-fullheight');
        }
    })
    
}

// (button, elm), (i, int)
const switchNav = (button, i) => {
    if (i == 2) {
        colorLine.classList = "dp-carousel-navbar navbar-red"
    } else if (i == 3) {
        colorLine.classList = "dp-carousel-navbar navbar-yellow"
    } else {
        colorLine.classList = "dp-carousel-navbar"
    }

    colorButton.style.transform = "translateX(" + (button.offsetLeft + (button.clientWidth/2) - 20) + "px)";
};

[...navButtons].forEach((navButton) => {
    navButton.addEventListener('click',
    () => {
        targetInt = parseInt(navButton.classList[0].split("dp-carousel-nav__")[1]);
        switchNav(navButton, targetInt);
        switchCarousel(targetInt);
    })
});


[...modalButtons].forEach((modalButton) => {
    modalButton.addEventListener('click',
    () => {
        if (modalButton.firstElementChild) {
            let imgList = document.createElement('div');
            imgList.classList.add('imgs-containers');
            if (modalButton.getAttribute('value')) {
                let j = parseInt(modalButton.getAttribute('value'));
                for (let i = 0; i <= j; i++) {
                    let imgComp = document.createElement('img');
                    if (i == j) {
                        if (i < 10) {
                            i = '0' + i;
                        }
                        imgComp.src = modalButton.firstElementChild.src.replace('thumb', 'original').replace('.png', '-' + i + '.webp');
                        imgList.appendChild(imgComp)
                    } else {
                        if (i < 10) {
                            i = '0' + i;
                        }
                        imgComp.src = modalButton.firstElementChild.src.replace('thumb', 'original').replace('.png', '-' + i + '.png');
                        imgList.appendChild(imgComp)
                    }
                }
            } else {
                let imgComp = document.createElement('img');
                imgComp.src = modalButton.firstElementChild.src.replace('thumb', 'original').replace('.gif', '.webp');
                imgList.appendChild(imgComp)
            }
            
            modalImage.appendChild(imgList);

            bodyContent.classList.toggle('dp-lock');
            modal.classList.toggle('dp-modal-show');
            headContent.classList.toggle('header-hide');
        }
    })
});


[...modalClose].forEach((closeButton) => {
    closeButton.addEventListener('click',
    () => {
        console.log(modalImage)
        modalImage.innerHTML = '';

        bodyContent.classList.toggle('dp-lock');
        modal.classList.toggle('dp-modal-show');
        headContent.classList.toggle('header-hide');
    })
});




window.onload = () => {
    if (navButtons[0]) {
        navButtons[0].click();
    }
}