import {education} from "/components/education.js";
import {experience} from "/components/experience.js";
import {home} from "/components/home.js";
import {blogList} from "/components/blogList.js";
import {blog} from "/components/blog.js";

 var website = {
    template: 
    `
    <div>
        <p>
            <router-link to="/education">Education</router-link>
            <router-link to="/experience">Experience</router-link>
            <router-link to="/blog">Blog</router-link>
        </p>
        <router-view></router-view>
    </div>
    `
};

const router = new VueRouter({
    //mode: 'history',
    routes: [
        { path: '/', component: home },
        { path: '/education', component: education },
        { path: '/experience', component: experience },
        { path: '/blog/:id', component: blog },
        { path: '/blog', component: blogList },
    ],
    path: '*', redirect: '/'
});

const app = new Vue({
    router,
    render: function(createElement) {
        return createElement(website);
    }
}).$mount('#vue-entry');
