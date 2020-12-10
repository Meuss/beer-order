import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    currentPhrase: "None, it's only nine!",
    phrases: {
      0: "None, it's only nine!",
      1: 'Ok, maybe a little bit.',
      2: 'Ok, maybe a little bit.',
      3: 'Ok, maybe a little bit.',
      4: 'Just a little bit more..',
      5: 'Just a little bit more..',
      6: 'Just a little bit more..',
      7: 'Wait I said a little bit!',
      8: 'Wait I said a little bit!',
      9: 'Wait I said a little bit!',
      10: 'Ugh nevermind...',
    },
  },
  mutations: {
    changeCount(state, value) {
      if (state.count > value && value != 0) {
        state.currentPhrase = 'Actually, I changed my mind';
      } else {
        state.currentPhrase = state.phrases[value];
      }
      state.count = value;
    },
  },
  actions: {},
  modules: {},
});
