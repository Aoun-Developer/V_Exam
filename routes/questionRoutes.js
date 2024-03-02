import express from "express";
import { check } from "express-validator";
import questionController from "../controllers/questionController.js";

const router = express.Router();

// Middleware
import roleMiddleware from "../middlewares/roleMiddleware.js";

/**
 * @route GET /api/v1/questions/room/:roomId
 * @desc Get questions for a specific room
 * @access Public (accessible to students)
 */


/**
 *  @swagger
 * /api/v1/questions/:roomId:
 *   post:
 *     summary: Get Questions
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password (at least 6 characters)
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             example:
 *               token: <JWT_TOKEN>
 *       400:
 *         description: Bad request (validation errors)
 *             
 *       409:
 *         description:  Bad request ( user not exists)
 *         
 *       500:
 *         description: Internal server error
 */


// ---------------------------------------------------------------------------------------
router.get("/:room_id", questionController.getQuestionsForRoom);

/**
 * @route POST /api/v1/questions
 * @desc Create a new question
 * @access Private (for institute admins and teachers)
 */



/**
 *  @swagger
 * /api/v1/question/:roomId:
 *   post:
 *     summary: Create Question
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password (at least 6 characters)
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             example:
 *               token: <JWT_TOKEN>
 *       400:
 *         description: Bad request (validation errors)
 *             
 *       409:
 *         description:  Bad request ( user not exists)
 *         
 *       500:
 *         description: Internal server error
 */




// ---------------------------------------------------------------------------------------

router.post(
  "/:room_id",
  roleMiddleware,
  [
    check("text", "Question text is required").not().isEmpty(),
    check("type", "Invalid question type").isIn([
      "single-choice",
      "multi-choice",
    ]),
    check("options").isArray().optional(),
    check("correctAnswer", "Correct answer is required").not().isEmpty(),
  ],
  questionController.createQuestion
);

export default router;
