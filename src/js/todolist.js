import idFactory from "./idFactory";

const todolist = function () {
  const idGenerator = idFactory();
  const items = [];

  const getItems = () => items;

  const addItem = ({title = "", description = ""}) => items.push({id: idGenerator.createId(), title, description});

  const removeItem = id => items.splice(items.findIndex(item => item.id === id), 1);

  return { getItems, addItem, removeItem };
};

export default todolist;
