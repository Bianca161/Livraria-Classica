
<script setup>
import { ref } from "vue";

const membroSelecionado = ref(null);

const membros = [
  {
    nome: "Bianca Holanda De Jesus",
    turma: "2info2",
    github: "Bianca161",
  },
  {
    nome: "Mizael Estevam ",
    turma: "2info2",
    github: "mizaelestevam",
  },
  {
    nome: "Sara Schulz",
    turma: "2info2",
    github: "saraschulz",
  },
];

function selecionarMembro(membro) {
  membroSelecionado.value = membro;
}

function voltar() {
  membroSelecionado.value = null;
}
</script>
<template>
  <section class="nossoEquipe">
    <div class="titulo">
      <h2>Nossa Equipe</h2>
    </div>
    <div class="equipe"> <!-- Lista de membros -->
      <div class="lista" :class="{ ativo: membroSelecionado }">
        <h3>Membros:</h3>
        <ul>
          <li v-for="m in membros" :key="m.nome" @click="selecionarMembro(m)"
            :class="{ selecionado: membroSelecionado?.nome === m.nome }">
            {{ m.nome }}
            <span v-if="membroSelecionado?.nome === m.nome" class="mdi mdi-menu-right"></span>
          </li>
        </ul>
      </div> <!-- Detalhes -->
      <div class="detalhes" v-if="membroSelecionado">
        <h3>{{ membroSelecionado.nome }}</h3>
        <p><b>Turma:</b> {{ membroSelecionado.turma }}</p>
        <p > <b>Github:</b> {{ membroSelecionado.github }} </p>
        <button @click="voltar"> <i class="mdi mdi-menu-left"></i>Voltar</button>
      </div>
    </div>
    <div class="space">

    </div>
  </section>
</template>
