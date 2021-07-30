const observerEven = new IntersectionObserver(entries => {
    // Loop over the entries
    addClass(entries, 'even');
});

function addClass(entries, className) {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add(className);
        }
    });
}

const observerOdd = new IntersectionObserver(entries => {

    console.log(entries);
    addClass(entries, 'odd');
});
function addObserver(name, observer) {
    var oddClasses = $(name);
    oddClasses.each(
        function () {
            observer.observe(this);
        }
    )
}

addObserver('.editorial__device-image-odd', observerOdd);
addObserver('.editorial__device-image', observerEven)
