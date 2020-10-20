
var store = {
    debug: true,
    state: {
      siteName: 'My Shop',
      items: [
          {
            name: "Apple",
            img: "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
            price: 1,
            show: true
          },
          {
            name: "Orange",
            img: "https://www.marlerblog.com/files/2013/03/orange.jpg",
            price: 2,
            show: true
          },
          {
            name: "Banana",
            img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
            price: 3,
            show: true
          },
      ],
      cart: [
         
      ]
    },
    addItem (item){
        this.state.items.push({...item, show: true});
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
    },

    filter (query) {
      if (this.debug) console.log('filter items with :' + query)
      for (let index = 0; index < this.state.items.length; index++) {
        const item = this.state.items[index];
        if (item.name.toLowerCase().includes(query.toLowerCase())) {
          item.show = true;
        } else {
          item.show = false;
        }
      }
    }
};

export default store;