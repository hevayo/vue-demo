
var store = {
    debug: true,
    state: {
      siteName: 'My Shop',
      items: [
          {
              name: "Apple",
              img: "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
              price: 1
          },
          {
            name: "Orange",
            img: "data:image/jpeg;base64,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",
            price: 2
          },
          {
            name: "Banana",
            img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
            price: 3
          },
      ],
      cart: [
        {
            name: "Apple",
            img: "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
            price: 1,
            qty: 2,
        }          
      ]
    },
    addToCart (item) {
      if (this.debug) console.log('add to cart triggered with', item);
      // check if item exist in the cart
      const found = this.state.cart.find(element => element.name == item.name);

      // if not add a new item
      if ( found ) {
        found.qty++; 
      } else {
        // else increase the qty
        this.state.cart.push({ ...item , qty: 1});
      }
    },

    remove (item) {
      if (this.debug) console.log('remove from cart triggered')
      for (let index = 0; index < this.state.cart.length; index++) {
          if ( this.state.cart[index].name == item.name) {
            this.state.cart.splice(index, 1);
          }
      }
    }
};

export default store;