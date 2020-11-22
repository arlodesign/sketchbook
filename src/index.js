/* eslint-disable no-irregular-whitespace */
console.log(`
=============================================

███████  ██        ███████   ███████ ██    ██
██    ██ ██       ██     ██ ██       ██   ██
███████  ██       █████████ ██       ██████
██    ██ ██       ██     ██ ██       ██   ██
███████  ████████ ██     ██  ███████ ██    ██

██       ██████  ██    ██  ████████   ███████
██         ██    ██    ██  ██        ██      
██         ██    ██    ██  ██████    ████████
██         ██     ██  ██   ██              ██
████████ ██████    ████    ████████  ███████ 

███    ███  ████  ██████ ██████ ██████ █████
████  ████ ██  ██   ██     ██   ██     ██  ██
██ ████ ██ ██████   ██     ██   ████   █████ 
██  ██  ██ ██  ██   ██     ██   ██     ██  ██
██      ██ ██  ██   ██     ██   ██████ ██  ██

=============================================

https://secure.actblue.com/donate/ms_blm_homepage_2019

`);

navigator.serviceWorker?.getRegistrations().then(function (registrations) {
  for (let registration of registrations) {
    registration.unregister();
  }
});

if (!!window.location.hash && window.location.hash.includes("sketch-")) {
  document
    .getElementById(window.location.hash.replace("#", ""))
    .querySelector("img").loading = "eager";
}
