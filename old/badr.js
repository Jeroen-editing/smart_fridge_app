let fridge = ['tomato', 'kiwi', 'egg', 'onion'];

document.getElementById("btn-chef").addEventListener("click", function () {
// get random value from the fridge


    let randomItem = fridge[Math.floor(Math.random() * fridge.length)];
    console.log(randomItem);


// using the random value, make the url to fetch

    fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients= +" + randomItem + "&number=2&apiKey=33c984ce6fdc480286987ff3bd3aaa5c")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (recipes) {
            console.log("recipes", recipes);

            // random recipe from the recipes

            let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
            console.log("chosen", randomRecipe);

            // display the title
            document.getElementById("titelReceipOne").innerHTML = randomRecipe.title;

            console.log(randomRecipe.title);
            console.log(randomRecipe.image);
            // display foto

            document.getElementById("recipeimage").setAttribute("src", randomRecipe.image);
            // display how to cook


            let recipeId = randomRecipe.id;
            console.log("recipeId", recipeId);

            let urlRecipe = "https://api.spoonacular.com/recipes/" + recipeId+ "/information?apiKey=33c984ce6fdc480286987ff3bd3aaa5c";

            return fetch(urlRecipe)

        })

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log("find here recipe", data.instructions);
        })


        .catch(function () {

        });

});


