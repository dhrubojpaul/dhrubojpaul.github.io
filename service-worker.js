const CACHE = "dhrubo-precache";
const precacheFiles = [
    "./index.html"
];

self.addEventListener("install", function (event) {

  /*
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(precacheFiles);
    })
  );
  */

 caches.keys()
 .then(function (keyList) {
   return Promise.all(keyList.map(function (key) {
     if (key == CACHE) {
       return caches.delete(key);
     }
   }));
 })


});


self.addEventListener("activate", function (event) {
  /*
  event.waitUntil(self.clients.claim());
  */
});


self.addEventListener("fetch", function (event) { 

  /*
  if (event.request.method !== "GET") return;

  event.respondWith(
    fromCache(event.request).then(
      function (response) {
        event.waitUntil(
          fetch(event.request).then(function (response) {
            return updateCache(event.request, response);
          })
        );
        return response;
      },
      function () {
        return fetch(event.request)
          .then(function (response) {
            event.waitUntil(updateCache(event.request, response.clone()));
            return response;
          })
          .catch(function (error) {
          });
      }
    )
  );
  */


});


function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }
      return matching;
    });
  });
}


function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}