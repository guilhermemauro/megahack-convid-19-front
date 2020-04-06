<template>
<div>
  <b-container>
    <div class="title-form">Buscar por Varejistas</div>
    <list-card v-for="(retailer, index) in results" v-bind:key="index" :data="retailer" />
  </b-container>
  </div>
</template>
<script>
import Api from '../../network/api';
import ListCard from '../../components/listCard.vue';

export default {
  name: 'ListRetailer',
  components: { ListCard },
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    Api.get('/retailers', {
      headers: { Authorization: localStorage.getItem('accessToken') },
    }).then((response) => {
      this.results = response.data;
    });
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
</style>
