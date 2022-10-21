let button = document.querySelector(".ripple");

button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    let buttonTop = e.target.offsetTop
    let buttonLeft = e.target.offsetLeft

    let xInside = x - buttonLeft
    let yInside = y - buttonTop

    let circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 500);
});
