const fetchRecipes = function (ingredient) {
    $.get(`/recipe/${ingredient}`, function(recipe){
      console.log(recipe)
    });
  }

const fetchRecipesFix = async function (ingredient) {
    let recipe = await $.get(`/recipe/${ingredient}`);
      console.log(recipe);
  }


