import MyTask from "../models/task.js";
import tasks from "../tasks.js";

const taskName = document.getElementById("name");
const radioDatetime = document.getElementById("radioDatetime");
const radioDate = document.getElementById("radioDate");
const taskTermsDatetime = document.getElementById("datetime");
const taskTermsDate = document.getElementById("date");
const taskDescribe = document.getElementById("describe");
const taskTags = document.getElementById("tags");
const submitBtn = document.getElementById("submitBtn");
const editBtn = document.getElementById("editBtn");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const taskList = document.getElementById("taskList");
const taskId = document.getElementById("id");

radioDatetime.addEventListener("change", (event) => {
  inverceDateTime(true);
});

radioDate.addEventListener("change", (event) => {
  inverceDateTime(false);
});

taskTags.addEventListener("input", (event) => {
  taskTags.value = taskTags.value.toLowerCase().trim();
});

let rewriteIndexes = () => {
  for (var i = 0; i < taskList.childElementCount; i++) {
    taskList.childNodes[i].id = i;
  }
};

let getPriority = () => {
  if (radio1.checked) return "hight";
  else if (radio2.checked) return "middle";
  else if (radio3.checked) return "low";
};

let addTask = (response) => {
  const task = new MyTask(
    response.name,
    response.terms,
    response.describe,
    response.tags,
    response.priority
  );
  tasks.splice(0, 0, task); // злокачественная опухоль

  var first = taskList.childNodes[0];
  var element = task.returnTaskTeg();
  taskList.insertBefore(element, first);

  setButtonsEvents(element);

  rewriteIndexes();
};

let setButtonsEvents = (element) => {
  var buttons = element.getElementsByTagName("button");

  buttons.edit.addEventListener("click", eventEditTask);
  buttons.remove.addEventListener("click", eventRemoveTask);
};

let removeTask = (response) => {
  var removed = taskList.childNodes[response];
  taskList.removeChild(removed);

  rewriteIndexes();

  tasks.splice(response, 1);
};

let editTask = (response) => {
  tasks[response.index] = response.task;
  var currentLi = taskList.childNodes[response.index];

  const task = new MyTask(
    response.task.name,
    response.task.terms,
    response.task.describe,
    response.task.tags,
    response.task.priority
  );

  var element = task.returnTaskTeg();
  element.id = currentLi.id;
  taskList.replaceChild(element, currentLi);

  setButtonsEvents(element);

  submitBtn.disabled = false;
  editBtn.disabled = true;
};

let clearFields = () => {
  if (taskName.value != "") {
    taskName.value = "";
    taskTermsDate.value = "";
    taskTermsDatetime.value = "";
    taskDescribe.value = "";
    taskTags.value = "";
    radio1.checked = true;
    radioDate.checked = true;
    taskTermsDate.removeAttribute("disabled");
    taskTermsDatetime.setAttribute("disabled", "true");
  }
};

submitBtn.addEventListener("click", async (event) => {
  if (taskName.value === "") alert("You have to set task name");
  else if (taskTermsDatetime.value === "" && taskTermsDate.value === "")
    alert("You have to set task terms");
  else {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: taskName.value.trim(),
        terms: radioDate.checked
          ? taskTermsDate.value
          : taskTermsDatetime.value,
        describe: taskDescribe.value.trim(),
        tags: taskTags.value === "" ? undefined : taskTags.value.trim(),
        priority: getPriority(),
      }),
    }).then(async (res) => {
      clearFields();
      const response = await res.json();
      addTask(response);
    });
  }
});

editBtn.addEventListener("click", async (event) => {
  var currentLiIndex = taskId.value;

  const response = fetch("/", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      index: currentLiIndex,
      name: taskName.value.trim(),
      terms: radioDate.checked ? taskTermsDate.value : taskTermsDatetime.value,
      describe: taskDescribe.value.trim(),
      tags: taskTags.value === "" ? undefined : taskTags.value.trim(),
      priority: getPriority(),
    }),
  }).then(async (res) => {
    clearFields();
    const response = await res.json();
    editTask(response);
  });
});

async function eventRemoveTask(event) {
  var currentLi =
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode;

  const response = fetch("/", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      index: currentLi.id,
    }),
  }).then(async (res) => {
    clearFields();
    const response = await res.json();
    removeTask(response);
  });
}

async function eventEditTask(event) {
  clearFields();

  var index =
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;

  taskId.value = index;
  taskName.value = tasks[index].name;
  tasks[index].terms.includes("T")
    ? (inverceDateTime(true), (taskTermsDatetime.value = tasks[index].terms))
    : (inverceDateTime(false), (taskTermsDate.value = tasks[index].terms));
  taskDescribe.value =
    tasks[index].describe === "---" ? "" : tasks[index].describe;
  taskTags.value = tasks[index].tags === "---" ? "" : tasks[index].tags;
  switch (tasks[index].priority) {
    case "hight":
      radio1.checked = true;
      break;
    case "middle":
      radio2.checked = true;
      break;
    case "low":
      radio3.checked = true;
      break;
  }

  submitBtn.disabled = true;
  editBtn.disabled = false;
}

let inverceDateTime = (flag) => {
  if (flag) {
    radioDatetime.checked = true;
    taskTermsDatetime.disabled = false;
    taskTermsDate.disabled = true;
  } else {
    radioDate.checked = true;
    taskTermsDatetime.disabled = true;
    taskTermsDate.disabled = false;
  }
};
