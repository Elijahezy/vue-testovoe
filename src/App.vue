<template>
  <Form />
  <ItemsList />
</template>

<script>
import Form from './components/Form.vue';
import ItemsList from './components/ItemsList.vue';

export default {
  name: 'App',

  components: {
    Form,
    ItemsList,
  },

  created() {
    this.$store.commit('data/createItemsFromLocalStorage');
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  box-sizing: border-box;
  background-color: #e5e5e5;
}
#app {
  display: grid;

  grid-template-rows: 1fr;
  grid-template-columns: 500px auto;

  gap: 0px;
  height: 100%;

  @media screen and (max-width: 960px) {
    grid-template-columns: auto;
  }
}
</style>
