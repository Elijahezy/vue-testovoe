<template>
  <div class="sort">
    <button
      :class="{ active: sortKey === 'minPrice' }"
      type="button"
      @click="setSortType('minPrice')"
    >
      MIN
    </button>
    <button
      :class="{ active: sortKey === 'maxPrice' }"
      type="button"
      @click="setSortType('maxPrice')"
    >
      MAX
    </button>
    <button
      :class="{ active: sortKey === 'name' }"
      type="button"
      @click="setSortType('name')"
    >
      NAME
    </button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'FilterV',
  computed: {
    ...mapActions('data', ['sortByMinPrice', 'sortByMaxPrice', 'sortByName']),

    ...mapGetters('data', ['sortKey']),
  },

  methods: {
    ...mapMutations('data', ['setSortType']),
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

.active {
  background-color: #7bae73;
  color: white;
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
