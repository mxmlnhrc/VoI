const logo = document.querySelector('#logo');
const menuBtn = document.querySelector('#burger');
const navigation = document.querySelector('#nav');
const menuNav = document.querySelector('#nav-links');
const Navitems = document.querySelectorAll('#nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toogleMenu);

function toogleMenu()
{
    if(!showMenu){
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        Navitems.forEach(item => item.classList.add('show'));
        logo.classList.add('close');

        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        Navitems.forEach(item => item.classList.remove('show'));
        logo.classList.remove('close');
        
        showMenu = false;
    }
}
