const printer = function () {
  const hello = message => console.log(`Hello ${message}`);

  return { hello };
};

export default printer;
