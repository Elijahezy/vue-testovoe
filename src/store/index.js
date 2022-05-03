import { createStore } from 'vuex';

import data from './modules/data.js';

export const store = createStore({
  modules: { data },
});
