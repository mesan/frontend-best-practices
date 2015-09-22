import printerController from "./js/printer";

(function () {
  const printer = printerController();

  const obj = { key: 42 };

  // tests
  if (obj) {
    obj.key++;
  }

  printer.hello("world", () => 42);
})();
