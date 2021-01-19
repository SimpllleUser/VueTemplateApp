<template>
  <b-modal ref="calendar-todo-form" id="calendar-todo-form" hide-footer>
    <div class="marker-form">
      <b-form>
        <b-form-group
            label="Todo title: "
            label-for="todo-title"
        >
          <b-form-input
              id="todo-title"
              v-model="title"
              type="text"
              placeholder="Enter title"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Todo content: "
            label-for="todo-content"
        >
          <b-form-textarea
              id="todo-content"
              v-model="content"
              type="text"
              placeholder="Enter content"
              :no-resize="true"
              required
          ></b-form-textarea>
          <b-form-group
              id="marker-title-label"
              :label="'duration: ' + duration+' minute'"
              label-for="duration"
          >
            <b-form-input id="duration" type="range" min="30" max="320" v-model="duration"></b-form-input>
          </b-form-group>
          <b-form-group
              label="Types color"
          >
            <div class="types-button">
              <b-button v-for="(type, index) in types" :key="index" :variant="type.split('--')[1]"
                        :pressed="type === selectedType"
                        @click="selectType(type)"></b-button>
            </div>
          </b-form-group>
        </b-form-group>

        <b-button variant="success" class="mt-3" @click="addNewTodo()">Add
        </b-button>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
import {mapMutations} from "vuex"
import {ADD_TODO} from "@/store/modules/calendar_todo/types";

export default {
  name: 'calendar-todo-form"',
  data() {
    return {
      title: "",
      duration: 30,
      content: "",
      selectedType: "primary",
      types: ["vue-cal--primary", "vue-cal--success", "vue-cal--info", "vue-cal--danger",]
    }
  },
  methods: {
    ...mapMutations('calendar_todo', {addTodo: ADD_TODO}),
    selectType(type) {
      this.selectedType = type
    },
    addNewTodo() {
      this.addTodo({
        id: Date.now(),
        title: this.title,
        content: this.content,
        duration: parseInt(this.duration),
        class: this.selectedType
      })
      this.$refs['calendar-todo-form'].hide();
      this.title = "";
      this.duration = "";
      this.content = "";
      this.selectedType = "vue-cal--primary";
    }
  }
}
</script>
<style scoped lang="scss">
.types-button {
  display: flex;
  justify-content: space-around;

  button {
    width: 100px;
    height: 20px;
  }
}
</style>
