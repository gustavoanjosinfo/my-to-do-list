<template>
  <v-list-item
    @click="tarefa.feita = !tarefa.feita"
    :class="{ 'rounded primary': tarefa.feita }"
  >
    <template #default>
      <v-list-item-action>
        <v-checkbox :input-value="tarefa.feita" color="teal"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title
          :class="{
            'text-decoration-line-through warning--text': tarefa.feita,
          }"
          >{{ tarefa.titulo }}</v-list-item-title
        >
      </v-list-item-content>
      <v-list-item-action>
        <v-btn @click.stop="$emit('apagarTarefa', tarefa)" icon>
          <v-icon color="grey">mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
export default {
  name: "ListarTarefas",
  props: ["tarefa"],
};
</script>

<style></style>
