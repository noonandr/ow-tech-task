<script setup>
import { onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API;

const loader = new Loader({
  apiKey: googleMapsApiKey,
  version: "weekly",
  libraries: ["places"]
})

const props = defineProps({
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
})

const map = ref([]);

onMounted(async () => {
  await loader
    .load()
    .then(google => {
      // set google map
      map.value = new google.maps.Map(document.getElementById('map'), {
        center: { lat: props.lat, lng: props.lng },
        zoom: 17,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false
      })
      // set marker on generated google map
      new google.maps.Marker({
        position: { lat: props.lat, lng: props.lng },
        map: map.value
      })
    })
})
</script>

<template>
  <div id="map" class="map" />
</template>

<style scoped lang="scss">
.map {
  width: 100%;
  height: size(40);
}
</style>
