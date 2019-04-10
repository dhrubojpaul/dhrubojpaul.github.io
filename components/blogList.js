const data = {
    name: "Blog",
    dataList: [
        {
            id: 1,
            title: "Blog 1", 
            text: "Blog 1 blog b1asd",
            date: new Date("2019-04-10"),
        },
        {
            id: 2,
            title: "Blog 2", 
            text: "blog 2 2 2 2 2 ",
            date: new Date("2019-04-11"),
        }
    ]
};

export var blogs = data.dataList;

export var blogList = {
    data() {
        return data;
    },
    template: `
    <div>
        <h1>{{name}}</h1>
        <ul>
            <li :id="data.id" v-for="data in dataList">
                <a :href='"#/blog/"+data.id'><h3>{{data.title}}</h3></a>
            </li>      
        </ul>

    </div>
    `
}