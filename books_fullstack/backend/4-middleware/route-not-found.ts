import { NextFunction, Request, Response } from "express";
import { RouteNotFoundError } from "../3-models/client-errors";

function routeNotFound(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  //localhost:3003/zeevik
  //request.originalUrl => /zeevik
  const err = new RouteNotFoundError(request.originalUrl);
  next(err);
}

export default routeNotFound;
