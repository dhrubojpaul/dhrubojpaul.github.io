<template>
  <v-app id="inspire">


  <v-card style="position:fixed;z-index:1" flat tile width="100vw">
    
    <div class="d-flex flex-no-wrap justify-space-between">

      <transition name="slide-left" mode="out-in">
        <v-card flat v-if="this.$router.currentRoute.path == '/'" >
          <v-card-title>
            <v-img width=76 contain src="./img/logo.jpg"></v-img>
            <v-btn text x-large disabled></v-btn> 
          </v-card-title>
        </v-card>
        <v-card flat class=indie v-else>
          <v-card-title>
            <v-btn text to="/" x-large rounded>Interactive Data and Immersive Environments Lab</v-btn>  
          </v-card-title>
        </v-card>
      </transition>

      <div class="d-none d-lg-flex">
        <v-card flat><v-card-title><v-btn text large rounded to="/research">Research</v-btn></v-card-title></v-card>
        <v-card flat><v-card-title><v-btn text large rounded to="/publications">Publications</v-btn></v-card-title></v-card>
        <v-card flat><v-card-title><v-btn text large rounded to="/people">People</v-btn></v-card-title></v-card>
      </div>
      <div class="hidden-lg-and-up">
          <v-menu top close-on-click>
            <template v-slot:activator="{ on }">
              <v-card flat><v-card-title><v-btn text x-large rounded v-on="on"><v-icon>mdi-menu</v-icon></v-btn></v-card-title></v-card>
            </template>
            <v-list>
              <v-list-item to=/research><v-list-item-title>Research</v-list-item-title></v-list-item>
              <v-list-item to=/publications><v-list-item-title>Publications</v-list-item-title></v-list-item>
              <v-list-item to=/people><v-list-item-title>People</v-list-item-title></v-list-item>
            </v-list>
          </v-menu>
      </div>
    </div>
  </v-card>
  



    <v-content style="margin:100px 10vw 10vh 10vw;" >
      <v-container fluid>
        <transition name=slide-left mode=out-in>
          <router-view/>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
  }
</script>