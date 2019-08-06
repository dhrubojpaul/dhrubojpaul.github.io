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
    {path: '/research/', component: research, name: "Research", meta:{index:3}},
    {path: '/project/', component: project, name: "Project", meta:{index:4}},
    {path: '/cv/', component: cv, name: "CV", meta:{index:5}},
    {path: '/contact/', component: contact, name: "Contact", meta:{index:6}},
    {path: '/about/', component: about, name: "About", meta:{index:7}},
];



const router = new VueRouter({
    routes: routes,
    path: '*', redirect: '/'
});

export default router;