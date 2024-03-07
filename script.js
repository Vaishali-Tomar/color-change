var a = document.querySelector(".rect");

a.addEventListener("mousemove", function(details) {
    var rectangle = a.getBoundingClientRect();
    var insiderect = details.clientX - rectangle.left;
    
    gsap.to(".rect", {
        left: (details.clientX - rectangle.width / 2) + 'px', // Update left position correctly
        ease: Power3.easeOut
    });
    
    if (insiderect < rectangle.width / 2) {
        gsap.to(a, {
            backgroundColor: 'red'
        });
    } else {
        gsap.to(a, {
            backgroundColor: 'blue',
            ease: Power4.easeOut
        });
    }
});
a.addEventListener('mouseleave', function(){
    gsap.to(a,{
        backgroundColor:"white",
    });
})