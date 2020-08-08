//------- Pop Up -- pages ----------------------------------------------------
let aboutPage = document.getElementById("aboutSmartFridge");
let recipePage = document.getElementById("recipeSmartFridge");
let explainPage = document.getElementById("explainSmartFridge");
let contactPage = document.getElementById("contactSmartFridge");


//------ Buttons -------------------------------------------------------------
let showAboutBtn = document.getElementById('showAbout');
let showRecipeBtn =document.getElementById('navRecipeBtn');
let showExplainBtn = document.getElementById('navExplainBtn');
let showContactBtn =document.getElementById('navContactBtn');
let hideContactBtn =document.getElementById('windowBtn');

//------ Show / hide -- Aboutpage ---------------------------------------------
const showAboutPage = () => {
    aboutPage.classList.replace('about_hidden', 'about_visible');
    recipePage.classList.replace('recipe_visible', 'recipe_hidden');
    explainPage.classList.replace('explain_visible', 'explain_hidden');
    contactPage.classList.replace('contact_visible', 'contact_hidden');
}

const hideAboutPage = () => {
    aboutPage.classList.replace('about_visible', 'about_hidden');
}

window.onload = showAboutPage;
showAboutBtn.addEventListener('click', showAboutPage);
aboutPage.addEventListener('click', hideAboutPage);


//------ Show / hide -- Recipepage --------------------------------------------
const showRecipePage = () => {
    recipePage.classList.replace('recipe_hidden', 'recipe_visible');
    aboutPage.classList.replace('about_visible', 'about_hidden');
    explainPage.classList.replace('explain_visible', 'explain_hidden');
    contactPage.classList.replace('contact_visible', 'contact_hidden');
}

const hideRecipePage = () => {
    recipePage.classList.replace('recipe_visible', 'recipe_hidden');
}


showRecipeBtn.addEventListener('click', showRecipePage);
recipePage.addEventListener('click', hideRecipePage);


//------ Show / hide -- Explainpage -------------------------------------------
const showExplainPage = () => {
    explainPage.classList.replace('explain_hidden', 'explain_visible');
    aboutPage.classList.replace('about_visible', 'about_hidden');
    recipePage.classList.replace('recipe_visible', 'recipe_hidden');
    contactPage.classList.replace('contact_visible', 'contact_hidden');
}

const hideExplainPage = () => {
    explainPage.classList.replace('explain_visible', 'explain_hidden');
}

showExplainBtn.addEventListener('click', showExplainPage);
explainPage.addEventListener('click', hideExplainPage);


//------ Show / hide -- Contactpage -------------------------------------------
const showContactPage = () => {
    contactPage.classList.replace('contact_hidden', 'contact_visible');
    aboutPage.classList.replace('about_visible', 'about_hidden');
    recipePage.classList.replace('recipe_visible', 'recipe_hidden');
    explainPage.classList.replace('explain_visible', 'explain_hidden');
}

const hideContactPage = () => {
    contactPage.classList.replace('contact_visible', 'contact_hidden');
}

showContactBtn.addEventListener('click', showContactPage);
hideContactBtn.addEventListener('click', hideContactPage);