import express from "express";
import { test } from "../controller/test.js";

const router = express.Router();

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Test API
 *     description: A simple API to test if the service is working.
 *     responses:
 *       200:
 *         description: Test API working successfully
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
 *                   example: "Test API working."
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
 *                   example: "Some error occurred. Please try again."
 *                 data:
 *                   type: object
 *                   example: {}
 */
router.route("/").get(test);

export default router;