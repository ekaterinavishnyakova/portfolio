function parallax(areaName) {
    const area = document.querySelector(areaName);
    const layers = area.querySelectorAll('.js-parallax__layer');

    window.addEventListener('scroll', function () {
        const coord = area.getBoundingClientRect();

        if (coord.top < area.clientHeight && coord.bottom > 0) {
            const windowScroll = window.pageYOffset;
            Array.from(layers).forEach(layer => {
                const scrollSpeed = layer.dataset.speed;
                const strafe = windowScroll * scrollSpeed / 8;

                layer.style.transform = `translateY(-${strafe}px)`;
            });
        }
    });
}
parallax('.js-parallax__feedback');
parallax('.js-parallax__mainidea');
