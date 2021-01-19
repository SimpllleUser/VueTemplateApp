<template>
  <div class="nav-bar--block">
    <div class="nav-bar">
      <b-list-group horizontal="md" class="link-group">
        <b-list-group-item v-for="(link, index) in links" :key="index" :active="activeLink(link.path)"
                           exact-active-class="active-link">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </b-list-group-item>
        <b-list-group-item variant="danger">
          <b-button variant="danger" @click="logOutUser()">Logout</b-button>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>
<script>
import {mapMutations} from "vuex";
import {LOGOUT_AUTH} from "@/store/modules/auth/types";

export default {
  name: "nav-bar",
  data() {
    return {
      links: [
        {
          name: "Home",
          path: "/"
        },
        // {
        //   name: "Map",
        //   path: "/map"
        // },
        // {
        //   name: "Calendar",
        //   path: "/calendar"
        // },
        // {
        //   name: "table",
        //   path: "/table"
        // },
        {
          name: "About",
          path: "/about"
        },
        {
          name: "SignIn",
          path: "/sign-in"
        },
        {
          name: "SignUp",
          path: "/sign-up"
        },
      ]
    }
  },
  methods: {
    ...mapMutations("auth", {logOutUser: LOGOUT_AUTH}),
    activeLink(path) {
      return this.$route.path === path
    }
  }
}
</script>
<style lang="scss">
.nav-bar {
  display: flex;
  width: calc(50% - 10px);
  margin: 10px auto;

  .link-group {
    margin: 0 auto;

    .list-group-item.active {
      transition: all 0.3s;

      a {
        transition: all 0.5s;
        color: white;

      }
    }
  }

}
</style>
