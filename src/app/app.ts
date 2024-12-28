import express, { urlencoded } from "express";
import cors from "cors";
import { ProjectRoutes } from "./modules/project/project.route";
import { SkillRoutes } from "./modules/skills/skills.route";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", ProjectRoutes);
app.use("/api/v1/skill", SkillRoutes);

app.get("/", (req, res) => {
  res.send("server is listenting");
});
export default app;
