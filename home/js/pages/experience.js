import data from "/js/main/data.js";

var component = {
    template: `
    <div>
        <div class="experience-item" v-for="item in experience">
            <div class="experience-duration">{{item.startDate}} - {{item.endDate}}</div>
            <div class="experience-title">{{item.designation}}</div>
            <div><a :href="item.instituteURL" target=_blank>{{item.institute}}</a></div>
            <div class="experience-address">{{item.instituteAddress}}</div>
            <div v-if="item.isComplete">{{item.scoreType}} : {{item.score}} out of {{item.scoreMax}}</div>
        </div>
    </div>
    `,
    data(){
        return {
            experience: []
        }
    },
    mounted() {
        this.experience = data.experience;
        this.experience.sort(function(a,b){
            return b.jobIndex - a.jobIndex;
        });
    }

}

export default component;