import { NextFunction, Request, Response } from "express";

function catchAll(
  err: any,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  //log error to console
  console.log(err);

  //log error to log file

  const statusCode = err.status ? err.status : 500;
  //return error to frontend
  response.status(statusCode).send(err.message);
}

export default catchAll;
