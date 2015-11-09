import todolist from "./js/todolist";
import listrenderer from "./js/listrenderer";

(function () {
  const todos = todolist();
  const renderer = listrenderer();
  const newItemForm = document.querySelector("#newitem");

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

    const removebuttons = [...document.querySelectorAll(".removebutton")];
    // todo: fix disappearing event listeners
    removebuttons.forEach(button => {
      button.addEventListener("click", removeEvent => {
        console.log(removeEvent.target.id);
        todos.removeItem(removeEvent.target.id);
        renderer.render(todos.getItems());
      });
    });
  });
})();
