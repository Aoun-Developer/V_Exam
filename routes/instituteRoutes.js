import { Router } from "express";
import { check } from "express-validator";
const institute_router = Router();

// Controllers
import instituteController from "../controllers/instituteController.js";

/**
 * @route POST /api/v1/institute/register
 * @desc register in user
 * @access public
 */

institute_router.post(
  "/register",
  [
    check("name", "Please enter institute name").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please Enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("phone", "Please Enter a valid phone number").isLength({
      min: 10,
      max: 13,
    }),
  ],
  instituteController.register_institute
);

institute_router.post("/login", [
  check("email", "Please enter your valid email").isEmail(),
  check("password", "Please enter your valid password").exists(),
],
instituteController.login_institute
);

export default institute_router;
