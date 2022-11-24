import express, {NextFunction, Request, Response} from "express";
import { checkJWT, getJWT } from "./jwt";

const auth_router = express.Router();


auth_router.post("addVacation", async (request:Request,response:Response, next:NextFunction) => {
    const token = request.header["Authorization"];
    const user = request.body.user;
    const userRole = request.body.userRole;

    if (checkJWT(token)) {
        response.header["Authorization"] = getJWT(user,userRole);
        response.status(201)
    } else {
        response.status(401);
    }
});

export default auth_router;
