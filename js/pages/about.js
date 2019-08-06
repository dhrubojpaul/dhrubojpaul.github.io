var component = {
    template: `
    <div>
        <button type=button @click="reset">Reset the Application</button>
    </div>
    `,
    methods: {
        reset: function(){
            //unregister service worker
            if(window.navigator && navigator.serviceWorker) {
                navigator.serviceWorker.getRegistrations()
                .then(function(registrations) {
                    for(let registration of registrations) {
                        registration.unregister();
                    }
                });
            }

            //clear cache
            caches.keys()
            .then(function (keyList) {
              return Promise.all(keyList.map(function (key) {
                if (key == 'dhrubo-precache') {
                  return caches.delete(key);
                }
              }));
            })

            location.reload(true);
        }
    }
};

export default component;


