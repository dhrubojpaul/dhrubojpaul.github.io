import data from "/js/main/data.js";

var component = {
    template: `
    <div>
        <div class=contact-item>
            <div class=contact-title>Address</div>
            <div class=contact-content>{{contact.address}}</div>
        </div>

        <div class=contact-item>
            <div class=contact-title>E-Mail</div>
            <div class=contact-content>
                <div v-for="email in contact.email">
                    <div><a :href="'mailto:'+email">{{email}}</a></div>
                </div>
            </div>
        </div>

        <div class=contact-item>
            <div class=contact-title>External Links</div>
            <div class=contact-content>
                <div v-for="item in contact.social"><a :href="item.url" target="_blank">{{item.name}}</a></div>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            contact: data.contact
        }
    }
}

export default component;