function toggleNav() {
    let nav = document.querySelector('.top-nav');
    if (nav.className === 'top-nav') {
        nav.className += " responsive";
    } else {
        nav.className = "top-nav";
    }
}