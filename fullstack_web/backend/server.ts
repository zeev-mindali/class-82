import {
  ClientError,
  IdNotFoundError,
  RouteNotFoundError,
  ValidationError,
} from "./model/client-errors";

let err1 = new RouteNotFoundError("/eden");
let err2 = new ValidationError("Jiny is here , uffffff");

//err1.showError();
//err2.showError();

let err3 = new IdNotFoundError(128);
err3.showError();
