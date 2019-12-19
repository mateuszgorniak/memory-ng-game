<template>
  <div class="overlay" v-if="gameFinished">
    <div class="modal">
      <p class="header">🎉🎉 Great success! 🎉🎉</p>
      <p>You've won game by only {{moves}} moves! Click below to restart!</p>
      <a class="button" @click="restartGame">Restart!</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    gameFinished() {
      return this.$store.state.gameFinished;
    },
    moves() {
      return this.$store.state.moves;
    },
  },
};
</script>

<style scoped>
.button {
  background-color: blue;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  display: block;
  margin: 10px;
  padding: 10px 30px;
}

.header {
  font-weight: 600;
}

.modal {
  background: #fff;
  border-radius: 5px;
  margin: 0 20%;
  padding: 20px;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  transition: all 5s ease-in-out;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
}
</style>
