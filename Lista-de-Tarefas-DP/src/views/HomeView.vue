<template>
  <div class="home">
    <TarefaInput @adicionarTarefa="criarTarefa" />

    <v-list color="transparent" class="pt-0" flat>
      <section align="center" class="mt-16 pt-16" v-if="!tarefas.length">
        <v-icon color="teal lighten-3" size="64px">mdi-playlist-check</v-icon>
        <h1 class="teal--text text--lighten-3">Não há tarefas</h1>
      </section>

      <section v-else v-for="tarefa in tarefas" :key="tarefa.id">
        <TarefaItem @apagarTarefa="deletarTarefa" :tarefa="tarefa" />

        <v-divider></v-divider>
      </section>
    </v-list>

    <Notificacao :mensagem="mensagemNotificacao" :color="color" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import TarefaInput from "@/components/TarefaInput.vue";
import TarefaItem from "@/components/TarefaItem.vue";
import Notificacao from "@/components/Notificacao.vue";

export default {
  name: "Home",
  components: { TarefaInput, TarefaItem, Notificacao },
  data: () => ({
    mensagemNotificacao: "",
    color: "",
    on: false,
  }),
  computed: {
    ...mapState("todo", ["tarefas"]),
  },
  methods: {
    ...mapMutations("todo", ["adicionarTarefa", "excluirTarefa"]),

    chamarNotificaçoo(texto, cor) {
      this.mensagemNotificacao = texto;
      this.color = cor;
      this.on = true;
    },
    criarTarefa(tituloTarefa) {
      if (tituloTarefa === null) {
        this.chamarNotificaçoo(
          "Escreva algo para adicionar uma terafa!",
          "warning"
        );
      } else if (!tituloTarefa.length) {
        this.chamarNotificaçoo(
          "Escreva algo para adicionar uma terafa!",
          "warning"
        );
      } else {
        this.adicionarTarefa(tituloTarefa);
        this.chamarNotificaçoo("Tarefa adicionada!", "teal");
      }
    },
    deletarTarefa({ id }) {
      this.excluirTarefa(id);
      this.chamarNotificaçoo("Tarefa excluida!", "red lighten-3");
    },
  },
};
</script>
