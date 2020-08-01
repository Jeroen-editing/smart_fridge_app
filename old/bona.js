let inFridge = []; // try to find the way to make it Non-global variable

addEventListener('load', function(){

    document.getElementsByTagName("form")[0].addEventListener("submit", searchIngredient,false);
    document.getElementById('btn-chef').addEventListener("click", displayRecipe);

});



function displayRecipe(){
    console.log('clicked');

    // get random value from the fridge
    let randomItem = inFridge[Math.floor(Math.random() * inFridge.length)];
    console.log(randomItem);

    // using the random value, make the url to fetch

    fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients= +"
        + randomItem + "&number=2&apiKey=cbde5b97f31b48b8976bebad253b51b6")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (recipes) {
            console.log("recipes", recipes);

            // random recipe from the recipes

            let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
            console.log(randomRecipe);

            // display the title
            document.getElementById("titleRecipeOne").innerHTML = randomRecipe.title;

            // display foto
            document.getElementById("recipeImage").setAttribute("src", randomRecipe.image);



        })


}

function searchIngredient(event) {
    event.preventDefault();

    let input = document.getElementById("ingredientInput").value;
    input = input.toLowerCase();

    fetch("https://api.spoonacular.com/food/ingredients/autocomplete?number=10&query=" + input + "&apiKey=cbde5b97f31b48b8976bebad253b51b6")

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

            for (let i = 0; i < searchArr.length; i++) {
                let clone = temp.content.cloneNode(true);
                clone.querySelector(".ing-img").src = "https://spoonacular.com/cdn/ingredients_100x100/" + searchArr[i].image;
                clone.querySelector(".ing-name").innerHTML = searchArr[i].name;
                document.getElementById("search-result").appendChild(clone);
            }

            document.querySelectorAll(".ingredient").forEach(function (ingredient) {
                ingredient.addEventListener("click", function(event){
                    console.log("ingredient", ingredient);
                    ingredient.classList.remove('ingredient');
                    ingredient.classList.add('myIngredient');
                    event.preventDefault();
                    inFridge.push(ingredient.innerText.trim());
                    document.getElementById("fridge").appendChild(ingredient);
                    console.log("inFridge", inFridge);
                });
            });
        })
}





/*
fetch("https://api.spoonacular.com/food/ingredients/" + input + "/information?apiKey=33c984ce6fdc480286987ff3bd3aaa5c")

    .then(function (response) {
        if (response.ok === false) {     // fail to fetch(1st) => go to .catch part (at the end)
            throw('Please check correct food name/id again!');
        }
        return response.json();
    })

    .then(data => {
        console.log("original data", data);
        document.getElementById("text").innerHTML = data.name;
        document.getElementById("ingredient-img").src = "https://spoonacular.com/cdn/ingredients_100x100/"+data.image
    });
*/


/*
*     document.querySelectorAll('.myIngredient').forEach(function (ingredient) {
        ingredient.addEventListener("click", function(event){
            event.preventDefault();
            inFridge.filter(function(element){
                return element != ingredient.innerText.trim()});
            document.getElementById("contentRecipeOne").removeChild(ingredient);
            console.log("inFridge", inFridge);
        });
    });*/