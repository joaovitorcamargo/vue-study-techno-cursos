<template>
  <header>
    <nav class="logo">
      <router-link to="/">Techno</router-link>
      <ul class="list-header">
        <li><router-link to="/cursos">Cursos</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  background: #234;
}

header a {
  color: white;
}

nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  padding: 20px;
}

.logo {
  flex: 1;
}

a.router-link-exact-active {
  color: #4b8;
}

.logo a {
  color: white;
}

.list-header li {
  display: inline-block;
}

.list-header li a {
  padding: 0 10px;
  margin-left: 10px;
}
</style>
