const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

gsap.fromTo("#letterU", {y: -700}, {y:0, duration: 1.5});
gsap.fromTo("#letterK", {y: 700}, {y:0, duration: 1.5, delay: 0.5});
gsap.fromTo("#letterK", {y: 700}, {y:0, duration: 1.5, delay: 0.5});
gsap.fromTo("#intro", {display: "flex", opacity: 1}, {display: "none", opacity: 0, duration: 1, delay: 2});
gsap.fromTo("#main", {display: "none"}, {display: "block", duration: 4});
tl.fromTo("#content", {x: -100},{x: 0, ease: "back.out(2.5)", duration: 1.5, delay: 3});
tl.fromTo("#homeImage", {x: 100},{x: 0, ease: "back.out(2.5)", duration: 1.5, delay: -1.5});
const showMenu = (toggleId, navid, menuId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navid),
    menuIcon = document.getElementById(menuId);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
            menuIcon.classList.toggle('fa-times');
        })
    }
}

showMenu('menu_icon', 'nav_menu', 'menu_icon');