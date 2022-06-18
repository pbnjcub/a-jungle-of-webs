const jumplinks = document.querySelectorAll("a[href^='#']");

jumplinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
    });
});