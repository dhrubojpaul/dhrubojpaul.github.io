import home from "/js/pages/home.js";
import about from "/js/pages/about.js";


const routes = [
    {path: '/', component: home},
    {path: '/home/', component: home, redirect: '/'},
    {path: '/about/', component: about},
];



const router = new VueRouter({
    routes: routes,
    path: '*', redirect: '/'
});

export default router;