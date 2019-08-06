Vue.component("dhrubo", {
    template: `
        <div class=app>
            <div class=title>
                <span class="first-name">{{firstName}}</span>
                <span class="middle-name">{{middleName}}</span>
                <span class="last-name">{{lastName}}</span>
            </div>

            <div class=body>
            </div>
        </div>
    `,
    data() {
        return {
            navFlag:true,
            firstName: "Dhrubo",
            middleName: "Jyoti",
            lastName: "Paul"
        }
    }
});