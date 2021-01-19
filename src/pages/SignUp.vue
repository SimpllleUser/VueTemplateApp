<template lang="html">
  <div class="sign-up">
    <b-modal :centered="true" :hide-header-close="true" ref="sign-up-modal" no-close-on-backdrop no-close-on-esc
             hide-footer title="Sign-Up">
      <b-form-group
          label="User name:"
          label-for="user-name"
      >
        <validation-message-list :statusField="stateFields" fieldName="name" :invalidParametrs="invalidParametrs.name"/>
        <b-form-input
            id="user-name"
            type="text"
            v-model="user.name"
            :state="stateFields.name"
            placeholder="Enter name"
            aria-describedby="input-live-help input-live-feedback"
        ></b-form-input>
      </b-form-group>
      <b-form-group
          label="Email:"
          label-for="user-email"
      >
        <validation-message-list :statusField="stateFields" fieldName="email"
                                 :invalidParametrs="invalidParametrs.email"/>
        <b-form-input
            id="user-email"
            type="email"
            v-model="user.email"
            :state="stateFields.email"
            placeholder="Enter email"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          label="Password:"
          label-for="user-password"
      >
        <validation-message-list :statusField="stateFields" fieldName="password"
                                 :invalidParametrs="invalidParametrs.password"/>
        <b-form-input
            id="user-password"
            type="password"
            v-model="user.password"
            :state="stateFields.password"
            placeholder="Enter password"
            required
        ></b-form-input>
      </b-form-group>
      <b-button :variant="validationForm ? 'success' : 'secondary'"
                @click="signUpAuth(user)">Send
      </b-button>
    </b-modal>
  </div>
</template>

<script lang="js">
import {mapActions} from 'vuex'
import {required, email, minLength, maxLength,} from "vuelidate/lib/validators";
import {SIGNUP_AUTH} from "@/store/modules/auth/types";
import modalMixin from "@/mixins/modal.mixin";
import validationInput from "@/mixins/validationInput.mixin"
import ValidationMessageList from "@/components/ValidationMessageList";

export default {
  name: 'sign-up',
  mixins: [modalMixin, validationInput],
  components: {ValidationMessageList},
  computed: {
    validationForm: function () {
      const fieldsName = Object.keys(this.user)
      const fieldsValid = fieldsName.map(fieldName => this.validationField(fieldName))
      fieldsValid.forEach((fieldValid, index) => {
        this.setStateFields(fieldsName[index], fieldValid)
      })
      this.invalidParametrs = this.getInvalidParametr()
      return fieldsValid.every((fieldValid) => fieldValid === true)
    }
  },
  data() {
    return {
      user: {
        email: null,
        name: null,
        password: null,
      },
      stateFields: {},
      invalidParametrs: {},
    }
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(12),
        containsUppercase: function (value) {
          return /[A-Z]/.test(value)
        },
        containsLowercase: function (value) {
          return /[a-z]/.test(value)
        },
        // containsNumber: function (value) {
        //   return /[0-9]/.test(value)
        // },
      }
    }
  },
  methods: {
    ...mapActions("auth", {signUpAuth: SIGNUP_AUTH}),
    checkedValidationParams(model, params) {
      const filterValidationParams = params.filter(param => this.$v.user[model][param] !== true)
      this.validation[model].params = filterValidationParams
      return !filterValidationParams.length
    },
    setStateFields(fieldName, status) {
      this.stateFields[fieldName] = status
      if (this.user[fieldName] === null) {
        this.stateFields[fieldName] = null
      }
    },
  },
  mounted() {
    this.showModal('sign-up-modal')
  },
}
</script>

<style scoped lang="scss">


.sign-up {
}
</style>
