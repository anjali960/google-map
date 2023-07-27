<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link><br />
      <button v-on:click="handleClick">
        Click, to see the value in console
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  methods: {
    handleClick() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("lat:", position.coords.latitude);
            console.log("lng:", position.coords.longitude);
          },
          (error) => {
            console.log(error.message);
          }
        );
      }
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
