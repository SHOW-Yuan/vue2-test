<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <button @click="toa">A</button>
      <!-- <router-link to="/toa">A</router-link> -->
      <br />
      <router-link to="/tob">B</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  methods: {
    toa(){
      this.$router.push('/toa');
    }
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
