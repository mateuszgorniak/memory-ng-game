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
    font-size: 20px;
    height: 10%;
    text-align: center;
    width: 100%;
  }
</style>
