var gpio = require('linux-gpio');
 
gpio.export(266, {direction: gpio.DIR_OUT}, function(err, pin) {
  if (err) {
    console.error(err);
  } else {
    pin.set(function(err) {
      if (err) {
        console.error(err);
      } else {
        var count = 20;
        var interval = setInterval(function() {
          pin.toggle(function(err) {
            count--;
            if (err || !count) {
              clearInterval(interval);
              gpio.close();
            }
          });
        }, 1000);
      }
    });
  }
});