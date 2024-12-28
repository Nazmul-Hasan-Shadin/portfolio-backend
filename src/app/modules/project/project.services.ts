import { Request } from "express";
import prisma from "../../../utils/prisma";

const AddProjectIntoDb = async (req: Request) => {
  console.log(req.file);

  if (req.file) {
    req.body.images = req?.file.path;
  }

  const createProject = await prisma.addProject.create({
    data: req.body,
  });
  return createProject;
};

const getProejectFromdb = async () => {
  const result = await prisma.addProject.findMany({});
  return result;
};

export const ProjectServices = {
  AddProjectIntoDb,
  getProejectFromdb,
};
