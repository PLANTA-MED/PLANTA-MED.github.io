window.addEventListener('scroll', function () {
    var header = document.getElementById('sticky-header');
    var rect = header.getBoundingClientRect();

    if (rect.top <= 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('a.smooth-scroll');

    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', scrollToSection);
    }

    function scrollToSection(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            var targetOffset = targetElement.offsetTop - 100;
            window.scrollTo(0, targetOffset);
        }
    }
});
