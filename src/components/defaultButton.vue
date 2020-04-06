<template>
    <b-button type="button" :disabled="isLoading"
    style="background-color: #0c8346; border: 0px;">
        <div class="button-container">
            <div v-if="isLoading" class="loader"></div>
            <div :class="isLoading ? 'text' : null"><slot></slot></div>
        </div>
    </b-button>
</template>
<script>
export default {
  name: 'DefaultButton',
  props: {
    variant: {
      type: String,
      default: 'outline-primary',
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style scoped>
.button-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
}
.button-container .text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 5em;
  height: 5em;
}
.loader {
  font-size: 5px;
  border-top: 1.0em solid #24e561;
  border-right: 1.0em solid #24e561;
  border-bottom: 1.0em solid #24e561;
  border-left: 1.0em solid white;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
