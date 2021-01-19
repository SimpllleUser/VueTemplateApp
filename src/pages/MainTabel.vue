<template lang="html">
  <div class="main-table">
    <div class="all_data">
      <b-table hover :items="data" :bordered="true" show-empty>

        <template #head()="scope">
          <div class="head-tabel"></div>
        </template>
        <template #thead-top="data">
          <b-tr>
            <b-th variant="secondary" v-for="(field, index) in fields" :key="index">
              <div>
                <b-form-group
                    :label="field.name"
                    :label-for="'input-'+field.value"
                >
                  <b-form-input
                      :id="'input-'+field.value"
                      v-model="tabel_fields[field.value]"
                      type="text"
                      @input="searchValidRows"
                      @focusin="selectField(field.value)"
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-th>
          </b-tr>
        </template>
        <template #empty="data">
          <b-tr>
            <b-th variant="secondary" v-for="(field, index) in fields" :key="index">
              <div>
                <b-form-group
                    :label="field.name"
                    :label-for="'input-'+field.value"
                >
                  <b-form-input
                      :id="'input-'+field.value"
                      v-model="tabel_fields[field.value]"
                      type="text"
                      @input="searchValidRows"
                      @focusin="selectField(field.value)"
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-th>
          </b-tr>
          <h3 class="text-center p-5">{{ data.emptyFilteredText }}</h3>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script lang="js">
import all_data from "../test-data-JSON/data.json"
export default {
  name: 'main-tabel',
  data() {
    return {
      selected_field: "",
      tabel_fields: {},
      fields: [],
      data: [],
      all_data: all_data
    }
  },
  methods: {
    selectField(field) {
      this.selected_field = field
    },
    searchValidRows(value) {
      const selectField = this.selected_field
      const searchValue = this.tabel_fields[selectField]
      this.data = this.all_data.filter(item_data => item_data[selectField].toLowerCase().includes(searchValue.toLocaleLowerCase()) && item_data)
    },
    setFields() {
      this.fields = Object.keys(this.all_data[0])
      const notVAlidFields = Object.keys(this.all_data[0])
      this.fields = notVAlidFields.map(
          field => (
              {
                name: Array.from(field).map(
                    char => char === char.toUpperCase()
                        ? char = ` ${char.toLowerCase()}`
                        : char
                ).join(''),
                value: field
              }
          )
      )
    }
  },
   created() {
    this.setFields()
    this.data = this.all_data
  }
}
</script>

<style scoped lang="scss">
.head-tabel:empty {
  display: none;
}

.cell-tabel {
  width: 100px;
}
</style>
