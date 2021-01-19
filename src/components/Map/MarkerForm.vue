<template lang="html">
  <b-modal ref="marker-form" id="marker-form" hide-footer>

    <div class="marker-form">
      <b-form>
        <b-form-group
            id="marker-title-label"
            label="Marker title: "
            label-for="marker-title"
        >
          <b-form-input
              id="marker-title"
              v-model="title"
              type="text"
              placeholder="Enter title"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            id="marker-description-label"
            label="Marker description: "
            label-for="marker-description"
        >
          <b-form-textarea
              id="marker-description"
              v-model="description"
              type="text"
              placeholder="Enter description"
              :no-resize="true"
              required
          ></b-form-textarea>
          <b-button variant="success" class="mt-3" @click="addNewMarker()">Save marker
          </b-button>
        </b-form-group>
      </b-form>
    </div>
  </b-modal>

</template>

<script lang="js">
import {mapMutations} from "vuex"
import {ADD_MARKER} from "@/store/modules/marker/types";

export default {
  name: 'marker-form',
  props: {
    position: {
      type: Array,
      validator: function (positions) {
        return positions.map(position => typeof position === "number").every(validPosition => validPosition === true
        )
      }
    }
  },
  data() {
    return {
      title: "",
      description: ""
    }
  },
  methods: {
    ...mapMutations('marker', {addMarker: ADD_MARKER}),
    addNewMarker() {

      this.addMarker({title: this.title, description: this.description, position: this.position})
      this.title = ''
      this.description = ''
      this.position = []
    }
  },
  computed: {}
}


</script>

<style scoped lang="scss">
.marker-form {

}
</style>
