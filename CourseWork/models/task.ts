export const preorities: string[] = ["🥉", "🥈", "🥇"];

export class MyTask {
    creatingDate: Date
    name: string;
    terms: Date;
    description: string;
    tags: string[];
    preority: string;

    constructor(name: string, terms: Date,
        descrition: string, tags: string[] = [], preority: string) {
        if (name != null) this.name = name.trim().toLocaleLowerCase();
        else new Error("You have to set name!");

        if (terms != null) this.terms = terms;
        else new Error("You have to set terms!");

        this.description = descrition.trim().toLocaleLowerCase();
        this.tags = tags;

        if (preority != null) this.preority = preority.trim().toUpperCase();
        else new Error("You have to set preority!");

        this.creatingDate = new Date();
    }

    toString() {
        return `Name: ${this.name}\nTerms: ${this.terms.toLocaleString()}\n` +
            `Description: ${this.description}\n` +
            `Tags: ${this.tags.length > 0 ? this.tags : "---"}\n` +
            `Preority: ${this.preority}`;
    }
}

// var task = new MyTask("Task1", new Date, "Some description", undefined, "HIGHT");
// console.log(task.toString());