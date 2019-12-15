<template>
  <div class="board">
    <card v-for="card of cards"></card>
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: { Card },
  data() {
    return {
      cards: [],
    };
  },
};
</script>

<style scoped>
  .board {
    height: 80%;
    margin: 5% 0;
    width: 100%;
  }
</style>
