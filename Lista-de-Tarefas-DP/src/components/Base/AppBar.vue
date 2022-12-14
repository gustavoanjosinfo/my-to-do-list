<template>
  <v-container class="pa-0">
    <v-app-bar
      app
      dark
      color="teal"
      prominent
      src="@/assets/sonic.jpeg"
    >
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="text-h6">Atividades</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="trocarTema()">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>

    <NavBar />
  </v-container>
</template>

<script>
import NavBar from "@/components/Base/NavBar.vue";
import { mapMutations } from "vuex";

export default {
  name: "AppBar",
  components: { NavBar },
  data: () => ({
    drawer: null,
  }),
  methods: {
    ...mapMutations("todo", ["salvarTema"]),

    trocarTema() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.salvarTema(this.$vuetify.theme.dark);
    },
  },
};
</script>

<style>
.v-app-bar-title__content {
  width: 200px !important;
}
</style>
