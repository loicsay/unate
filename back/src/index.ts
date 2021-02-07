import express from "express";
import env from "../src/technical/environment";

const app = express();

app.get("/", (_req, res) => res.send("Express + TypeScript server"));

app.listen(env.port, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${env.port}`
  );
});
