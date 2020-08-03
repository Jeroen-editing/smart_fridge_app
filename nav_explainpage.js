//------------------- Variables ---------------------------------//

let showNavBtn = document.getElementById("showNavbar");
let hideNavBtn = document.getElementById("hideNavbar");

let btnBox = document.getElementById("navBtnBox");
let titleBox = document.getElementById("webpageName");
let explainBox = document.getElementById("appExplain");

let navBar =  document.getElementById("navBar");

//-------------------- Functions ---------------------------------//

const showNavbar = () => {
    navBar.classList.replace("hidden_nav", "visible_nav");
    btnBox.classList.replace("btn_box_visible", "btn_box_hidden");
    titleBox.style.width = "100%";
    explainBox.style.marginTop = "120px";
};

const hideNavbar = () => {
    navBar.classList.replace("visible_nav", "hidden_nav");
    btnBox.classList.replace("btn_box_hidden", "btn_box_visible");
    titleBox.style.width = "80%";
    explainBox.style.marginTop = "60px";
};

//---------------------- Events ----------------------------------//

showNavBtn.addEventListener('click', showNavbar);

hideNavBtn.addEventListener('click', hideNavbar);