import fs from "fs"

export class User {
    constructor(email, psw){
        if (email === '' || psw === '') {
            new Error("Empty data");
        }

        this.email =email;
        this.psw = psw;
    }

    writeFile() {
        fs.writeFile('user.txt', `Email: ${this.email}, Psw: ${this.psw}`, (err) => {
             if (err) throw err; 
        });
    }
}