import { Request } from "express";
import prisma from "../../../utils/prisma";

const addSkillService = async (req: Request) => {
  if (req.file) {
    req.body.image = req?.file.path;
  }

  const newSkill = await prisma.skill.create({
    data: req.body,
  });
  return newSkill;
};
const getAllSkill = async () => {
  const newSkill = await prisma.skill.findMany({});
  return newSkill;
};

export const SkillServices = {
  addSkillService,
  getAllSkill,
};
