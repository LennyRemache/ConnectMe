import multer from "multer";
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// a multer storage engine for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // A Cloudinary API object configured in config file
  params: {
    folder: "profile_pics",
    allowedFormats: ["jpg", "png"],
    transformation: [
      {
        width: 500,
        height: 500,
        crop: "limit",
      },
    ],
  },
});

export const upload = multer({ storage: storage }); // middleware for uploading files using multer
