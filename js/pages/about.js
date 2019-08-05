var component = {
    template: `
    <div>
        <h1>About</h1>
        
        <v-btn flat @click="reset">Reset the Application</v-btn>
        <v-footer fixed color="white"><v-spacer></v-spacer><span>created and maintained by <b>Dhrubo Paul</b></span></v-footer>

    </div>
    `,
    data: function(){
        return {
            notificationPermission: null,
        }
    },
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
                if (key == 'buetps-precache') {
                  return caches.delete(key);
                }
              }));
            })

            location.reload(true);
        },
        showLocalNotification: function(title, body){
            navigator.serviceWorker.ready
            .then(function(registration){
                registration.showNotification(title,{body});
            })
        },
        askNotificationPermission: function(){
            Notification.requestPermission((permission) => {
                if (permission === "granted") {
                    this.showLocalNotification("Notification Granted", "We will let you know if something comes up.");
                }
            });
        },
    },
    mounted: function(){
        this.notificationPermission = window.Notification.permission;
    }
};

export default component;


