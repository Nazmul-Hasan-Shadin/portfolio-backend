import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: "dxhf5qlpi",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SEC,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

const multerUpload = multer({ storage });

export const fileUpload = {
  multerUpload,
};
