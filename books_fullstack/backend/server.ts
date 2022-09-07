import express from "express";
import cors from "cors";
import config from "./2-utils/config";
import catchAll from "./4-middleware/catch-all";
import routeNotFound from "./4-middleware/route-not-found";
//routeNotFound -> middleware
//routes        -> routes

const server = express();

//give the server to handle cors -> cross origin
server.use(cors());
//the server will return our data with json format
server.use(express.json());
// routes
// route not found
server.use("*",routeNotFound)
// catch all
server.use(catchAll)

server.listen(config.port, () =>
  console.log("listening on port http://localhost:" + config.port)
);
