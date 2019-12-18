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
    flex: 1 1 10%;
    flex-flow: column;
    font-size: 20px;
    font-variant: small-caps;
    justify-content: center;
    padding: 2.5%;
  }
</style>
