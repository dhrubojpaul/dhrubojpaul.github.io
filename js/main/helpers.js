import profile from "/js/main/data.js";

Vue.component("dhrubo", {
    template: `
        <div class=app>
            <div class=title>
                <span class="first-name">{{profile.firstName}}</span>
                <span class="middle-name">{{profile.middleName}}</span>
                <span class="last-name">{{profile.lastName}}</span>
                <span class="subscript" v-if="this.$route.name.length > 0"> > {{this.$route.name}}</span>
            </div>

            <button type=button class=nav-left :disabled="this.isFirst()" @click="prev"><</button>
            <button type=button class=nav-right :disabled="this.isLast()" @click="next">></button>

            <div class=body>
                <router-view></router-view>   
            </div>
        </div>
    `,
    data() {
        return {
            navFlag:true,
            profile,
            index: undefined,
            navigationArray : []
        }
    },
    methods: {
        next: function(){
            this.index = this.isLast() ? this.index : this.index + 1;
        },
        prev: function(){
            this.index = this.isFirst() ? this.index : this.index - 1;
        },
        isLast: function(){
            return this.index == this.navigationArray.length - 1;
        },
        isFirst: function(){
            return this.index == 0;
        }
    },
    watch: {
        index : function(newValue){
            this.$router.push((this.navigationArray[this.index])[1]);
        }
    },
    mounted: function(){
        this.index = this.$route.meta.index;
        
        var tempNavArray = this.$router.options.routes;
        var uniqueMap = new Map();

        tempNavArray = tempNavArray.filter((element, index) => {
            return element.meta != undefined;
        });

        for(var item of tempNavArray){
            if(!uniqueMap.has(item.meta.index)){
                uniqueMap.set(item.meta.index, item.path);
            }
        }

        tempNavArray = Array.from(uniqueMap);
        tempNavArray.sort(function(a,b){
            return a[0] - b[0];
        });
        this.navigationArray = tempNavArray;
    }
});