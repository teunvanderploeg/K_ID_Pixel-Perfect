new fullpage('#fullPage',{
    autoScrolling: true,
    navigation: true
})

AOS.init();


var spin_nummer1 = document.getElementById('spin_nummer1').innerHTML = Math.floor(Math.random() * 10);
var spin_nummer2 = document.getElementById('spin_nummer2').innerHTML = Math.floor(Math.random() * 10);
var spin_nummer3 = document.getElementById('spin_nummer3').innerHTML = Math.floor(Math.random() * 10);


gsap.from('#spin_nummer1', {duration: 5, x: '-100vw', width: '20em', ease: 'power'});