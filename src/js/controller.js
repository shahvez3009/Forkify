import * as model from "./model.js";

import recipeView from "./views/recipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import recipeView from "./views/recipeView.js";

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};
["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);
