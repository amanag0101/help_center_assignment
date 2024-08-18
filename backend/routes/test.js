import express from "express";
import { test } from "../controller/test.js";

const router = express.Router();

router.route("/").get(test);

export default router;