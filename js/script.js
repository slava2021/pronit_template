// var links = document.querySelector(".main-item");
// console.log(links);
// for (var i = 0; i < 3; i++) {

//     links[i].onclick = " ";
// };

// var el = document.getElementsByClassName("sub-menu");
// console.log(el);
// el.className += "active";
var btnClose = document.getElementsByClassName("close");
var linkbtn = document.getElementsByClassName("arrow-menu");
var submenu = document.getElementsByClassName("submenu");

for (var i = 0; i < btnClose.length; i++) {
    btnClose[i].addEventListener("click", closeMenu);
    linkbtn[i].addEventListener("click", remEvent);
};

function remEvent() {
    for (var i = 0; i < submenu.length; i++) {
        submenu[i].removeAttribute("style");
    };
};

function closeMenu() {
    for (var i = 0; i < submenu.length; i++) {
        submenu[i].style.opacity = "0";
    };
};

