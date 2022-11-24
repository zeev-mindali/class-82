import { checkJWT, getJWT, UserType } from "./jwt";

console.log("hello world !!!");

const token = getJWT("zeev",UserType.admin);
console.log (token);
const badToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
console.log(checkJWT(token)?"token ok":"invalid token");