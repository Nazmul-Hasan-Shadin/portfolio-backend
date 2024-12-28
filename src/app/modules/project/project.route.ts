import express from "express";
import { ProjectServices } from "./project.services";
import { ProjectController } from "./project.controller";
import { fileUpload } from "../../../utils/fileUploder";

const router = express();
router.get("/", ProjectController.getProject);
router.post(
  "/create-project",
  fileUpload.multerUpload.single("file"),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);

    ProjectController.addProjectController(req, res, next);
  }
);

export const ProjectRoutes = router;
