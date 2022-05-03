export default {
  namespaced: true,

  state() {
    return {
      items: [],
    };
  },

  getters: {
    items: (s) => s.items,
  },

  mutations: {
    saveItemsToLocalStorage(s) {
      localStorage.setItem('items', JSON.stringify(s.items));
    },

    createItemsFromLocalStorage(s) {
      const str = localStorage.getItem('items');

      if (str == null || str.length == 0) {
        return;
      }

      s.items = JSON.parse(str);
    },
  },

  actions: {
    addItem({ commit, state }, data) {
      data.id = Date.now();

      state.items.push(data);

      commit('saveItemsToLocalStorage');
    },

    removeItemById({ state, commit }, item) {
      state.items = state.items.filter((e) => e.id !== item.id);

      commit('saveItemsToLocalStorage');
    },
    sortByMinPrice({ state, commit }) {
      state.items.sort((a, b) => a.price - b.price);

      commit('saveItemsToLocalStorage');
    },
    sortByMaxPrice({ state, commit }) {
      state.items.sort((a, b) => b.price - a.price);

      commit('saveItemsToLocalStorage');
    },
    sortByName({ state, commit }) {
      state.items.sort((a, b) => a.name.localeCompare(b.name));

      commit('saveItemsToLocalStorage');
    },
  },
};
