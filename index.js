let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * 2 + 'px';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * -5 + 'px';
})