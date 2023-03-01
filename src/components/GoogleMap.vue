<script setup>
import { onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyAS_4CzEjzAxc9QT77w6s-elbdNz_1qQGc",
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
      map.value = new google.maps.Map(document.getElementById('map'), {
        center: { lat: props.lat, lng: props.lng },
        zoom: 17,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false
      })
      let marker = new google.maps.Marker({
        position: { lat: props.lat, lng: props.lng },
        map: map.value,
        title: "Hello World!",
      })
    })
})
</script>

<template>
  <div id="map" class="map" />
</template>

<style>
.map {
  width: 100%;
  height: 300px;
}
</style>
