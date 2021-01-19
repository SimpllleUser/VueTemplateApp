<template lang="html">
<div class="container-notfoundPage">
  <section class="404 "  >
    <h1>Oops! </h1>
    <h3>404 Not Found</h3>
    <div>Sorry, an error has occured, Requested page not found!</div>
      <router-link v-slot="{ href}" to="/">
        <b-link  :href="href">
          Home
        </b-link>
      </router-link>
  </section>
</div>
</template>

<script lang="js">

export default {
  name: '404',
}
</script>
<style lang="scss">
  .container-notfoundPage{
    margin-top: calc(50% - 200px);
    display: flex;
    justify-content: center;
  }
</style>
