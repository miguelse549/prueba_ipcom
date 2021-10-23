<template>
  <div class="container" @click.self="onParentClick">
    <div class="modal">
      <div class="header-modal">
        <i class="fas fa-times-circle" @click="$emit('closeModal')"></i>
      </div>
      <div class="content-modal" v-html="videoEmbed"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    videoEmbed: String,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    onParentClick() {
      //  console.log("focus");
      this.$emit("showModal", this.showModal);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0.9;
  background-color: rgb(110, 110, 110);
  height: 100vh;
}

.modal {
  border-radius: 5px;
  width: 560px;
}

.header-modal {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  height: 40px;
  background-color: rgb(255, 249, 249);
}

.content-modal {
}

i {
  padding: 10px 10px;
  cursor: pointer;
  color: rgb(90, 79, 79);
  font-size: 25px;
  margin: 0;
  padding: 0;
  border-radius: 50px;
}
@media (max-width: 414px) {
  .modal {
    width: 460px;
    max-width: 95%;
  }
  .header-modal {
    padding: 5px;
    height: 25px;
  }
  i {
    font-size: 18px;
    margin: 0;
    padding: 0;
    border-radius: 50px;
  }
}
</style>