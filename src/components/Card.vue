<template>
  <div>
    <Modal
      v-if="showModal"
      @closeModal="closeModal"
      :videoEmbed="videoEmbed"
      @showModal="showModal = $event"
    />

    <div class="card-container">
      <div
        v-for="(match, i) in randomData"
        :key="i"
        class="card"
        @click="prueba(match.embed)"
      >
        <h3 class="name">{{ match.title }}</h3>

        <img :src="match.thumbnail" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import Modal from "./Modal.vue";

export default {
  data() {
    return {
      showModal: false,
      videoEmbed: null,
    };
  },
  components: {
    Modal,
  },
  computed: {
    randomData() {
      if (!this.$store.state.isHome) {
        return this.$store.getters.randomData;
      }
      return this.$store.state.listMatchs;
    },
  },
  methods: {
    ...mapActions(["getData"]),
    ...mapMutations(["loadMatchs", "changeIsHome"]),
    loadMatchsByCompetition(id) {
      this.loadMatchs(id);
    },
    updateIsHome(value) {
      this.changeIsHome(value);
    },

    prueba(video) {
      this.videoEmbed = video;
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },
  },
  created() {
    if (this.$route.params.id) {
      this.updateIsHome(true);
      this.loadMatchsByCompetition(this.$route.params.id);
    }

    this.getData();
    console.log("object");
    console.log(this.randomData);
  },
};
</script>
<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: calc(100vh - 160px);
}
.card {
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-around;
  margin: 10px 10px;
  width: 250px;
  padding: 10px;
}

.name {
  font-size: 16px;
  color: white;
  font-family: "Lato", sans-serif;
  margin: 0 auto;
  text-align: center;
}
img {
  width: 100%;
  height: 240px;
  margin: 0 10px;
}
</style>