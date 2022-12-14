<template>
  <v-app id="inspire">
    <AppBar />

    <v-main>
      <v-container class="pa-2" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/Base/AppBar.vue";
import { mapState } from "vuex";

export default {
  components: { AppBar },
  created() {
    this.$vuetify.theme.dark = this.tema;
  },
  computed: {
    ...mapState("todo", ["tema"]),
  },
};
</script>
