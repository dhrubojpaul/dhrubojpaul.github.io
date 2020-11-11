
const check = () => {

  //service worker
  if (!("serviceWorker" in navigator)) {
    throw new Error('No Service Worker support!')
  }

  //notification
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}


const registerServiceWorker = async () => {
  if(navigator.serviceWorker.controller){
    return navigator.serviceWorker.ready;
  }

  const serviceWorkerRegistration = await navigator.serviceWorker.register("service-worker.js", {scope: "./"})
  .then(function (reg) {
      console.log("BUETPS uses a service worker with scope: " + reg.scope);
  });

  return serviceWorkerRegistration;
}

const unregisterServiceWorker = async () => {
  if(window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
    .then(function(registrations) {
        for(let registration of registrations) {
            registration.unregister();
        }
    });
  }
};

const main = async () => {
  check();
  //const serviceWorkerRegistration = await registerServiceWorker();
  await unregisterServiceWorker();
}

main();