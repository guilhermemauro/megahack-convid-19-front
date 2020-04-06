<template>
<div class="cards-container">
    <div class="cards-menu">
        <div class="card-menu meddium-green">
            <router-link to="/register/provider">
            <div>
                <img src="@/assets/images/harvest.svg"  width="70"/><br/>
                <span><b>FORNECEDOR</b></span>
            </div>
            </router-link>
        </div>
        <div class="card-menu meddium-green">
             <router-link to="/register/retailer">
             <div>
                <img src="@/assets/images/shop.svg"  width="70"/><br/>
                <span><b>VAREJISTA</b></span>
            </div>
             </router-link>
        </div>
        <div class="card-menu meddium-green">
             <router-link to="/register/driver">
             <div>
                <img src="@/assets/images/delivery.svg"  width="70"/><br/>
                <span><b>TRANSPORTE</b></span>
            </div>
             </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style scoped>
.cards-container {
    height: 100%;
    width: 100%;
}
.card-menu{
    color: white;
    height: 200px;
    width: 200px;
    text-align: center;
}
.card-menu div {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.cards-menu {
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: space-between;

}
@media (max-width: 620px) {
  .cards-menu {
      max-width: 300px;
      flex-direction: column;
      align-items: center;
      height: 470px;
   }
   .card-menu {
       width: 150px;
       height: 150px;
   }
}

.meddium-green {
    background-color: #14cc60;
}

a {
    color: white;
}
a:hover {
    text-decoration: none;
}
</style>
