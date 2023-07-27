<template>
  <div class="home">
    <GoogleMap />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleMap from "../components/GoogleMap.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    GoogleMap,
  },
};
</script>
