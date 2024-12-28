import { Request, Response } from "express";
import catchAsync from "../../../utils/CatchAsync";
import { SkillServices } from "./skills.services";
import sendResponse from "../../../utils/sendResponse";

export const addSkill = catchAsync(async (req, res) => {
  const { name, image } = req.body;

  const skill = await SkillServices.addSkillService(req);
  sendResponse(res, {
    statusCode: 200,
    message: "skill added successful",
    success: true,
    data: skill,
  });
});
export const getAllSKill = catchAsync(async (req, res) => {
  const skill = await SkillServices.getAllSkill();
  sendResponse(res, {
    statusCode: 200,
    message: "skill retrived successful",
    success: true,
    data: skill,
  });
});

export const SkillController = {
  addSkill,
  getAllSKill,
};
