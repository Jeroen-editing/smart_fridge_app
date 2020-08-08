//------------------- Variables ---------------------------------//

let showNavBtn = document.getElementById("showNavbar");
let hideNavBtn = document.getElementById("hideNavbar");

let aboutBtn = document.getElementById("showAbout");

let btnBox = document.getElementById("navBtnBox");
let titleBox = document.getElementById("webpageName");
let headerBox = document.getElementById("headerBox");
let searchBox = document.getElementById("searchBox");

let navBar =  document.getElementById("navBar");


//-------------------- Show/hide NAV Functions ---------------------------------//

const showNavbar = () => {
    navBar.classList.replace("hidden_nav", "visible_nav");
    btnBox.classList.replace("btn_box_visible", "btn_box_hidden");
    titleBox.style.width = "100%";
    headerBox.style.top = "51px";
    searchBox.style.marginTop = "111px";
};

const hideNavbar = () => {
    navBar.classList.replace("visible_nav", "hidden_nav");
    btnBox.classList.replace("btn_box_hidden", "btn_box_visible");
    titleBox.style.width = "76%";
    headerBox.style.top = "0px";
    searchBox.style.marginTop = "61px";
};

//---------------------- Show/hide NAV Events ----------------------------------//

showNavBtn.addEventListener('click', showNavbar);

hideNavBtn.addEventListener('click', hideNavbar);