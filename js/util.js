(function () {
  if (typeof Mario === "undefined") {
    window.Mario = {};
  }

  let Util = (Mario.Util = {});

  Util.inherits = function (subclass, superclass) {
    function Surrogate() {}

    Surrogate.prototype = superclass.prototype;
    subclass.prototype = new Surrogate();
  };
})();
