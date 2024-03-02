import { Router } from "express";
import { check } from "express-validator";
const roomRouter = Router();

// Controller
import roomController from "../controllers/roomController.js";

// Middleware
import instituteMiddleware from "../middlewares/instituteMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

/**
 * @route GET /api/v1/rooms
 * @desc Get all rooms
 * @access Private
 */


/**
 *  @swagger
 * /api/v1/room/:
 *   post:
 *     summary: Get Room
 *     tags: [Room]
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



roomRouter.get("/", instituteMiddleware, roomController.get_rooms);

/**
 * @route POST /api/v1/institute/rooms
 * @desc Create room for institute
 * @access Private
 */

/**
 *  @swagger
 * /api/v1/room/:
 *   post:
 *     summary: Enter Room Name
 *     tags: [Room]
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



roomRouter.post(
  "/",
  instituteMiddleware,
  [check("name", "Please enter a room name").not().isEmpty()],
  roomController.create_room
);



/**
 *  @swagger
 * /api/v1/room/:room_id/students:
 *   post:
 *     summary: Create Student
 *     tags: [Institute]
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




roomRouter.post(
  '/:room_id/students',
  roleMiddleware,
  [check("email", "Please add a students valid email").isEmail()],
  roomController.addStudentToRoom
)

export default roomRouter;
