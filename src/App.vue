<template>
  <Header />
  <Input />
  <Filters />
  <router-view />
</template>

<script setup lang="ts">
import Input from './components/Input.vue'
import Header from './components/Header.vue'
import Filters from './components/Filters.vue'
import { useStore } from './store'
import { onBeforeMount } from 'vue'
import { MutationType } from './models/storeModel'

const store = useStore()

onBeforeMount(() => {
  store.commit(MutationType.Initial)
})
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  scrollbar-width: thin;
  scrollbar-color: #333333 #ffffff;
  -webkit-font-feature-settings: "lnum";
  -moz-font-feature-settings: "lnum";
  font-feature-settings: "lnum";
}

html,
body,
#app {
  height: 100%;
  width: 100%;
}

#app {
  max-width: 1080px;
  margin: 0 auto;
}

body {
  background: #070707;
}
</style>
