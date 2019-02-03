/* Registers the Service Worker for our application
This follows the MDN tutorial @:
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
*/
if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('/sw.js')
 .then(reg => {
   // registration worked
   console.log('Registration succeeded. Scope is ' + reg.scope);
}).catch(error => {
   // registration failed
   console.log('Registration failed with ' + error);
 });
}