var menuBtn = document.getElementById('menu-btn')
var mobileNav = document.getElementsByClassName('mobile-navbar')[0];

menuBtn.addEventListener("click",()=>{
    mobileNav.classList.toggle("active")
})