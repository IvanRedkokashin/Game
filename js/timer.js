$(".timer").countTo({
  from: 50,
  to: 2500,
  speed: 1000,
  refreshInterval: 50,
  formatter: function (value, options) {
    return value.toFixed(options.decimals);
  },
  onUpdate: function (value) {
    console.debug(this);
  },
  onComplete: function (value) {
    console.debug(this);
  },
});
