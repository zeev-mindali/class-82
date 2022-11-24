export enum UserType {
  "admin",
  "user",
  "guest",
  "company",
  "adv",
}
import jwt from "jsonwebtoken";
//jwt header(encoding).payload(data).signature

const expTimeInMin = 30;
const JWT_SECRET_KEY = "Zeevik-The-Fox";

export const getJWT = (userName: string, userRole: UserType) => {
  let data = {
    iat: Date.now(),
    user: userName,
    role: userRole,
    exp: Math.floor(Date.now() / 1000) + 60 * expTimeInMin,
  };
  const token = jwt.sign(data, JWT_SECRET_KEY);
  return token;
};

export const checkJWT = (token: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    try {
      jwt.verify(token, JWT_SECRET_KEY, (err: any, user: any) => {
        if (err) reject(err);
        resolve(true);
      });
    } catch (err) {
      console.log(err);
      reject(false);
    }
  });
};
