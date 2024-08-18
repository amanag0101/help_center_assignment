import express from "express";
import { createCard, getAllCards, getCardByTitle } from "../controller/card.js";

const router = express.Router();

/**
 * @swagger
 * /card:
 *   get:
 *     summary: Retrieve a list of cards
 *     description: Fetch all cards from the database.
 *     responses:
 *       200:
 *         description: A list of cards
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: "Card Title"
 *                       description:
 *                         type: string
 *                         example: "Card Description"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 *                 data:
 *                   type: object
 *                   properties:
 *                     msg:
 *                       type: string
 *                       example: Failed to get all the cards.
 */
router.route("/").get(getAllCards);

/**
 * @swagger
 * /card/{title}:
 *   get:
 *     summary: Retrieve a card by its title
 *     description: Fetch a card from the database using its title.
 *     parameters:
 *       - in: path
 *         name: title
 *         required: true
 *         description: Title of the card to retrieve
 *         schema:
 *           type: string
 *           example: "Card Title"
 *     responses:
 *       200:
 *         description: A card object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Card Title"
 *                     description:
 *                       type: string
 *                       example: "Card Description"
 *       404:
 *         description: Card not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Bad Request
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 *                 data:
 *                   type: object
 *                   properties:
 *                     msg:
 *                       type: string
 *                       example: Failed to get card with title.
 */
router.route("/:title").get(getCardByTitle);

/**
 * @swagger
 * /card:
 *   post:
 *     summary: Create a new card
 *     description: Creates a new card with a unique title and a description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the card (must be unique).
 *                 example: "New Card Title"
 *               description:
 *                 type: string
 *                 description: A description of the card.
 *                 example: "This is the description of the new card."
 *     responses:
 *       201:
 *         description: Card created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Card created successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "New Card Title"
 *                     description:
 *                       type: string
 *                       example: "This is the description of the new card."
 *       400:
 *         description: Validation error or card already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Validation error"
 *                 data:
 *                   type: object
 *                   properties:
 *                     msg:
 *                       type: array
 *                       items:
 *                         type: string
 *                         example: "A card with the same title is already created!"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 *                 data:
 *                   type: object
 *                   properties:
 *                     msg:
 *                       type: string
 *                       example: "Failed to create a new card!"
 */
router.route("/").post(createCard);

export default router;
