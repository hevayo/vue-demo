<template>
  <div class="item">
    <div class="">
      <img class="thumb" alt="image" v-bind:src="item.img" />
      <div class="">
        <h5 class="">{{ item.name }}</h5>
        <h5 class="">Price : Rs. {{ item.price }}</h5>
        <b-form-input class="item-amount" v-model="text" size="sm"></b-form-input>
        <b-button size="sm" v-on:click="handleAddToCart" >Add to Cart</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  props: [ 'item' ],
  methods: {
    handleAddToCart: function() {
      store.addToCart(this.item);
    }
  }
}
</script>

<style scoped>
.item {
  margin: 20px 5px;
  padding: 20px;
  border: 1px solid #aaa;
}

.thumb {
  width: 100%;
}
</style>