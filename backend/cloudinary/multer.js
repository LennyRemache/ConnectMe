import multer from "multer";
import cloudinary from "cloudinary";
import cloudinaryStorage from "multer-storage-cloudinary";

// a multer storage engine for Cloudinary
const storage = cloudinaryStorage({
  folder: "profile_pics",
  allowedFormats: ["jpg", "png"],
  transformation: [
    {
      width: 500,
      height: 500,
      crop: "limit",
    },
  ],
  cloudinary: cloudinary, // A Cloudinary API object configured in config file
});

export const upload = multer({ storage: storage }); // middleware for uploading files using multer
