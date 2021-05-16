import gsap from 'https://cdn.skypack.dev/gsap';

const BOUNDS = 10;
document.addEventListener('pointermove', ({
    x,
    y
}) => {
    const rX = gsap.utils.mapRange(0, window.innerWidth, -BOUNDS, BOUNDS, x);
    const rY = gsap.utils.mapRange(0, window.innerHeight, BOUNDS, -BOUNDS, y);
    gsap.set('.scene', {
        '--rotate-x': rY,
        '--rotate-y': rX
    });

});