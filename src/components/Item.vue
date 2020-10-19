<template>
  <div class="item">
    <div class="">
      <img class="thumb" alt="image" src="https://placekitten.com/300/300" />
      <div class="">
        <h5 class="">Apples</h5>
        <h5 class="">Price : Rs. 200</h5>
        <b-form-input class="item-amount" v-model="text" size="sm"></b-form-input>
        <b-button size="sm">Add to Cart</b-button>
      </div>
    </div>
  </div>
</template>

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