<template>
  <div>
    <div v-if="loading">
      <page-loading> </page-loading>
    </div>
    <transition>
      <div v-if="api != null" class="conteudo">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <!-- Esta puxando o data la do mixins -->
        <ul class="cursos-lista">
          <li v-for="curso in api.cursos" :key="curso.id">
            <h2>
              <router-link :to="{ name: 'Curso', params: { curso: curso.id } }">
                {{ curso.nome }} - {{ curso.totalAulas }} aulas |
                {{ curso.horas }} horas
              </router-link>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("cursos");
  },
};
</script>

<style>
.cursos-lista li {
  margin-bottom: 40px;
}
</style>
