<template>
  <section>
    <form @submit.prevent="onAddItem" class="form-add">
      <label for="name">Наименование товара</label>
      <input
        type="text"
        id="name"
        placeholder="Введите наименование товара"
        v-model="item.name"
        autocomplete="off"
        maxlength="60"
      />
      <label for="info">Описание товара</label>
      <textarea
        id="info"
        rows="5"
        placeholder="Введите описание товара"
        v-model="item.info"
        autocomplete="off"
        max="360"
      />
      <label for="url">Ссылка на изображение товара</label>
      <input
        type="text"
        id="url"
        placeholder="Введите ссылку"
        required
        v-model="item.url"
        autocomplete="off"
      />
      <label for="price">Цена товара</label>
      <input
        type="number"
        id="price"
        placeholder="Введите цену"
        required
        v-model="item.price"
        autocomplete="off"
        maxlength="30"
      />
      <button type="submit" :disabled="isFormDisabled">Добавить товар</button>
    </form>
  </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'FormAdd',

  data() {
    return {
      item: {
        name: '',
        info: '',
        url: '',
        price: '',
      },
    };
  },
  computed: {
    isFormDisabled() {
      return (
        this.item.name.length === 0 ||
        this.item.price.length === 0 ||
        this.item.url.length === 0
      );
    },
  },

  methods: {
    ...mapActions('data', ['addItem']),

    onAddItem() {
      this.addItem(this.item);

      this.item = {
        name: '',
        info: '',
        url: '',
        price: '',
      };
    },
  },
};
</script>

<style lang="scss">
.form-add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 1.5rem;
  margin: 6rem 2rem 0rem 2rem;

  & label:nth-of-type(3),
  label:nth-of-type(4),
  label:nth-of-type(1) {
    display: flex;
    flex-direction: rows;
    &::after {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #ff8484;
    }
  }
}

.form-add label {
  display: block;
  margin-bottom: 10px;
  margin-top: 1rem;
  font-size: 16px;
  color: #49485e;
}

.form-add input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;

  &::placeholder {
    color: #b3b3b3;
  }
}

.form-add textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;

  &::placeholder {
    color: #b3b3b3;
  }
}

.form-add button {
  padding: 10px;
  width: 100%;
  height: 36px;
  border: none;
  background: #7bae73;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  margin-top: 1.5rem;
}

.form-add button:disabled {
  background-color: #eeeeee;
  color: #b4b4b4;
}
</style>
