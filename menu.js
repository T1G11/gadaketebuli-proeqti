let Burgerbarmenu = document.getElementById('burger-bar');
let Navmenu = document.getElementById('navigation');

Burgerbarmenu.addEventListener('click',function(){
    Navmenu.classList.toggle('nav-active');
});