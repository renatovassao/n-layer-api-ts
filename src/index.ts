import { json } from "body-parser";
import express from "express";

import { knex } from "./data/knex";
import { router } from "./routes";

const app = express();

app.use(json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", router);

knex
  .raw("SELECT 1;")
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch(console.error);
