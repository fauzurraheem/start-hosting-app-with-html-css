var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector(".modal__action--negative");
var planbutton = document.querySelectorAll('.article .button');
var tbutton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav');
var callbutton = document.querySelector('p_li')


// console.dir(planbutton);
for (var i = 0; i < planbutton.length; i++) {
    planbutton [i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
        
    });
    
}
backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    closeModal();
});

modalNoButton.addEventListener("click", closeModal);

function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
}

tbutton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});


callbutton.addEventListener('animationstart',function (event) {
    console.log('Animation started',event);
})

callbutton.addEventListener('animationend',function (event) {
    console.log('Animation ended',event);
})

callbutton.addEventListener('animationiteration',function (event) {
    console.log('Animation iteration',event);
})