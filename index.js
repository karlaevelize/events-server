const express = require("express");
const port = 4001;
const db = require("./db");
const Event = require("./event/model");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./event/router");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(router);

app.listen(port, () => console.log(`Hey, I'm listening on port ${port}!`));
