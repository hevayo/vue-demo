<template>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="query"
              v-on:keyup="handleSearchClick"
            ></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
</template>

<script>
import store from '../store';

export default {
    data: () => {
        return { query: ""}
    },
    methods: {
        handleSearchClick: function () {
            store.filter(this.query);
        }
    }
}
</script>