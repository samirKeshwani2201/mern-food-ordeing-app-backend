// end points for interacting with all the restaurant in the app 

import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";



const router = express.Router();



router.get("/:restaurantId", param("restaurantId").isString().trim().notEmpty().withMessage("RestaurantId parameter must be a valid string"), RestaurantController.getRestaurant);


router.get("/search/:city", param("city").isString().trim().notEmpty().withMessage("City must be a valid string"), RestaurantController.searchRestaurant);




export default router;