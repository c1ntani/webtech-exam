const express = require("express");

const {
  loginUser
} = require("../controllers/auth");

const {
    createRecipes,
    updateRecipes,
    replaceRecipes,
    deleteRecipes,
    getAllRecipesForFree,
    getStepsOverview,
    getDetailsSteps,
    getSingleSteps,
    getAllRecipesForPremium,
    getStepsOverviewPremium,
    getDetailsStepsPremium,
    getSingleStepsPremium,
    searchIngredient,
    searchIngredientsListAll
} = require("../controllers/recipes");

const { isLoggedIn, isAdmin, isFree, isPremium } = require("../middleware/user");
const router = express.Router();


router.route("/login").post(loginUser); // login user

router.route("/recipe").post(isLoggedIn, isAdmin, createRecipes); // create recipes
router.route("/recipe/:recipe_id").patch(isLoggedIn, isAdmin, updateRecipes); // update recipes
router.route("/recipe/:recipe_id").put(isLoggedIn, isAdmin, replaceRecipes); // Replace recipes
router.route("/recipe/:recipe_id").delete(isLoggedIn, isAdmin, deleteRecipes); // delete recipes

router.route("/recipe").get(isLoggedIn, getAllRecipesForFree); // Get All free recipes
router.route("/recipe/:recipe_id").get(isLoggedIn, getStepsOverview); // Get step overview by recipes id
router.route("/recipe/:recipe_id/all").get(isLoggedIn, getDetailsSteps); // Get details stpes
router.route("/recipe/:recipe_id/:step_id").get(isLoggedIn, getSingleSteps); // Get details stpes

router.route("/recipe-premium/").get(isLoggedIn, isPremium, getAllRecipesForPremium); // Get details stpes
router.route("/recipe-premium/:recipe_id").get(isLoggedIn, isPremium, getStepsOverviewPremium); // Get step overview by recipes id
router.route("/recipe-premium/:recipe_id/all").get(isLoggedIn, isPremium, getDetailsStepsPremium); // Get details stpes
router.route("/recipe-premium/:recipe_id/:step_id").get(isLoggedIn, isPremium, getSingleStepsPremium); // Get details stpes


router.route("/search/:ingredient").get(isLoggedIn, isPremium, searchIngredient); // Get details stpes
router.route("/ingredients/:ingredient").get(isLoggedIn, isPremium, searchIngredientsListAll); // Get details stpes

module.exports = router;