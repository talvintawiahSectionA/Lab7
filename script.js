// Function marks todo as completed

const completeItem = () => {
  if (checkbox.checked) {
    newTodo.classList.add("completed");
  } else {
    newTodo.classList.remove("completed");
  }
};

// Function to validate input
const validate = (todo) => {
  if (todo == "") {
    alert("Please add valid item");
  } else createNewTodo(todo);
};

// Function adds new todo item to list
const addItem = () => {
  const newTodoItem = document.getElementById("textbox").value;
  validate(newTodoItem);
  document.getElementById("textbox").value = "";
};

const createNewTodo = (newTodoItem) => {
  const list = document.getElementById("todoList");

  const newTodo = document.createElement("li");
  const newTextNode = document.createTextNode(`${newTodoItem}`);

  // Create Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", completeItem);

  // Create Delete Button

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Function to delete todo item

  deleteButton.addEventListener("click", function () {
    list.removeChild(newTodo);
  });

  // Appends new Elements to new Li Element
  newTodo.appendChild(newTextNode);
  newTodo.appendChild(checkbox);
  newTodo.appendChild(deleteButton);

  // Appends new todo item to Todo List
  list.appendChild(newTodo);
};

const button = document.getElementById("addTodoItem");
button.addEventListener("click", addItem);
