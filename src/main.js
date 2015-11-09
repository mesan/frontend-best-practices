import printerController from "./js/printer";

(function () {
  const printer = printerController();
  const obj = {
    key: 42
  };
  if (obj) {
    obj.key++;
  }

  printer.hello("world", () => 42);
})();

const getFullName = ({ firstName, lastName = "Jensen" }) => {
  return `${firstName} ${lastName}`;
};

const person = { age: 26, firstName: "Christian" };
getFullName(person);
