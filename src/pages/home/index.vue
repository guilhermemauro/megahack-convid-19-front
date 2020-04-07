<template>
<div class="cards-container">
    <img id="logo" src="@/assets/images/logoName.png" />
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
    display: flex;
    align-items: center;
    justify-content: center;
}
.cards-container #logo {
    margin-top: 20px;
    width: 400px;
    height: auto;
    background-color: white;
}
.card-menu{
    color: white;
    height: 200px;
    width: 200px;
    text-align: center;
    display: flex;
    justify-content:space-around;
    align-items: center;
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
   .cards-container #logo {
       width: 200px;
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
