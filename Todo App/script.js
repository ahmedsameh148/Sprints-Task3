//"use strict";
let tasks = [];
let Editing = false;

const getPriorityName = function (priority) {
  switch (priority) {
    case "1":
      return "High";
    case "2":
      return "Medium";
    case "3":
      return "Low";
    default:
      return "";
  }
};

const Save = function(i){
  if(!confirm("Are You Sure You Want To Save Changes ?"))
    return;
  Editing = false;
  newName = document.querySelector('#NameSelectedToEdit').value;
  newPriority = document.querySelector('#PrioritySelectedToEdit').value;
  if(newName !== "" && newPriority > 0){
    tasks[i].name = newName;
    tasks[i].priority = newPriority;
    renderTable();
  }
}

const Cancel = function(){
  Editing = false;
  renderTable();
}

const Edit = function(i){
  renderTable();
  Editing = true;
  const t = {
    name : tasks[i].name,
    priority : tasks[i].priority
  }
  const row = `
        <tr>
        <td>${i + 1}</td>
        <td>
          <input id = "NameSelectedToEdit" type="text" class="form-control" placeholder="Task name..." value = "${tasks[i].name}"/>
        </td>
        <td>
          <select id = "PrioritySelectedToEdit" class="form-control">
            <option value="1" ${(t.priority == 1)?"selected = 'selected'":""}>High</option>
            <option value="2" ${(t.priority == 2)?"selected = 'selected'":""}>Medium</option>
            <option value="3" ${(t.priority == 3)?"selected = 'selected'":""}>Low</option>
          </select>
          
        </td>
        <td>
        ${
          i > 0
            ? `<button class="btn btn-sm btn-secondary" onclick="moveUp(${i})">Up</button>`
            : ``
        }
        ${
          i < tasks.length - 1
            ? `<button class="btn btn-sm btn-secondary" onclick="moveDown(${i})">Down</button>`
            : ``
        }
        </td>
        <td>
        <button class="btn btn-primary btn-sm" style="display:none;">Edit</button>
        <button class="btn btn-success btn-sm" onclick = "Save(${i})">Save</button>
        <button class="btn btn-danger btn-sm" onclick = "Cancel()">Cancel</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button></td>
        </tr>
        `;
  document.querySelectorAll('tr')[i + 1].innerHTML = "";
  document.querySelectorAll('tr')[i + 1].innerHTML = row;
}
const deleteTask = function (i) {
  if (!confirm("Are you sure ?")) return;
  tasks.splice(i, 1);
  renderTable();
};
const moveUp = function (i) {
  if (i == 0 || Editing) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i - 1];
  tasks[i - 1] = oldTask;
  renderTable();
};
const moveDown = function (i) {
  if (i == tasks.length - 1 || Editing) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i + 1];
  tasks[i + 1] = oldTask;
  renderTable();
};

const renderTable = function () {
  const tbody = document.querySelector("#tasks_tbody");
  tbody.innerHTML = "";
  tasks.forEach((t, i) => {
    const row = `
        <tr>
        <td>${i + 1}</td>
        <td>${t.name}</td>
        <td>${getPriorityName(t.priority)}</td>
        <td>
        ${
          i > 0
            ? `<button class="btn btn-sm btn-secondary" onclick="moveUp(${i})">Up</button>`
            : ``
        }
        ${
          i < tasks.length - 1
            ? `<button class="btn btn-sm btn-secondary" onclick="moveDown(${i})">Down</button>`
            : ``
        }
        </td>
        <td>
        <button class="btn btn-primary btn-sm" onclick = "Edit(${i})">Edit</button>
        <button class="btn btn-success btn-sm" style="display:none;">Save</button>
        <button class="btn btn-danger btn-sm" style="display:none;">Cancel</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button></td>
        </tr>
        `;
    tbody.insertAdjacentHTML("beforeEnd", row);
  });
};
const addTask = function () {
  console.log(this);
  const taskName = document.querySelector("#task_name").value;
  const priority = document.querySelector("#task_priority").value;
  if (taskName !== "" && priority > 0) {
    tasks.push({
      name: taskName,
      priority: priority,
    });
    renderTable();
  }
};

document.querySelector("#add").addEventListener("click", addTask);
var name = "Test3";
var age = 22;
const calcFunction = () => {
  console.log(this);
  console.log(`My name is ${this.name} I'm ${this.age} years old`);
};
const obj = {
  name: "Test",
  age: 35,
  cal: calcFunction,
};

const obj2 = {
  name: "Test2",
  age: 22,
  cal: calcFunction,
};

function thisTest() {
  let obj1 = "Ramy";
  var obj2 = "Ahmed";
  console.log(this);
  const x = () => {
    console.log(this);
  };
  x();
}
