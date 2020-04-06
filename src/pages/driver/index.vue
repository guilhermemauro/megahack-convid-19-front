<template>
<div>
<div class="title-form">Cadastro de Transportador</div>
<div class="body-form">
    <b-container>
        <b-form @submit="sendForm">
        <b-row>
            <b-col>
                <b-form-input class="margin-bottom-10" placeholder="Nome/Razão Social"
                v-model="name" required>
                </b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input class="margin-bottom-10" placeholder="Cep apenas números"
                v-model="cep" @change="getCity" required>
                </b-form-input>
                <geo-place v-if="addr != null" :place-text="addr" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input class="margin-bottom-10" placeholder="Fone/Whatsapp"
                v-model="phone" required>
                </b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input class="margin-bottom-10" placeholder="Email"
                v-model="email" required>
                </b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input class="margin-bottom-10" placeholder="Modelo do caminhão"
                v-model="truckModel" required>
                </b-form-input>
            </b-col>
        </b-row>
                <b-row>
            <b-col>
                <b-form-input class="margin-bottom-10" placeholder="Ano do caminhão"
                v-model="truckYear" required>
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
  components: { DefaultButton },
  name: 'Driver',
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      cep: null,
      truckModel: null,
      truckYear: null,
      isLoading: false,
      addr: null,
    };
  },
  methods: {
    sendForm() {
      this.isLoading = true;
      Api.post('/truckers', {
        name: this.name,
        cep: this.cep,
        phone: this.phone,
        email: this.email,
        truckerModel: this.truckModel,
        truckerYear: this.truckYear,
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
</style>
