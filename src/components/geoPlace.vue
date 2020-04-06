<template>
    <div class="place">
        <img src="@/assets/images/geo.png" height="16px" width="auto"> {{placeText}}
    </div>
</template>
<script>
export default {
  name: 'GeoPlace',
  props: {
    placeText: null,
  },
};
</script>
<style scoped>
.place {
    display: flex;
    align-items: baseline;
    margin-bottom: 10px;
}
.place img {
  margin-right: 3px;
}
</style>
