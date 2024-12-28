import prisma from "../../../utils/prisma";

const AddProjectIntoDb = async (payload: any) => {
  const { name, description, projectLink } = payload;
  const createProject = await prisma.addProject.create({
    data: {
      name,
      projectLink,
      description,
    },
  });
  return createProject;
};
