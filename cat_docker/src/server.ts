import express, { NextFunction, Request, Response } from "express";

const server = express();

server.get("/", (request: Request, response: Response) => {
  response.send("<center><h1>Welcome to cats REST API</h1></center>");
});

server.get("/api/cats", (request: Request, response: Response) => {
  response.json(cat);
});

server.listen(4000, () => {
  console.log("listening on http://localhost:4000");
});

const cat = [
  { id: 1, name: "Bumper", age: 4 },
  { id: 2, name: "Pagosh", age: 7 },
  { id: 3, name: "Asphalt", age: 0 },
];
