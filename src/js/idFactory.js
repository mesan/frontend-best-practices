import persistentStorage from "./persistentStorage";

const idFactory = function () {
  const storageName = "lastId";
  const storage = persistentStorage();

  const getLastId = () => {
    const lastId = storage.getItemFromStorage(storageName);
    return lastId ? lastId : 0;
  };

  const createId = () => {
    let lastId = getLastId();
    ++lastId;
    storage.setItemInStorage(storageName, lastId);
    return lastId;
  };

  return { createId };
};

export default idFactory;
