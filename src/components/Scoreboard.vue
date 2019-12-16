<template>
  <div class="scoreboard">
    <span>Moves:</span>
    <strong>{{ moves }}</strong>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  computed: {
    moves() {
      return this.$store.state.moves;
    },
  },
  methods: {
    incrementMoves() {
      this.$store.commit('incrementMoves');
    },
  },
};
</script>

<style scoped>
  .scoreboard {
    align-items: center;
    display: flex;
    flex-flow: column;
    font-size: 20px;
    justify-content: center;
    height: 10%;
    text-align: center;
    position: absolute;
    width: 100%;
  }
</style>
