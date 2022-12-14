<template>
  <v-snackbar v-model="$parent.on" :timeout="doisSegundos">
    {{ mensagem }}

    <template #action="{ attrs }">
      <v-btn :color="color" text v-bind="attrs" @click="$parent.on = false">
        Fechar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Notificacao",
  props: ["on", "mensagem", "color"],
  data: () => ({
    doisSegundos: 2000,
  }),
};
</script>

<style></style>
