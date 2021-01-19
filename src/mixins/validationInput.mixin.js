import {validationMixin} from 'vuelidate'
import {email, maxLength, minLength, required} from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    data() {
        return {
            invalidParamsValue: {}

        }
    },
    validations: {
        fields: {
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
                containsNumber: function (value) {
                    return /[0-9]/.test(value)
                },
                containsSpecial: function (value) {
                    return /[#?!@$%^&*-]/.test(value)
                }
            }
        }
    },
    methods: {
        getValidationRule(fieldName) {
            return Object.keys(this.$v.user[fieldName]).filter(rule => rule.indexOf('$') !== 0)
        },
        validationField(fieldName) {
            const validationRules = this.getValidationRule(fieldName)
            const inValidFields = validationRules.filter(validationRule => this.$v.user[fieldName][validationRule] !== true)
            this.setInvalidParamsValue(fieldName, inValidFields)
            return inValidFields.length === 0
        },
        setInvalidParamsValue(fieldName, inValidFields) {
            this.invalidParamsValue[fieldName] = inValidFields
        },
        getInvalidParametr(){return this.invalidParamsValue}
    }
}
