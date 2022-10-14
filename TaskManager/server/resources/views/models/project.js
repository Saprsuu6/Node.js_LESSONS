class MyProjects {
  constructor(name, task) {
    if (task != undefined) this.task = task;
    else throw new Error("You have to set task");

    this.creatingDate = new Date().toLocaleString();
  }

  setCreatingDate(date) {
    this.creatingDate = date;
  }
}
