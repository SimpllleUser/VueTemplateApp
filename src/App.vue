<template>
  <div id="app">
    <layout-changer/>
  </div>
</template>
<script>
import LayoutChanger from "@/components/LayoutChanger";

export default {
  name: "App",
  components: {LayoutChanger},
  created() {
    
    if (!this.$local_storage.getItem('currentUser')) {
      this.$local_storage.setItem('currentUser', {
        id: "",
        accessToken: "",
        username: ""
      })
    }
  }
}

</script>
<style lang="scss">

</style>
