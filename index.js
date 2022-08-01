let bird1 = document.getElementById('butterfly');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    butterfly.style.top = value * -1.5 + 'px';
    butterfly.style.left = value * -5 + 'px';
})