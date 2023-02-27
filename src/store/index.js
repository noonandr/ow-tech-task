import { createStore } from "vuex";

import titles from "./modules/titles.js";

export default createStore({
  modules: {
    titles
  }
});
