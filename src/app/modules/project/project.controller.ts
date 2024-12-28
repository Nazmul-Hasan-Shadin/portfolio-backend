import { Request, Response } from "express";
import { ProjectServices } from "./project.services";
import catchAsync from "../../../utils/CatchAsync";
import sendResponse from "../../../utils/sendResponse";

const addProjectController = catchAsync(async (req, res, next) => {
  const { name, projectLink, description } = req.body;
  const result = await ProjectServices.AddProjectIntoDb(req);
  sendResponse(res, {
    statusCode: 200,
    message: "project created successful",
    success: true,
    data: result,
  });
});
const getProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getProejectFromdb();
  sendResponse(res, {
    statusCode: 200,
    message: "project retrived successful",
    success: true,
    data: result,
  });
});
export const ProjectController = {
  addProjectController,
  getProject,
};
