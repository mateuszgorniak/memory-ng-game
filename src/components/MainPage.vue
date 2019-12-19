<template>
  <div class="page">
    <scoreboard></scoreboard>
    <board></board>
  </div>
</template>

<script>
import Board from './Board';
import Scoreboard from './Scoreboard';

export default {
  components: { Board, Scoreboard },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
