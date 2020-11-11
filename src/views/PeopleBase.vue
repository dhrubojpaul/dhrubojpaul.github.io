<template>
<div>
  <v-row>
    <v-col cols=12 sm=4>
      <v-card flat>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" width=100%></v-img>
        <v-card-title>Name</v-card-title>
        <v-card-subtitle>Designation</v-card-subtitle>
        <v-card-actions>
          <v-btn small elevation=0>E-Mail</v-btn>
          <v-btn small elevation=0 target="_blank" href="http://google.com">Website</v-btn>
        </v-card-actions>
      </v-card>

      <v-list>
        <v-list-item><v-btn block text rounded :to="'/people/'+id+'/projects'">Project</v-btn></v-list-item>
        <v-list-item><v-btn block text rounded :to="'/people/'+id+'/publications'">Publications</v-btn></v-list-item>
        <v-list-item><v-btn block text rounded :to="'/people/'+id+'/cv'">CV</v-btn></v-list-item>
      </v-list>
      
    </v-col>
    <v-col cols=12 sm=8>
      <v-card flat>
        <transition name=slide-left mode=out-in>
          <router-view/>
        </transition>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
  export default {
    computed: {
      id(){
        return this.$route.params.id;
      }
    }
  }
</script>