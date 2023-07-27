<template>
  <div>
    heyyyyyyyyyyyy
    <gmap-map
      :center="center"
      :zoom="10"
      style="width: 100%; height: 600px"
    ></gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.5, lng: -46.64 },
    };
  },
};
</script>

<style scoped></style>
