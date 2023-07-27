<template>
  <div ref="mapContainer" class="google-map-container"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  name: "GoogleMap",
  data() {
    return {
      map: null,
      mapOptions: {
        center: { lat: 27.886833, lng: 78.0994099 },
        zoom: 12,
      },
      markerPosition: { lat: 27.886833, lng: 78.0994099 },
      markerTitle: "Aligarh",
      markerContent: "Welcome to Aligarh City!",
    };
  },
  methods: {
    initMap() {
      this.map = new window.google.maps.Map(
        this.$refs.mapContainer,
        this.mapOptions
      );
      this.addMarker();
    },
    addMarker() {
      const marker = new window.google.maps.Marker({
        position: this.markerPosition,
        map: this.map,
        title: this.markerTitle,
      });
      const infowindow = new window.google.maps.InfoWindow({
        content: this.markerContent,
      });
      marker.addListener("click", () => {
        infowindow.open(this.map, marker);
      });
    },
  },
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyA4KqG0k2_1s8cjnNn4mcLOerfaT_Aahx8",
      version: "weekly",
    });

    loader.load().then(() => {
      this.initMap();
    });
  },
};
</script>

<style>
.google-map-container {
  width: 100%;
  height: 400px;
}
</style>
