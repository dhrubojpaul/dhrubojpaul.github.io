<template>
  <v-row>
    <v-col cols="12">
      <v-row align=start justify=center>
        <v-card max-width="300" v-for="(person,index) in people" :key="index" class="ma-5" link outlined :to="'/people/'+person.code">
          <v-img class="white--text align-end" height="200px" :src="person.photo">
            <v-card-title>{{person.name}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">{{person.designation}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{person.interest}}</div>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import people from "../data/people/index";
export default {
  data(){
    return {
      people
    }
  }
}
</script>
