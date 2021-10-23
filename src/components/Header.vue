<template>
  <header>
    <div class="container nav-logo">
      <a href="/" class="logo">IPCOM</a>
      <nav>
        <ul>
          <li><a href="/">Partidos</a></li>
          <li><a href="#/ligas">Ligas</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
header {
  height: 80px;
  background: black;
  color: white;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  position: sticky;
}

.container {
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
a {
  align-self: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: white;
}
nav ul li {
  list-style-type: none;
  display: inline;
  margin-right: 20px;
}
</style>