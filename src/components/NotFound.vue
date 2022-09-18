<script setup></script>

<template lang="pug">
.notFound
  h2.notFound__code {404-ERROR}
  .notFound__line
  span.notFound__text
    | This page could not be found ==>
    a.notFound__route(href="/" rel="noopener") Home Page
</template>

<style scoped>
.notFound {
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
}
.notFound h2 {
  width: 100%;
  font-weight: bold;
  font-size: 40px;
  text-align: end;
}
.notFound__text {
  display: flex;
  width: 100%;
  font-size: 18px;
  column-gap: 10px;
}
.notFound__line {
  width: 12px;
  height: 72px;
  background-color: hsla(160, 100%, 37%, 1);
}

.notFound__route:hover {
  background-color: transparent;
}
</style>
