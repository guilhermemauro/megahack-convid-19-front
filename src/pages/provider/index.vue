<template>
<div>
<div class="title-form">Cadastro de Fornecedor</div>
<div class="body-form">
    <b-container>
        <b-form @submit="sendForm">
        <b-row>
            <b-col>
                <b-form-input v-model="name" class="margin-bottom-10"
                placeholder="Nome/Razão Social" required>
                </b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input v-model="cep" class="margin-bottom-10"
                placeholder="Cep apenas números" @change="getCity" required>
                </b-form-input>
                <geo-place v-if="addr != null" :place-text="addr" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input v-model="phone" class="margin-bottom-10"
                placeholder="Fone/Whatsapp" required>
                </b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input v-model="email" class="margin-bottom-10"
                placeholder="Email" type="email" required>
                </b-form-input>
            </b-col>
        </b-row>
        <br/>
         <b-row>
             <b-col><h6>Produtos</h6></b-col>
         </b-row>
        <b-row v-for="(prod, index) in products" v-bind:key="index">
            <b-col>
                <b-form-select v-model="products[index].name" placeholder="Escolha"
                :options="productsName" required></b-form-select>
            </b-col>
            <b-col>
                <b-form-input type="number" class="margin-bottom-10"
                placeholder="qtd" v-model="products[index].amount" required>
                </b-form-input>
            </b-col>
            <b-col md="*" cols="2">

                <img v-if="index != 0" class="remove" src="@/assets/images/minus.svg"
                v-on:click="removeProduct(index)">
            </b-col>
        </b-row>
        <center><img class="add-more" src="@/assets/images/plus.svg"
        v-on:click="addProduct" /></center>
        <b-row>
            <b-col style="text-align: right;">
                <default-button type="submit" :isLoading="isLoading">
                  Finalizar
                </default-button>
            </b-col>
        </b-row>
      </b-form>
    </b-container>
</div>
</div>
</template>
<script>
import Api from '../../network/api';
import DefaultButton from '../../components/defaultButton.vue';

export default {
  components: { DefaultButton },
  name: 'Provider',
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      cep: null,
      isLoading: false,
      addr: null,
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
      products: [],
    };
  },
  mounted() {
    this.products.push({
      name: null, amount: null,
    });
  },
  methods: {
    addProduct() {
      this.products.push({
        name: null, qtd: null,
      });
    },
    removeProduct(index) {
      this.products.splice(index, index);
    },
    sendForm() {
      this.isLoading = true;
      Api.post('/products', {
        name: this.name,
        cep: this.cep,
        phone: this.phone,
        email: this.email,
        products: this.products,
        place: this.addr,
      }).then((response) => {
        this.isLoading = false;
        localStorage.setItem('accessToken', response.data.token);
        this.$router.replace('/search/retailer');
      });
    },
    getCity() {
      if (this.cep.length === 8) {
        Api.get(`https://viacep.com.br/ws/${this.cep}/json/`)
          .then((response) => {
            this.addr = `${response.data.localidade} - ${response.data.uf}`;
          });
      }
    },
  },
};
</script>
<style scoped>
.body-form {
    background-color: white;
    margin: 10px;
    padding: 25px 10px;
    overflow: auto;
}
.margin-bottom-10 {
    margin-bottom: 10px;
}
.title-form{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    color: white;
    font-size: 24px;
}
.add-more{
    height: 30px;
    width: 30px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 15px;
}
.remove {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-top: 10px;
}

</style>
