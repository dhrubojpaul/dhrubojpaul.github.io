import profile from "/js/main/data.js";

var component = {
    template: `
    <div>
        <div class="education-item" v-for="item in education">
            <div v-if="item.isComplete" class="education-year">{{item.month}} {{item.year}}</div>
            <div class="education-title">{{item.degree}}</div>
            <div><a :href="item.url" target=_blank>{{item.institute}}</a></div>
            <div class="education-address">{{item.address}}</div>
            <div v-if="item.isComplete">{{item.scoreType}} : {{item.score}} out of {{item.scoreMax}}</div>
        </div>
    </div>
    `,
    data(){
        return {
            education: []
        }
    },
    mounted() {
        this.education = profile.education;
        this.education.sort(function(a,b){
            return b.year - a.year;
        });
    }

}

export default component;