addEventListener('load', function(){

    var inFridge = [];

    document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {
        searchIngredient(event, inFridge);
    },false);

    document.getElementById("btn-chef").addEventListener("click", function() {
        console.log("please", inFridge);
        displayRecipe(inFridge);
    });

});


function displayRecipe(inFridge){
    // get random value from the fridge
    let randomItem = inFridge[Math.floor(Math.random() * inFridge.length)];

    // using the random ingredient in Fridge, make the url to fetch recipe data
    fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients= +"
        + randomItem + "&number=2&apiKey=c4a09f5e457a454892e45c799796bef0")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (recipes) {
            // console.log("recipes", recipes);

            // Take one random recipe from the recipes
            let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

            // display the title of the recipe
            document.getElementById("titleRecipeOne").innerHTML = randomRecipe.title;

            // display photo of the recipe
            document.getElementById("recipeImage").setAttribute("src", randomRecipe.image);

            // to get the detail (instructions) prepare the url to fetch and give it for return value of this promise
            let urlRecipe = "https://api.spoonacular.com/recipes/" + randomRecipe.id+ "/information?apiKey=c4a09f5e457a454892e45c799796bef0";

            return fetch(urlRecipe)
        })

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            // console.log("we could find here recipe instructions", data);

            // display the instructions part from the data
            document.getElementById("recipeText").innerHTML = data.instructions;
        })



}

function searchIngredient(event, inFridge) {
    event.preventDefault();

    // take the input value of the user
    let input = (document.getElementById("ingredientInput").value).toLowerCase();

    // fetch the data contains all the ingredients with the input character
    fetch("https://api.spoonacular.com/food/ingredients/autocomplete?number=10&query=" + input + "&apiKey=c4a09f5e457a454892e45c799796bef0")

        .then(function (response) {
            if (response.ok === false) {     // fail to fetch(1st) => go to .catch part (at the end)
                throw('Please check correct food name/id again!');
            }
            return response.json();
        })

        .then(function (ingredients) {
            // console.log(ingredients);

            var searchArr = Array.from(ingredients);

            let temp = document.getElementById("tpl-ingr");
            document.getElementById('search-result').innerHTML = '';

            // show all the ingredients contain the input character
            for (let i = 0; i < searchArr.length; i++) {
                let clone = temp.content.cloneNode(true);
                clone.querySelector(".ing-img").src = "https://spoonacular.com/cdn/ingredients_100x100/" + searchArr[i].image;
                clone.querySelector(".ing-name").innerHTML = searchArr[i].name;
                document.getElementById("search-result").appendChild(clone);
            }

            // console.log("searchArr", searchArr);

            // if the ingredient is chosen(clicked), add/remove it to the fridge
            document.querySelectorAll(".ingredient").forEach(function (ingredient) {
                ingredient.addEventListener("click", function(event){
                    event.preventDefault();

                    // Removing : if the ingredient in fridge is clicked, remove it in the fridge.
                    if(ingredient.classList.contains('myIngredient'))  {
                        // make the ingredient disappear in Fridge
                        ingredient.remove();
                        // remove the item in array inFridge
                        let ingredientToRemove = ingredient.innerText.trim();
                        inFridge = inFridge.filter(item => item !== ingredientToRemove);
                        console.log('after removing', inFridge);
                        return;
                    }

                    // Adding : if the ingredient in ingredient list is clicked, put in in the fridge
                    ingredient.classList.remove('ingredient');
                    ingredient.classList.add('myIngredient');
                    inFridge.push(ingredient.innerText.trim());
                    document.getElementById("fridge").appendChild(ingredient);
                    console.log("inFridge", inFridge);

                });
            });

        });

    return inFridge;
}