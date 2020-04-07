<template>
<div>
<div class="title-form">Cadastro de Varejista</div>
<div class="body-form">
    <b-container>
      <b-form @submit.prevent="sendForm">
        <b-row>
            <b-col>
                <b-form-input class="margin-bottom-10"
                placeholder="Nome/Razão Social" required
                v-model="name">
                </b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input class="margin-bottom-10" placeholder="Cep apenas números"
                required v-model="cep" @change="getCity">
                </b-form-input>
                <geo-place v-if="addr != null" :place-text="addr" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input  class="margin-bottom-10" placeholder="Fone/Whatsapp"
                required v-model="phone">
                </b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input class="margin-bottom-10" placeholder="Email"
                type="email" required v-model="email">
                </b-form-input>
            </b-col>
        </b-row>
        <br/>
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
import DefaultButton from '../../components/defaultButton.vue';
import Api from '../../network/api';

export default {
  components: {
    DefaultButton,
  },
  name: 'Retailer',
  data() {
    return {
      name: null,
      email: null,
      cep: null,
      phone: null,
      addr: null,
      isLoading: false,
    };
  },
  methods: {
    sendForm() {
      this.isLoading = true;
      Api.post('/retailers', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        cep: this.cep,
        place: this.addr,
      }).then((response) => {
        this.isLoading = false;
        localStorage.setItem('accessToken', response.data.token);
        this.$router.replace('/search/provider');
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
