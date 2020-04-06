<template>
<div class="body-form">
    <b-row>
        <b-col md="*" cols="6">
            <div class="title">{{data.name}}</div>
            <geo-place :place-text="data.place" />
            {{data.email}} <br/>
            <slot></slot>
        </b-col>
        <b-col md="*" cols="2">
            <div class="contact">
                <a :href="phoneUrl">
                    <img src="@/assets/images/phone-call.svg" height="32px" width="auto" />
                </a>
            </div>
        </b-col>
        <b-col md="*" cols="2">
            <div class="img-container">
                <img src="@/assets/images/image.svg" height="108px" />
            </div>
        </b-col>
    </b-row>
</div>
</template>
<script>

export default {
  name: 'ListCardBig',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      phoneUrl: null,
    };
  },
  mounted() {
    this.phoneUrl = `tel:+55${this.data.phone}`;
  },
};
</script>
<style scoped>
.body-form {
    background-color: white;
    padding: 13px 16px;
    margin: 10px 0;
    height: 140px;
    color: rgba(0,0,0,.54);
}
.body-form .title {
    font-size: 18px;
    color: black;
}
.contact {
    display: flex;
    align-items: center;
}
</style>
