Vue.component("dhrubo", {
    template: `
        <v-app>
            <v-content>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-content>
            <v-bottom-navigation fixed>
                <v-layout align-center>
                <h2 style="padding-left:2vw">Dhrubo Paul</h2>
                <v-spacer></v-spacer>
                <v-btn><v-icon>chevron_left</v-icon></v-btn>
                <v-btn><v-icon>chevron_right</v-icon></v-btn>
                </v-layout>
            </v-bottom-navigation>
        </v-app>
    `,
    data() {
        return {
            navFlag:true,
        }
    }
});