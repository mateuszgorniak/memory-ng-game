<template>
  <div class="card" v-on:click="selectCard" v-bind:class="classObject">
    <div class="content">
      <div class="front">
        Image
      </div>
      <div class="back">
        Value
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectCard() {
      this.$store.dispatch('makeMove', this.card.id);
    },
  },
  computed: {
    classObject() {
      return {
        matched: this.card.matched,
        selected: this.card.selected,
      };
    },
  },
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.card {
  display: inline-block;
  height: 20%;
  margin: 2.25%;
  width: 20%;
}

.card.matched .content {
  transform: rotateY( 180deg ) ;
}

.card.selected .content {
  transform: rotateY( 180deg ) ;
  transition: transform 0.5s;
}

.content {
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  width: 100%;
}

.back,
.front {
  backface-visibility: hidden;
  border-radius: 5px;
  font-size: 30px;
  height: 100%;
  position: absolute;
  width: 100%;
}

.back {
  background: #03446A;
  color: white;
  transform: rotateY( 180deg );
}

.front {
  background: white;
  color: #03446A;
}
</style>
