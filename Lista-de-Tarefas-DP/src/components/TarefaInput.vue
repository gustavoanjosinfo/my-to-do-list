<template>
  <v-text-field
    outlined
    clearable
    class="pa-3"
    color="teal"
    hide-details
    v-model="tituloTarefa"
    append-icon="mdi-send"
    label="Adicione uma tarefa"
    @keyup.enter="emitirNovaTarefa()"
    @click:append="emitirNovaTarefa()"
  ></v-text-field>
</template>

<script>
export default {
  name: "InputTarefa",
  data: () => ({
    tituloTarefa: "",
  }),
  methods: {
    emitirNovaTarefa() {
      this.$emit("adicionarTarefa", this.tituloTarefa);
      this.tituloTarefa = "";
    },
  },
};
</script>
