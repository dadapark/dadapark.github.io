const navButtons = document.querySelectorAll("[class^=dp-carousel-nav__]");
const currentCarousel = document.getElementsByClassName("dp-carousel-board")[0];
const colorButton = document.getElementsByClassName("dp-carousel-navbar-circle")[0];
const modalButtons = document.querySelectorAll("div.dp-carousel-board-item");
const colorLine = (colorButton ? colorButton.parentElement : false);
const bodyContent = document.getElementsByTagName('body')[0];
const modal = document.getElementsByClassName('dp-modal')[0];

// (i, int)
const switchCarousel = (i) => {
    targetCarousel = document.getElementsByClassName("dp-carousel-board__" + i)[0]
    currentCarousel.style.transform = "translateX(-" + targetCarousel.offsetLeft + "px)"
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
        bodyContent.classList.toggle('dp-lock');
        modal.classList.toggle('dp-modal-show');
    })
})




window.onload = () => {
    if (navButtons[0]) {
        navButtons[0].click();
    }
}