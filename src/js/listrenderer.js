const listrenderer = function () {
  const list = document.querySelector("#todolist");

  const createListItem = ({id, title = "", description = ""}) => {
    const element = document.createElement("li");
    element.innerHTML = `${title} - ${description} <a id="${id}" class="removebutton">[x]</a>`;
    return element;
  };

  const render = items => {
    list.innerHTML = "";
    items.forEach(item => list.appendChild(createListItem(item)));
  };

  return { render };
};

export default listrenderer;
