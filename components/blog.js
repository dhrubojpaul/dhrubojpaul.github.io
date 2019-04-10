import {blogs} from "/components/blogList.js";

export var blog = {
    data: function(){
        return {
            selectedBlog : blogs.filter(function (item) {
                return item.id == this.$route.params.id;
            }, this)[0]
        }
    },
    watch: {
        '$route' (to, from) {
            this.selectedBlog = blogs.filter(function (item) {
                return item.id == to.params.id;
            }, this)[0];
        }
    },
    template: `
    <div>
        <h1>{{selectedBlog.title}}</h1>
        <h6>written on {{selectedBlog.date}}</h6>
        <div v-html="selectedBlog.text"></div>
    </div>
    `
}

