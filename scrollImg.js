var scroll = window.requestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.scrollImg');

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
        else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport (el) { //from https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}