<template>
  <div class="page">
    <scoreboard></scoreboard>
    <board></board>
    <modal></modal>
  </div>
</template>

<script>
import Board from './Board';
import Modal from './Modal';
import Scoreboard from './Scoreboard';

export default {
  components: { Board, Modal, Scoreboard },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
