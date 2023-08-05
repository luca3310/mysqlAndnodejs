import express from "express";
import cors from "cors";
import db from "./db";
import createCompanyController from "./controllers/createCompanyController";
import getCompanyController from "./controllers/getCompanyController";
import deleteCompanyController from "./controllers/deleteCompanyController";

const app = express();
const port = 3000;

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());

db.connect(() => {
  app.listen(port);
  console.log(`listening on port ${port}`);
});

app.get("/", getCompanyController);
app.post("/", createCompanyController);
app.delete("/", deleteCompanyController);
