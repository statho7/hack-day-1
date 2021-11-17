<template>
  <div class="tile-wrapper clickable">
    <div class="tile-content">
      <!-- <div class="tile-title">{{ title }}</div>
      <div class="tile-text">{{ text }}</div> -->
      <img :src="image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTile',
  props: {
    title: {
      type: String,
      default: 'Default Title',
    },
    text: {
      type: String,
      default: 'Default Text',
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="css">
.tile-wrapper {
    width: 220px;
    height: 240px;
    border: 1.5px solid #696969;
    border-radius: 25px;
    margin-bottom: 20px;
    transition: .3s;
    box-shadow: 0 26px 30px -10px rgb(0 0 0 / 69%), 0 16px 10px -10px rgb(0 0 0 / 69%);
}

.tile-wrapper:hover {
  background-color: whitesmoke;
  border-color: $bjss-house-colour;
}

img {
  max-height: 220px;
  width: 100%;
}
.tile-content {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: auto;
    box-shadow: rgb;
    height: 100%;
}

.tile-title {
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
