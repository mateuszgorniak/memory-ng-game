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
</style>
