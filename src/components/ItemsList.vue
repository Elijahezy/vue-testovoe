<template>
  <div class="items-list">
    <Sort />

    <transition-group name="list" tag="ul">
      <Item v-for="(item, key) in items" :key="key" :item="item" />
    </transition-group>
  </div>
</template>

<script>
import Item from './Item.vue';
import Sort from './Sort.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ItemsList',
  computed: {
    ...mapGetters('data', ['items']),
  },
  components: {
    Item,
    Sort,
  },
};
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.items-list {
  display: grid;
}
.items-list ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style: none;
  padding: 0px;
  margin: 0 2rem;
  gap: 2rem;

  background-color: #e5e5e5;
}
</style>
