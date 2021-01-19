<template lang="html">
  <div>
    <l-marker :lat-lng="position">
      <l-popup>
        <div class="marker--body">
          <div v-if="status === 'edit'">
            <b-form-input
                id="marker-title"
                v-model="marker.title"
                type="text"
                placeholder="Enter title"
                required
            ></b-form-input>
            <b-form-textarea
                id="marker-description"
                v-model="marker.description"
                type="text"
                placeholder="Enter description"
                :no-resize="true"
                required
            ></b-form-textarea>
          </div>
          <div v-else>
            <h3>{{ title }}</h3>
            <p>
              {{ description }}
            </p>
          </div>

          <b-button variant="danger" @click="deleteMarker(index)">Delete</b-button>
          <b-button variant="success" @click="editMarker()" v-if="status === 'edit'">Save</b-button>
          <b-button variant="info" @click="showEditForm()" v-else>Edit</b-button>

        </div>
      </l-popup>
    </l-marker>
  </div>

</template>

<script lang="js">
import {
  LMarker, LPopup,
} from "vue2-leaflet"
import {mapMutations} from "vuex"
import {DELETE_MARKER, EDIT_MARKER} from "@/store/modules/marker/types";

export default {
  name: 'map-marker',
  components: {
    LMarker,
    LPopup,
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    position: {
      type: Array,
      validator: function (positions) {
        return positions.map(position => typeof position === "number").every(validPosition => validPosition === true
        )
      }
    },
    index: {
      type: Number
    }
  },
  //props: ["title", "description", "position", "index"],
  mounted() {

  },
  data() {
    return {
      status: null,
      marker: {
        title: "",
        description: ""
      }
    }
  },
  methods: {
    ...mapMutations('marker', {deleteMarker: DELETE_MARKER, saveEditMarker: EDIT_MARKER}),
    showEditForm() {
      this.status = "edit";
      this.marker = {
        title: this.title,
        description: this.description,
        position: this.position,
      }
    },
    editMarker() {
      this.saveEditMarker({editedMarker: this.marker, markerIdx: this.index})
      this.marker = {title: "", description: "", position: ""}
      this.status = null
    }
  },

  computed: {}
}


</script>

<style scoped lang="scss">
.marker {

}
</style>
