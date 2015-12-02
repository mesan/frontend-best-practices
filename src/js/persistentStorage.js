const persistentStorage = function () {
  const getItemFromStorage = itemName => JSON.parse(localStorage.getItem(itemName));

  const setItemInStorage = (itemName, item) => localStorage.setItem(itemName, JSON.stringify(item));

  return { getItemFromStorage, setItemInStorage };
};

export default persistentStorage;
