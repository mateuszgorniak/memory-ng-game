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
  methods: {
  },
};
</script>

<style scoped>
  .board {
    height: 80%;
    margin: 5% 0;
    position: absolute;
    width: 100%;
  }
</style>
