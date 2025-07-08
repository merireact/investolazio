document.addEventListener('click', function(event) {

    const burgerBtn = document.getElementById('burger_btn');

    if (event.target.closest('#burger_btn')) {

        const mainMenu = document.getElementById('main_nav');

        if (mainMenu) {
            mainMenu.classList.toggle('is-open');
        }
    }
});
