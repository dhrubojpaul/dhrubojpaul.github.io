var data = {
    name: "Blog",
    dataList: [
        {
            id: 10042019,
            title: "Junior Software Engineer", 
            text: "dhrubojpaul-experience-reve-jse",
            date: new Date("2019-04-10"),
        },
        {
            id: 11042019,
            title: "Software Engineer", 
            text: "dhrubojpaul-experience-reve-jse",
            date: new Date("2019-04-11"),
        }
    ]
};

export var blog = {
    data() {
        return data;
    },
    template: `
    <div>
        <h1>{{name}}</h1>
        <ul>
            <li :id="data.id" v-for="data in dataList">
                <h3>{{data.title}}</h3>
            </li>      
        </ul>

    </div>
    `
}