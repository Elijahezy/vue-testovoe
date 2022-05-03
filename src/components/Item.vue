<template>
  <li class="item">
    <img class="item-img" :src="item.url" alt="" />
    <h5 class="item-name">{{ item.name }}</h5>
    <p class="item-info">{{ item.info }}</p>
    <p class="item-price">{{ validatePrice(item) }} руб.</p>
    <span @click="onClick" class="item-delete-icon"></span>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ItemV',

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions('data', ['removeItemById']),

    onClick() {
      this.removeItemById(this.item);
    },

    validatePrice(item) {
      return parseFloat(item.price).toLocaleString();
    },
  },
};
</script>

<style lang="scss">
.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  color: #3f3f3f;
  height: 500px;
  max-height: 500px;
  position: relative;
}

.item-img {
  max-width: 100%;
  height: 200px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  object-fit: auto;
  background-color: #b8b8b8;
  overflow: hidden;
}

.item-name {
  font-size: 20px;
  font-weight: 600;
  margin: 1rem 1rem 0rem 1rem;
  overflow: hidden;
  word-wrap: break-word;
  max-height: 3rem;
}

.item-info {
  font-size: 16px;
  margin: 1rem 1rem 0rem 1rem;
  overflow: hidden;
  word-wrap: break-word;
  max-height: 10rem;
}
.item-price {
  font-size: 24px;
  font-weight: 600;
  margin: auto 1rem 1rem 1rem;
  overflow: hidden;
  max-height: 2rem;
}

.item-delete-icon {
  position: absolute;
  display: none;
  top: -3%;
  right: -3%;
  background-image: url('../assets/svg/delete.svg');
  width: 42px;
  height: 42px;
  cursor: pointer;
}

.item:hover {
  .item-delete-icon {
    display: block;
  }
}
</style>
