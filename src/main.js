// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);

const BOARD_HEIGHT = 4;
const BOARD_WIDTH = 4;
const BOARD_ELEMENTS = BOARD_HEIGHT * BOARD_WIDTH;
const BOARD_UNIQUE_VALUES = BOARD_ELEMENTS / 2;

function generateValuesUsageBoard() {
  const board = [];

  for (let i = 0; i < BOARD_UNIQUE_VALUES; i += 1) {
    board[i] = 2;
  }

  return board;
}

function restartBoard() {
  const board = [];
  const valuesUsageBoard = generateValuesUsageBoard();

  for (let i = 0; i < BOARD_ELEMENTS; i += 1) {
    do {
      const value = Math.floor(Math.random() * BOARD_UNIQUE_VALUES);

      if (valuesUsageBoard[value] > 0) {
        board[i] = { value, id: i, matched: false, selected: false };
        valuesUsageBoard[value] -= 1;
      }
    } while (board[i] == null);
  }

  return board;
}

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    cards: restartBoard(),
    moves: 0,
    movesBlocked: false,
  },
  actions: {
    makeMove(context, cardId) {
      if (!this.state.movesBlocked) {
        context.commit('markCardAsSelected', cardId);

        const selectedCards = this.getters.selectedCards;

        if (selectedCards.length === 2) {
          context.commit('blockMoves');

          setTimeout(() => {
            context.commit('incrementMoves');
            context.commit('checkPair', selectedCards);
            context.commit('unblockMoves');
          }, 1000);
        }
      }
    },
  },
  getters: {
    findCardById: (state) => (id) => {
      return state.cards.find(card => card.id === id);
    },
    matchedCards(state) {
      return state.cards.filter(card => card.matched);
    },
    selectedCards(state) {
      return state.cards.filter(card => card.selected);
    },
  },
  mutations: {
    blockMoves(state) {
      state.movesBlocked = true;
    },
    checkPair(state, selectedCards) {
      const pair = selectedCards[0].value === selectedCards[1].value;

      selectedCards.forEach((card) => {
        card.matched = pair;
        card.selected = false;
      });
    },
    incrementMoves(state) {
      state.moves += 1;
    },
    markCardAsSelected(state, cardId) {
      const card = this.getters.findCardById(cardId);

      if (!card.matched) {
        card.selected = true;
      }
    },
    unblockMoves(state) {
      state.movesBlocked = false;
    },
  },
});

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
