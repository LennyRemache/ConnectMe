import express from "express";
import { getUser, updateTitle, updateBio } from "../controllers/users.js";

const router = express.Router();

// User based on ID
router.get("/:userName", getUser);
router.put("/:userName/title", updateTitle);
router.put("/:userName/bio", updateBio);

export default router;
