import { fillTaskList, projectName } from "./projects.js";

export async function addAllTasks() {
  const response = fetch("/projects/allTasks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    const response = await res.json();

    for (let i = 0; i < response.length; i++) {
      fillTaskList(response[i], i);
    }
  });
}

export async function addAllProjects() {
  // console.log("asdasd");
}

export async function addPreparedTask(event) {
  const currentLi = event.target.parentNode.parentNode.parentNode;

  const response = fetch("/projects/preparedTask", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      index: currentLi.id,
    }),
  });

  // then
}

export async function addProject(event) {
  if (projectName.value === "") alert("You have to set project name");
}
