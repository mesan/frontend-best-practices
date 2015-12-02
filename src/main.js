import todolist from "./js/todolist";
import listrenderer from "./js/listrenderer";

(function () {
  const todos = todolist();
  const renderer = listrenderer();
  const newItemForm = document.querySelector("#newitem");
  renderer.render(todos.getItems());

  document.querySelector("#todolist")
    .addEventListener("click", event => {
      if (event.target.matches(".removebutton")) {
        todos.removeItem(parseInt(event.target.id));
        renderer.render(todos.getItems());
      }
    });

  newItemForm.addEventListener("submit", event => {
    event.preventDefault();
    const item = {
      title: event.target.elements.title.value,
      description: event.target.elements.description.value
    };

    todos.addItem(item);
    event.target.elements.title.value = "";
    event.target.elements.description.value = "";
    renderer.render(todos.getItems());
  });
})();
