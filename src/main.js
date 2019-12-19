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

function emoji() {
  return ['🙄', '😏', '😂', '🥶', '😃',
    '🤨', '😅', '😆', '🤢', '😡',
    '😋', '😎', '😍', '😘', '🥰',
    '😗', '🤬', '🤡', '😭', '🥵'];
}

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
        board[i] = { id: i, matched: false, value: emoji()[value], selected: false };
        valuesUsageBoard[value] -= 1;
      }
    } while (board[i] == null);
  }

  return board;
}

function initialState() {
  return { cards: restartBoard(), gameFinished: false, moves: 0, movesBlocked: false };
}

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: initialState,
  actions: {
    makeMove(context, cardId) {
      if (!this.state.movesBlocked) {
        context.commit('markCardAsSelected', cardId);

        const selectedCards = this.getters.selectedCards;

        if (selectedCards.length === 2) {
          context.commit('blockMoves');
          context.commit('incrementMoves');
          context.commit('checkPair', selectedCards);

          const notMatchedCards = this.getters.notMatchedCards;

          if (notMatchedCards.length === 0) {
            context.commit('finishGame');
          } else {
            setTimeout(() => {
              context.commit('undoCardsSelection', selectedCards);
              context.commit('unblockMoves');
            }, 1000);
          }
        }
      }
    },
    restartGame(context) {
      context.commit('restartGame');
    },
  },
  getters: {
    findCardById: (state) => (id) => {
      return state.cards.find(card => card.id === id);
    },
    matchedCards(state) {
      return state.cards.filter(card => card.matched);
    },
    notMatchedCards(state) {
      return state.cards.filter(card => !card.matched);
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
      });
    },
    finishGame(state) {
      state.gameFinished = true;
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
    restartGame(state) {
      const defaultState = initialState();
      Object.keys(defaultState).forEach((key) => {
        state[key] = defaultState[key];
      });
    },
    unblockMoves(state) {
      state.movesBlocked = false;
    },
    undoCardsSelection(state, selectedCards) {
      selectedCards.forEach((card) => {
        card.selected = false;
      });
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
