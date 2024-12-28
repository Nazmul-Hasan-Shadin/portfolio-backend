import { NextFunction, Request, Response, Router } from "express";
import { SkillController } from "./skills.controller";
import { fileUpload } from "../../../utils/fileUploder";

const router = Router();

router.post(
  "/add-skill",
  fileUpload.multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    SkillController.addSkill(req, res, next);
  }
);
router.get("/", SkillController.getAllSKill);
export const SkillRoutes = router;
