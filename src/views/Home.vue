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
              <b-col sm="12" md="6" lg="4" xl="3">
                <Item />
              </b-col>
              <b-col sm="12" md="6" lg="4"  xl="3">
                <Item />
              </b-col >
              <b-col sm="12" md="6" lg="4" xl="3">
                <Item />
              </b-col>
              <b-col sm="12" md="6" lg="4" xl="3">
                <Item />
              </b-col>
              <b-col sm="12" md="6" lg="4" xl="3">
                <Item />
              </b-col>
              <b-col sm="12" md="6" lg="4" xl="3">
                <Item />
              </b-col >
              <b-col sm="12" md="6" lg="4" xl="3">
                <Item />
              </b-col>
              <b-col sm="12" md="6" lg="4" xl="3">
                <Item />
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col class="cart">
          <h4>Cart</h4>
          <CartItem />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '../components/Item'
import CartItem from '../components/CartItem'

export default {
  name: "Home",
  components: { Item , CartItem },
};
</script>
