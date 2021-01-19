<template>
  <div class="map-page">
    <a href="https://vue2-leaflet.netlify.app/" class="text-center p-5"><h3>Leaflet</h3></a>
    <map-leaflet/>
  </div>
</template>

<script>
import MapLeaflet from "@/components/Map/MapLeaflet";

export default {
  name: "map-page",
  components: {
    MapLeaflet
  }
}
</script>
