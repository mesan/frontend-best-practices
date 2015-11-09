const idFactory = function () {
  let lastId = 0;

  const createId = () => ++lastId;

  return { createId };
};

export default idFactory;
