<template>
  <div class="calendar-schedule">
    <div class="calendar-schedule--container">
      <b-container fluid>
        <b-row>
          <b-col cols="10">
            <vue-cal
                class="vue-cal-main"
                locale="uk"
                active-view="month"
                :editable-events="{ title: true, drag: true, resize: true, delete: true, create: true }"
                :drag-to-create-threshold="0" :time-from="8 * 60" :time-to="19 * 60" :time-step="30"
                editable-events
                resize-x
                resize-y
                :on-event-click="onEventClick"

            />
          </b-col>
          <b-col cols="2">
            <b-list-group class="draggables">
              <calendar-todo-form/>
              <b-button v-b-modal.calendar-todo-form variant="primary">Create todo</b-button>

              <div class="external-event"
                   v-for="(item, index) in todos"
                   :key="index"
                   draggable="true"
                   @dragstart="onEventDragStart($event, item)">
                <calendar-todo
                    :title="item.title"
                    :duration="item.duration"
                    :content="item.content"
                    :type="item.class"
                    :id="item.id"
                />
              </div>
            </b-list-group>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/drag-and-drop.js'
import 'vue-cal/dist/i18n/uk.js'
import 'vue-cal/dist/vuecal.css'

import CalendarTodo from "@/components/Calendar/CalendarTodo";
import CalendarTodoForm from "@/components/Calendar/CalendarTodoForm";
import {mapState, mapGetters} from "vuex"

export default {
  name: "calendar-schedule",
  components: {VueCal, CalendarTodo, CalendarTodoForm},
  computed: {
    ...mapState({todos: state => state.calendar_todo.todos}),
    layer() {
      return this.layers[this.layerIndex]
    },

  },
  data() {
    return {}
  },
  methods: {
    onEventDragStart(e, draggable) {
      e.dataTransfer.setData('event', JSON.stringify(draggable))
      e.dataTransfer.setData('cursor-grab-at', e.offsetY)
    },
    if(external) {
      const extEventToDeletePos = this.todos.findIndex(item => item.id === originalEvent.id)
      if (extEventToDeletePos > -1) this.todos.splice(extEventToDeletePos, 1)
    },
    onEventClick(event, e) {
      e.stopPropagation()
    }
  }
}
</script>

<style lang="scss">
.vue-cal--primary {
  background-color: var(--primary);
  color: white;
}

.vue-cal--success {
  background-color: var(--success);
  color: white;
}

.vue-cal--warning {
  background-color: var(--warning);
  color: black;
}

.vue-cal-main {
  min-height: 500px;
}

.external-event {
  max-width: 250px;
}
</style>
