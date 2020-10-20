<template>
  <div class="home">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col class="item-menu">
          <h4>Categories</h4>
        </b-col>
        <b-col class="items" cols="8">
          <h2>Fruits</h2>
          <b-container fluid>
            <b-row>
              <b-col v-for="item in items.filter(i => { return i.show })" :key="item.name" sm="12" md="6" lg="4" xl="3">
                <Item v-bind:item="item" />
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col class="cart">
          <h4>Cart</h4>
          <transition-group name="cartitems" tag="p">
            <CartItem  v-for="item in cart" :key="item.name" v-bind:item="item" />
          </transition-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '../components/Item'
import CartItem from '../components/CartItem'
import store from '../store';

export default {
  data: () => { return store.state },
  name: "Home",
  components: { Item , CartItem },
};
</script>

<style scoped>
.cartitems-item {
  display: inline-block;
  margin-right: 10px;
}
.cartitems-enter-active, .cartitems-leave-active {
  transition: all 1s;
}
.cartitems-enter, .cartitems-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(70px);
}
</style>