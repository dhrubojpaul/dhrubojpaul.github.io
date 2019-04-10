var data = {
    name: "Education",
    dataList: [
        {
            start: 2007, 
            end: 2009, 
            institute: "Dhaka Residential Model College", 
            instituteWebsite: "www.drmc.com",
            degreeName: "Secondary School Certificate (S.S.C.)",
            scoreName: "GPA", 
            score: 5, 
            scale: 5,
            id:"dhrubojpaul-education-ssc"
        },
        {
            start: 2009, 
            end: 2011, 
            institute: "Notre Dame College", 
            instituteWebsite: "www.drmc.com",
            degreeName: "Higher Secondary School Certificate (H.S.C.)",
            scoreName: "GPA", 
            score: 5, 
            scale: 5,
            id:"dhrubojpaul-education-hsc"
        },
        {
            start: 2012, 
            end: 2017, 
            institute: "Bangladesh University of Engineering and Technology", 
            instituteWebsite: "www.drmc.com",
            degreeName: "Bachelor of Science (B.Sc.)",
            scoreName: "CGPA", 
            score: 3.41, 
            scale: 4,
            id:"dhrubojpaul-education-bsc"
        }
    ]
};

export var education = {
    data() {
        return data;
    },
    template: `
    <div>

        <h1>{{name}}</h1>

        <ul>
            <li :id="data.id" v-for="data in dataList">
                <h3>{{data.degreeName}}</h3>
                <p>{{data.instituteName}}</p>
                <p>{{data.scoreName}}: {{data.score}} out of {{data.scale}}</p>
            </li>      
        </ul>

    </div>
    `
}