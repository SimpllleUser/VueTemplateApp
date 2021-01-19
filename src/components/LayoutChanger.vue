<script src="../plugins/local_storage.js"></script>
<template lang="html">

  <div class="layout-changer">
    <component :is="layout">
      <router-view/>
    </component>
  </div>

</template>

<script lang="js">

import DefaultLayout from "@/layouts/DefaultLayout";
import EmptyLayout from "@/layouts/EmptyLayout";

export default {
  name: 'layout-changer',
  components: {
    DefaultLayout,
    EmptyLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout"
    }
  },
  mounted() {

  },
  data() {
    return {}
  },
  methods: {},
}


</script>

<style scoped lang="scss">
.layout-changer {

}
</style>
