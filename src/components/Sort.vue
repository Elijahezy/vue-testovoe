<template>
  <div class="sort">
    <button type="button" @click="sortByMinPrice">MIN</button>
    <button type="button" @click="sortByMaxPrice">MAX</button>
    <button type="button" @click="sortByName">NAME</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'FilterV',
  computed: {
    ...mapGetters('data', ['items']),
    ...mapActions('data', ['sortByMinPrice', 'sortByMaxPrice', 'sortByName']),
  },
};
</script>

<style lang="scss">
.sort {
  display: flex;
  justify-self: center;
  gap: 2rem;
  margin: 3rem 1rem;
  align-self: flex-start;
}

.sort button {
  padding: 0.5rem 3rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #7bae73;
    color: white;
  }
}
</style>
