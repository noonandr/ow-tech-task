import axios from "axios";

const state = {
  titles: []
};

const mutations = {
  setTitlesData(state, titles) {
    state.titles = titles;
  }
};

const actions = {
  GetTitleData({ commit }) {
    let URL =
      "https://owfetechtask.blob.core.windows.net/titledata/testdata.json";
    axios
      .get(URL)
      .then(response => response.data)
      .then(titles => {
        commit("setTitlesData", titles);
      });
  }
};

const getters = {
  titles(state) {
    return state.titles;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
