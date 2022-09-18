import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    posts: [],
    loading: false,
    error: null,
  },
  getters: {
    getPosts: (state) => state.posts,
    getErrors: (state) => state.error,
    getLoading: (state) => state.loading,
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        commit("SET_LOADING", true);
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("SET_POSTS", data.data);
        commit("SET_LOADING", false);
      } catch (error) {
        alert(error);
        console.log(error);
        commit("SET_LOADING", false);
        commit("SET_ERROR", error);
      }
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_LOADING(state, action) {
      state.loading = action;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
});
