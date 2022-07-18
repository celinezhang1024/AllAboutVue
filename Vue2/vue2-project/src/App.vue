<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <form id="search">
        Search <input name="query" v-model="searchQuery" />
      </form>
      <demoGrid
        :heroes="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
      >
      </demoGrid>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import demoGrid from './components/demoGrid.vue'

export default {
  name: 'App',
  data: function() {
  return {
          searchQuery: "",
          gridColumns: ["name", "power"],
          gridData: [
            { name: "Chuck Norris", power: Infinity },
            { name: "Bruce Lee", power: 9000 },
            { name: "Jackie Chan", power: 7000 },
            { name: "Jet Li", power: 8000 }
          ]
        };
  },
  components: {
    HelloWorld,
    demoGrid,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
