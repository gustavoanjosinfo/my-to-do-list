export const todo = {
  namespaced: true,
  state: () => ({
    tarefas: [],
    tema: false,
    nome: "",
  }),
  mutations: {
    salvarTema(state, novoTema) {
      state.tema = novoTema;
    },
    salvarUsuario(state, novoNome) {
      state.nome = novoNome;
    },
    adicionarTarefa(state, tituloTarefa) {
      state.tarefas.push({
        id: Date.now(),
        titulo: tituloTarefa,
        feita: false,
      });
    },
    excluirTarefa(state, id) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== id);
    },
  },
};
