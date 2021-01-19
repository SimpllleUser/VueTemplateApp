<script src="../../store/modules/calendar_todo/types.js"></script>
<template lang="html">

  <b-list-group-item @dblclick="deleteTodo(id)" :variant="typeVariant">
    <strong>{{ title }}</strong>
    ({{ duration ? `${duration} min` : 'no duration' }})
    <div>{{ content }}</div>
  </b-list-group-item>

</template>

<script lang="js">
import {mapMutations} from "vuex"
import {DELETE_TODO} from "@/store/modules/calendar_todo/types";

export default {
  name: 'calendar-todo',
  props: {
    title: {
      type: String,
    },
    duration: {
      type: Number,
    },
    content: {
      type: String,
    },
    type: {
      type: String,
    },
    id: {
      type: Number
    }
  },
  computed: {
    typeVariant() {
      return this.type.split("--")[1]
    }
  },
  mounted() {

  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations('calendar_todo', {deleteTodo: DELETE_TODO}),
  },
}


</script>

<style scoped lang="scss">
.calendar-todo {

}
</style>
