<template>
  <div class="about px-3 py-1">
    <h1 class="text-center my-1">Qual é seu nome?</h1>
    <v-text-field
      outlined
      color="teal"
      hide-details
      class="pa-1 py-2"
      v-model="nomeUsuario"
      append-icon="mdi-send"
      label="Digite seu nome"
      @keyup.enter="salvarNome()"
      @click:append="salvarNome()"
    ></v-text-field>
    <h1 class="mt-4 mb-3">Porque usar uma lista?</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      pariatur, ullam nisi temporibus harum obcaecati est quos debitis sequi
      animi explicabo vel vero labore amet placeat porro. Hic, assumenda
      architecto? Non dignissimos magnam totam, nam recusandae, incidunt odio
      quo fugit necessitatibus ad inventore. Reprehenderit ipsum iusto, pariatur
      dolor necessitatibus vero dolore provident adipisci harum recusandae
      facere omnis at corrupti voluptates?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      pariatur, ullam nisi temporibus harum obcaecati est quos debitis sequi
      animi explicabo vel vero labore amet placeat porro. Hic, assumenda
      architecto? Non dignissimos magnam totam, nam recusandae, incidunt odio
      quo fugit necessitatibus ad inventore. Reprehenderit ipsum iusto, pariatur
      dolor necessitatibus vero dolore provident adipisci harum recusandae
      facere omnis at corrupti voluptates?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      pariatur, ullam nisi temporibus harum obcaecati est quos debitis sequi
      animi explicabo vel vero labore amet placeat porro. Hic, assumenda
      architecto? Non dignissimos magnam totam, nam recusandae, incidunt odio
      quo fugit necessitatibus ad inventore. Reprehenderit ipsum iusto, pariatur
      dolor necessitatibus vero dolore provident adipisci harum recusandae
      facere omnis at corrupti voluptates?
    </p>

    <Notificacao mensagem="Salvo com sucesso!" color="teal" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Notificacao from "@/components/Notificacao.vue";

export default {
  name: "About",
  components: { Notificacao },
  created() {
    this.nomeUsuario = this.nome;
  },
  data: () => ({
    nomeUsuario: "",
    on: false,
  }),
  computed: {
    ...mapState("todo", ["nome"]),
  },
  methods: {
    ...mapMutations("todo", ["salvarUsuario"]),

    salvarNome() {
      this.salvarUsuario(this.nomeUsuario);
      this.nomeUsuario = "";
      this.on = true;
    },
  },
};
</script>
