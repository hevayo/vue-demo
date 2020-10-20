<template>
  <div class="admin">
    <b-container fluid>
      <b-row>
        <b-col cols="2">
            <h2>Menu</h2>
            <a>Manage Items</a>
        </b-col>
        <b-col cols="10">
            <h1>Manage Items</h1>
            <b-table striped hover :items="items"></b-table>
            <AddItemForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import store from '../store';
import AddItemForm from '../components/AddItemForm'

export default {
    data: ()=>{
        return {
            items: store.state.items
        }
    },
    components: { AddItemForm }
}
</script>