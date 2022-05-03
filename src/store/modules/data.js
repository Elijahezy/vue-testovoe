export default {
  namespaced: true,

  state() {
    return {
      items: [],
      sortKey: localStorage.getItem('sortType') || 'minPrice',
    };
  },

  getters: {
    sortKey: (s) => s.sortKey,

    items: (s) => s.items,

    sortedItems: (s) => {
      const items = JSON.parse(JSON.stringify(s.items));
      switch (s.sortKey) {
        case 'minPrice':
          items.sort((a, b) => a.minPrice - b.minPrice);
          break;
        case 'maxPrice':
          items.sort((a, b) => b.maxPrice - a.maxPrice);
          break;
        case 'name':
          items.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
      return items;
    },
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

    setSortType(s, key) {
      s.sortKey = key;

      localStorage.setItem('sortType', key);
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
  },
};
