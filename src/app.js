import express from "express";
import { testFunction } from "./mockTest.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/test", (_req, res) => {
  console.log("=======");
  const result = testFunction();
  res.status(200).send({ message: result });
});

export default app;
