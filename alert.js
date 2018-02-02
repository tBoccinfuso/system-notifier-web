const notifier = require('node-notifier');
const path = require('path');
var opn = require('opn');
 
notifier.notify(
  {
    title: 'Hello World!',
    message: 'Click me to open link.',
    icon: path.join(__dirname, 'coulson.jpg'), // Absolute path (doesn't work on balloons)
    sound: true, // Only Notification Center or Windows Toasters
    wait: true // Wait with callback, until user action is taken against notification    
  },
  function(err, response) {
    // Response is response from notification
  }
);
 
notifier.on('click', function(notifierObject, options) {
  // Triggers if `wait: true` and user clicks notification
  opn('https://github.com/tboccinfuso'); 
});
 
notifier.on('timeout', function(notifierObject, options) {
  // Triggers if `wait: true` and notification closes
});