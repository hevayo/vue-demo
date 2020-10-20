<template>
  <div>
      <h2>Add Item</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Item Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter item name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Image URL:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.img"
          required
          placeholder="http://image.com/location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Price:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.price"
          required
          placeholder="12"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import store from '../store';


  export default {
    data() {
      return {
        form: {
          name: '',
          img:'',
          price: 0
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        store.addItem(this.form);
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.img = ''
        this.form.price = null
        
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>