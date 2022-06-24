window.addEventListener("load", () => {
  const form = document.querySelector("#myform");
  const input = document.querySelector("#forminput");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please fill out the task");
      return;
    }

    const task_content_el = document.createElement("div");
    const task_el = document.createElement("ul");
    task_el.classList.add("task");

    task_el.appendChild(task_content_el);

    /* UL Tag */
    var ulTag = document.createElement("ul");
    ulTag.classList.add("task");
    /* Todo list div */
    var todoList = document.createElement("div");
    todoList.classList.add("todo-list-container");
    /* LI Tag */
    var liTag = document.createElement("li");
    liTag.innerText = input.value;
    liTag.classList.add("todo-item");

    ulTag.appendChild(todoList);
    todoList.appendChild(liTag);
    list_el.appendChild(ulTag);

    // actions edit and delete---
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");
    ulTag.appendChild(task_actions_el);
    input.value = "";

    // edit -----
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";
    task_actions_el.appendChild(task_edit_el);

    task_edit_el.onclick = function () {
      editWorking(ulTag);
    };
    function editWorking(e) {
      var editValue = prompt("edit the select item",e.firstChild.firstChild.innerHTML);
      e.firstChild.firstChild.innerHTML = editValue;
    }

    // delete ------
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("deletet");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_delete_el);
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(ulTag);
    });
  });
});

// search bar ----

function myFunction() {
  let input = document.getElementById("the-filter").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("todo-item");
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
          } else {
      x[i].style.display = "todo-item";
    }
  }
}
