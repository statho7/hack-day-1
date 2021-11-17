<template>
  <div class="banner">
    <img :src="tile" />
    <!-- <div class="text-overlay">
      <h2 v-if="title">{{ title }}</h2>
      <h4 v-if="message">{{ message }}</h4>
    </div> -->
  </div>
</template>

<script>
import academyImage from '@/assets/img/academy.png'

export default {
  name: 'DisplayImages',
  props: {
    image: {
      type: String,
      default: academyImage,
    },
    // title: {
    //   type: String,
    //   default: '',
    // },
    // message: {
    //   type: String,
    //   default: '',
    // },
  },
}
</script>

