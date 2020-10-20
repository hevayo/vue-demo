<template>
    <div class="cart-item">
        <img class="thumb" alt="image" v-bind:src="item.img" />
        <div>
          <span>{{item.name}}</span>
          <span>Price : Rs. {{ item.price }}</span>
          <span>Qty : {{ item.qty }}</span>
          <b-button size="sm" v-on:click="handleRemoveItem">Remove</b-button>
        </div>
    </div>
</template>

<script>
import store from '../store';

export default {
  props: [ 'item' ],
  methods: {
    handleRemoveItem: function() {
      store.remove(this.item);
    }
  }
}
</script>

<style scoped>

.cart-item {
  height: 150px;
  display: inline-block;
}

.cart-item img{
  width: 40%;
  float: left;
  margin-right: 10px;
}

.cart-item span {
  display: block;
}
</style>