<template>
  <div class="board">
    <card v-for="(card, index) of cards" v-bind:card="card" :key="index"></card>
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: { Card },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
};
</script>

<style scoped>
  .board {
    display: flex;
    flex: 1 1 80%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2.5%;
  }
</style>
