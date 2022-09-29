"use strict";
exports.__esModule = true;
exports.MyTask = exports.preorities = void 0;
exports.preorities = ["🥉", "🥈", "🥇"];
var MyTask = /** @class */ (function () {
    function MyTask(name, terms, descrition, tags, preority) {
        if (tags === void 0) { tags = []; }
        if (name != null)
            this.name = name.trim().toLocaleLowerCase();
        else
            new Error("You have to set name!");
        if (terms != null)
            this.terms = terms;
        else
            new Error("You have to set terms!");
        this.description = descrition.trim().toLocaleLowerCase();
        this.tags = tags;
        if (preority != null)
            this.preority = preority.trim().toUpperCase();
        else
            new Error("You have to set preority!");
        this.creatingDate = new Date();
    }
    MyTask.prototype.toString = function () {
        return "Name: ".concat(this.name, "\nTerms: ").concat(this.terms.toLocaleString(), "\n") +
            "Description: ".concat(this.description, "\n") +
            "Tags: ".concat(this.tags.length > 0 ? this.tags : "---", "\n") +
            "Preority: ".concat(this.preority);
    };
    return MyTask;
}());
exports.MyTask = MyTask;
// var task = new MyTask("Task1", new Date, "Some description", undefined, "HIGHT");
// console.log(task.toString());
