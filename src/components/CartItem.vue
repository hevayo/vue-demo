<template>
  <div class="cart-item">
      <img class="thumb" alt="image" src="https://placekitten.com/300/300" />
      <div>
        <span>Apples</span>
        <span>Price : Rs. 200</span>
        <span>Qty : 1</span>
        <b-button size="sm">Remove</b-button>
      </div>
  </div>
</template>

<style scoped>
.cart-item img{
  width: 40%;
  float: left;
  margin-right: 10px;
}

.cart-item span {
  display: block;
}
</style>