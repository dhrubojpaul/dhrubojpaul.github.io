Vue.config.devtools = true;

var website = {
    template: `<dhrubo></dhrubo>`
};


import router from "/js/router/index.js";


const app = new Vue({
    router,
    render: function(createElement) {
        return createElement(website);
    },
}).$mount('#vue-entry');
