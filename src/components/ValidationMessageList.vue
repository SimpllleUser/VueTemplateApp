<template lang="html">
  <div class="validation-message-list">
    <div class="validation-messages" v-if="showMessages">
      <b-form-text text-variant="danger" v-for="parameter in invalidParametrs" :key="parameter">
        {{ messages[fieldName][parameter] }}
      </b-form-text>
    </div>
  </div>

</template>

<script lang="js">
import messages from "../validation-message.json"

export default {
  name: 'validation-message-list',
  props: {
    fieldName: {
      type: String,
      required: true,
    },
    invalidParametrs: {
      type: Array
    },
    statusField: {
      validator: function (value) {
        const keys = Object.keys(value)
        const checkType = (type) => {
          if(type === null)return true
          return typeof type === "boolean"
        }

        return keys.map(key => checkType(value[key])).every(item => item === true)
      }
    }
  },
  computed: {
    showMessages() {
      return !!this.invalidParametrs?.length && this.statusField[this.fieldName] !== null
    }
  },
  data() {
    return {
      messages: messages
    }
  },
}


</script>

<style scoped lang="scss">
.validation-message-list {
  .validation-messages {
    display: flex;
    flex-wrap: wrap;

    small {
      margin-left: 15px;
    }
  }
}
</style>
