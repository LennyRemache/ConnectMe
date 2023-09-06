import express from "express";
import {
  getUser,
  updateTitle,
  updateBio,
  updatePicture,
} from "../controllers/users.js";
import { upload } from "../cloudinary/multer.js";

const router = express.Router();

// User based on ID
router.get("/:userName", getUser);
router.put("/:userName/title", updateTitle);
router.put("/:userName/bio", updateBio);
router.put("/:userName/picture", upload.single("profilePic"), updatePicture);

export default router;
