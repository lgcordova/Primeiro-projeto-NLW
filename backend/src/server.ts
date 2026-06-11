import "reflect-metadata";
import express, { response } from "express";

import {router} from "./routes.js";

import "./database";

const app = express();

app.use(router);

app.listen(3000, () => console.log("server ir running"));