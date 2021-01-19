<template>
  <div class="map-page">
    <b-container fluid>
      <b-row>
        <b-col cols="10">
          <div class="map-block">
            <l-map
                v-if="showMap"
                :zoom="zoom"
                :minZoom="2.5"
                :center="center"
                :options="mapOptions"
                style="height: 100%"
                :crs="layer.crs"
                @click=""
                @update:center="centerUpdate"
                @update:zoom="zoomUpdate"
            >
              <l-routing-machine :waypoints="waypoints"/>
              <l-geo-json
                  :geojson="geo_json_data"

              />
              <l-tile-layer
                  :url="layer"
                  :subdomains="layer.subdomains"
                  :attribution="layer.attribution"
              />


              <div class="markers">
                <div class="marker" v-for="(marker, index) in markers" :key="index">
                  <map-marker
                      :title="marker.title"
                      :description="marker.description"
                      :position="marker.position"
                      :index="index"
                  />
                </div>
              </div>

              <l-control class="example-custom-control">
                <b-button v-b-modal.marker-form variant="primary">Add marker</b-button>
              </l-control>
            </l-map>
          </div>
        </b-col>
        <b-col cols="2">
          <div class="params-map">

            <b-list-group>
              <b-list-group-item>Zoom: {{ currentZoom }}</b-list-group-item>
              <b-list-group-item>First marker is placed <br>{{ withPopup.lat }}, {{ withPopup.lng }}</b-list-group-item>
              <b-list-group-item>Center <br> {{ currentCenter }}</b-list-group-item>
              <b-list-group-item>
                <b-button variant="info" @click="showLongText">
                  Toggle popup
                </b-button>
                <b-button variant="dark" @click="showMap = !showMap"> Map : {{ showMap ? 'Close' : 'Open' }}</b-button>
              </b-list-group-item>
            </b-list-group>
            <div class="layers">
              <div v-for="(layer, index) in layers" :key="index" class="layer">
                <b-button :pressed="index === layerIndex" variant="primary" @click="layerIndex = index">Layer
                  <br>{{ index }}
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <marker-form :position="[currentCenter.lat, currentCenter.lng]"/>
  </div>
</template>

<script>
import {CRS, latLng} from "leaflet";
import LeafletRoutingMachine from "@/components/LeafletRoutingMachine/LeafletRoutingMachine";
import {LMap, LTileLayer, LTooltip, LControl, LGeoJson} from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';

import MarkerForm from "@/components/Map/MarkerForm";
import MapMarker from "@/components/Map/MapMarker";
import {mapState, mapGetters} from "vuex";
import geo_json_data from "../../test-data-JSON/geo-2.json"

export default {
  name: 'map-leaflet',
  components: {
    LMap,
    LTileLayer,
    LTooltip,
    LControl,
    LGeoJson,
    MapMarker,
    MarkerForm,
    "l-routing-machine": LeafletRoutingMachine
  },
  computed: {
    ...mapGetters('marker', ['text']),
    ...mapState({markers: state => state.marker.markers}),
    layer() {
      return this.layers[this.layerIndex]
    },

  },
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      layerIndex: 0,
      layers: [
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'http://{s}.api.cartocdn.com/base-dark/{z}/{x}/{y}.png',
        'http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
        'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
        'http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png',
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      ],
      geo_json_data: geo_json_data,
      waypoints: [
        {lat: 38.7436056, lng: -9.2304153},
        {lat: 38.7436056, lng: -0.131281},
        // {lat: 38.7436056, lng: 6.2304153},
        // {lat: 6.2304153, lng: 2.2304153},
        // {lat: -7.2304153, lng: -9.2304153},
      ]
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
  },
  async created() {
    L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.3.4/dist/images/";
  }

}
</script>
<style lang="scss">
.map-block {
  width: 100%;
  height: 550px
}

.layers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  .layer {
    margin: 2px;
  }
}
</style>
