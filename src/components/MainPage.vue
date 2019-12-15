<template>
  <div>
    <scoreboard></scoreboard>
    <board></board>
  </div>
</template>

<script>
import Board from './Board';
import Scoreboard from './Scoreboard';

export default {
  components: { Board, Scoreboard },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
