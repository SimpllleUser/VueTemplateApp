<template>
  <div class="home d-flex flex-wrap justify-content-around ">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang="scss">
img{
  width: 400px;
  height: 400px;
}
</style>
