import idFactory from "./idFactory";
import persistentStorage from "./persistentStorage";

const todolist = function () {
  const storageName = "todoitems";
  const idGenerator = idFactory();
  const storage = persistentStorage();

  const getItems = () => {
    const items = storage.getItemFromStorage(storageName);
    return items ? items : [];
  };

  const addItem = ({title = "", description = ""}) => {
    const items = getItems();
    items.push({id: idGenerator.createId(), title, description});
    storage.setItemInStorage(storageName, items);
  };

  const removeItem = id => {
    const items = getItems();
    items.splice(items.findIndex(item => item.id === id), 1);
    storage.setItemInStorage(storageName, items);
  };

  return { getItems, addItem, removeItem };
};

export default todolist;
