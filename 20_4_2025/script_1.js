// Ngày tháng
const date = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};
document.getElementById("current-date").textContent = date.toLocaleDateString(
  "en-US",
  options
);

// Thêm task
const input = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector("#to-do");
const list_done = document.querySelector("#done-task");

let id = 0;
let todo = 0;
let done = 0;

const addNewTask = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask("");
  }

  if (todo > 0) {
    document.getElementById("task-notification").innerHTML = "To Do";
  } else {
    document.getElementById("task-notification").innerHTML = "No tasks defined";
  }
};

function addTask(Text) {
  let text;

  if (Text !== "") {
    text = Text;
  } else {
    text = input.value.trim();
  }

  if (text !== "") {
    todo++;

    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const line = document.createElement("div");
    line.classList.add("content");
    line.textContent = text;

    newTask.addEventListener("click", () => {
      addTaskDone(text);
      todo--;
      newTask.remove();

      if (todo > 0) {
        document.getElementById("task-notification").innerHTML = "To Do";
      } else {
        document.getElementById("task-notification").innerHTML =
          "No tasks defined";
      }
    });

    newTask.appendChild(line);
    list.appendChild(newTask);

    input.value = "";
  }
}

function addTaskDone(text) {
  done++;
  const doneTask = document.createElement("div");
  doneTask.classList.add("task");

  const line = document.createElement("div");
  line.classList.add("content", "complete");
  line.textContent = text;

  doneTask.addEventListener("click", () => {
    done--;
    doneTask.remove();
    addTask(text);

    if (done > 0) {
      document.getElementById("task-done-notification").innerHTML = "Complete";
    } else {
      document.getElementById("task-done-notification").innerHTML = "";
    }
  });

  doneTask.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    done--;
    doneTask.remove();

    if (done > 0) {
      document.getElementById("task-done-notification").innerHTML = "Complete";
    } else {
      document.getElementById("task-done-notification").innerHTML = "";
    }
  });

  doneTask.appendChild(line);
  list_done.appendChild(doneTask);

  if (done > 0) {
    document.getElementById("task-done-notification").innerHTML = "Complete";
  } else {
    document.getElementById("task-done-notification").innerHTML = "";
  }
}

form.addEventListener("keydown", addNewTask);
