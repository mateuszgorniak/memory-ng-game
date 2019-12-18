<template>
  <div class="card" v-on:click="selectCard" v-bind:class="classObject">
    <div class="content">
      <div class="front"></div>
      <div class="back">
        {{card.value}}
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
  flex: 1 1 20%;
  margin: 2.25%;
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
  transform: rotateY( 180deg );
}

.front {
  background-color: #03446A;
  background-image: url('~@/assets/netguru_logo.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
}
</style>
