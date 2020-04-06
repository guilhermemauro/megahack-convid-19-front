<template>
<div>
  <b-container>
    <div class="title-form">Buscar por Produtores</div>
    <b-form @submit="search">
        <div class="search-form">
            <b-form-select class="spacer" v-model="productSelected"
            placeholder="Escolha"
            :options="productsName" required></b-form-select>

            <b-form-input class="spacer" type="number"
            placeholder="Quantidade" v-model="qtd" required>
            </b-form-input>

            <default-button type="submit" :isLoading="isLoading">
                Buscar
            </default-button>
        </div>
    </b-form>
    <list-card-big v-for="(retailer, index) in results" v-bind:key="index" :data="retailer">
        <span v-for="(prod, ind) in retailer.products" v-bind:key="ind">
            {{prod.name}},
        </span>
    </list-card-big>
  </b-container>
  </div>
</template>
<script>
import Api from '../../network/api';
import ListCardBig from '../../components/listCardBig.vue';
import DefaultButton from '../../components/defaultButton.vue';

export default {
  name: 'ListRetailer',
  components: { ListCardBig, DefaultButton },
  data() {
    return {
      results: [],
      productSelected: null,
      qtd: null,
      isLoading: false,
      productsName: [
        {
          value: 'alface',
          text: 'Alface',
        },
        {
          value: 'batata',
          text: 'Batata',
        },
        {
          value: 'laranja',
          text: 'Laranja',
        },
      ],
    };
  },
  methods: {
    search() {
      this.isLoading = true;
      Api.get(`/products/list?type=${this.productSelected}&amount=${this.qtd != null ? this.qtd : 10000}`, {
        headers: { Authorization: localStorage.getItem('accessToken') },
      })
        .then((response) => {
          this.isLoading = false;
          this.results = response.data;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
<style scoped>
.title-form{
    margin-right: 10px;
    margin-top: 20px;
    color: white;
    font-size: 24px;
}
.search-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    padding: 10px;
}
.spacer {
    margin-bottom: 0;
    margin-right: 10px;
}
@media (max-width: 620px) {
    .search-form {
        flex-direction: column;
    }
    .spacer {
        margin-bottom: 10px;
    }
}
</style>
