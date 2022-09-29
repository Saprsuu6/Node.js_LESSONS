import { User } from "./User.js";

export function writeUserToFile (email, psw) {
    var user = new User(email, psw); 
    user.writeFile();
}