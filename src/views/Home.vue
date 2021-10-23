<template>
  <div>
    <Header />
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

// @ is an alias to /src

export default {
  name: "Home",
  components: { Header, Footer },
};
</script>

<style scoped>
.main {
  height: calc(100vh - 160px);
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
}
</style>
