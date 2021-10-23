<template>
  <div class="container"><Item /></div>
</template>
<script>
import Item from "@/components/Item.vue";

export default {
  components: {
    Item,
  },
};
</script>
<style scoped>

.container{
  height: calc(100vh - 160px);
}

</style>
