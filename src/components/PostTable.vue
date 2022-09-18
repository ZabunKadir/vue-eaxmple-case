<template lang="pug">
.table__container
  .loading(v-if="loading")
      pulse-loader(:loading="loading" :color="loadingSpinner" :size="loadingSpinner")
  .table__wrapper(v-else)
      table.table.table-striped.table-dark
        thead
          tr
            th(scope="col") #
            th(scope="col") User ID
            th(scope="col") Title
            th(scope="col") Body
        tbody
          tr(v-for="(item, index) in posts" v-bind:key="index")
            th(scope="row") {{ index + 1 }}
            td {{ item.userId }}
            td {{ item.title }}
            td {{ item.body }}
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const store = useStore();

const posts = computed(() => {
  return store.getters.getPosts;
});

const loading = computed(() => {
  return store.getters.getLoading;
});

onMounted(() => {
  store.dispatch("fetchPosts");
});
</script>

<style scoped>
.table__container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loadingSpinner {
  color: hsla(160, 100%, 37%, 1);
  size: 64px;
}
.table__wrapper {
  width: 80%;
  margin: 50px auto;
  height: calc(100vh - 100px);
  overflow: auto;
}

::-webkit-scrollbar {
  /* width */
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  /* Track */
  box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.5);
  border-radius: 8px;
  margin-top: 56px;
  margin-bottom: 32px;
}

::-webkit-scrollbar-thumb {
  /* Handle */
  background: rgba(110, 110, 110, 0.5);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  /* Handle on hover */
  background: rgba(110, 110, 110, 0.5);
}

::-webkit-scrollbar-track-piece {
  /* not handle on */
  background: rgba(1, 1, 1, 0.3);
}

.table {
  width: 100%;
}
.table > thead > tr > th {
  min-width: 100px;
  background-color: #3c1f41;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid hsla(160, 100%, 37%, 0.5);
}
.table > thead > tr > th:not(:last-child) {
  border-right: 2px solid hsla(160, 100%, 37%, 1);
}
.table > thead > tr > th:first-child {
  border-top-left-radius: 20px;
}
.table > thead > tr > th:last-child {
  border-top-right-radius: 20px;
}
.table > tbody > tr > th {
  text-align: center;
  vertical-align: middle;
}
.table > tbody > tr > td {
  text-align: center;
  vertical-align: middle;
}
.table > tbody > tr:last-child > th {
  border-bottom-left-radius: 20px;
}
.table > tbody > tr:last-child > td,
.table > tbody > tr:last-child > th {
  border-bottom: none;
}
.table > tbody > tr:last-child > td:last-child {
  border-bottom-right-radius: 20px;
}
.table > tbody > tr:hover > th {
  transition: 0.3s all ease-in-out;
  color: hsla(160, 100%, 37%, 1);
}
.table > tbody > tr:hover > td {
  transition: 0.3s all ease-in-out;
  color: hsla(160, 100%, 37%, 1);
}
.table > tbody > tr:hover:not(:last-child) {
  transition: 0.3s all ease-in;
  box-shadow: 0 12px 32px 12px hsla(160, 100%, 37%, 0.5);
}
@media (max-width: 540px) {
  .table > thead > tr > th {
    min-width: none;
    padding: 8px;
  }
  .table > thead > tr > th:nth-child(3) {
    min-width: 120px;
  }
  .table > thead > tr > th:last-child {
    min-width: 320px;
  }
}
</style>
