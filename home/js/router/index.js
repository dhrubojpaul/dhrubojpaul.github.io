import home from "/js/pages/home.js";
import education from "/js/pages/education.js";
import experience from "/js/pages/experience.js";
import research from "/js/pages/research.js";
import project from "/js/pages/project.js";
import cv from "/js/pages/cv.js";
import contact from "/js/pages/contact.js";
import about from "/js/pages/about.js";


const routes = [
    {path: '/', component: home, name: "", meta:{index:0}},
    {path: '/home/', component: home, redirect: '/', name: "", meta:{index:0}},
    {path: '/education/', component: education, name: "Education", meta:{index:1}},
    {path: '/experience/', component: experience, name: "Experience", meta:{index:2}},
    {path: '/research/', component: research, name: "Research", meta:{index:undefined}},
    {path: '/project/', component: project, name: "Project", meta:{index:undefined}},
    {path: '/cv/', component: cv, name: "CV", meta:{index:undefined}},
    {path: '/contact/', component: contact, name: "Contact", meta:{index:3}},
    {path: '/about/', component: about, name: "About", meta:{index:4}},
];



const router = new VueRouter({
    routes: routes,
    path: '*', redirect: '/'
});

export default router;