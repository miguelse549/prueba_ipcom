<template>
  <div>
    <div v-for="(competition, i) in competitionList" :key="i" class="list" @click="goToMatchs(competition.id)">
      <h5>{{ competition.name }}</h5>
    </div>
  </div>
</template>

<script>

export default {
  name:"Item",
  computed: {
    competitionList() {
      return this.$store.getters.competitionList;
    },
  },

  methods: {
    goToMatchs(id){
      this.$router.push(`/ligas/${id}`)
    }
  },
};
</script>

<style scoped>
.list {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: black;
  color: white;
  margin: 10px 0;
  padding: 0 10px;
}
.list:hover {
  cursor: pointer;
  background-color: brown;
}
h5 {
  width: 300px;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 992px) {
  .list,
  h5 {
    width: 900px;
    text-align: center;
  }
}
</style>