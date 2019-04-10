var data = {
    name: "Experience",
    dataList: [
        {
            designation: "Junior Software Engineer", 
            id:"dhrubojpaul-experience-reve-jse"
        }
    ]
};

export var experience = {
    data() {
        return data;
    },
    template: `
    <div>
        <h1>{{name}}</h1>
        <ul>
            <li :id="data.id" v-for="data in dataList">
                <h3>{{data.designation}}</h3>
            </li>      
        </ul>

    </div>
    `
}