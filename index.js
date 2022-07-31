let bird1 = document.getElementById('bird1');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * -5 + 'px';
})