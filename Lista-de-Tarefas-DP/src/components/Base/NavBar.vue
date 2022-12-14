<template>
  <v-navigation-drawer v-model="$parent.drawer" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Lista {{ nome.length ? `de ${nome}` : "do Gustavo dos Anjos" }}
        </v-list-item-title>
        <v-list-item-subtitle> To-do-list </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavBar",
  data: () => ({
    items: [
      { title: "Lista", icon: "mdi-list-box-outline", route: "/" },
      { title: "Sobre", icon: "mdi-help-box", route: "/about" },
    ],
  }),
  computed: {
    ...mapState("todo", ["nome"]),
  },
};
</script>

<style></style>
