<template>
  <div class="home">
    <Banner
      class="home-banner"
      :image="bannerImage"
      title="Welcome to the BJSS Academy!"
      message="This is a simple Vue app demonstrating components, routing and API calls."
    />
    <!-- <div class="tiles">
      <DisplayImages
        v-for="tile in tiles"
        :key="tile + '-tile'"
        :image="tile"
        class="tile"
      />
    </div> -->
    <!-- <div class="tiles">
      <ContentTile
        v-for="tile in tiles"
        :key="tile.title + '-tile'"
        :title="tile.title"
        :text="tile.text"
        class="tile"
      />
    </div>-->
    <div class="tiles">
      <ContentTile
        v-for="tile in tiles.data"
        :key="tile.slice(57,10) + '-tile'"
        :image="tile"
        class="tile"
      />
    </div> 
    <br />
    <div v-if="apiResponse">Server response: {{ apiResponse }}</div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import ContentTile from '@/components/ContentTile'
import academyImage from '@/assets/img/academy.png'
import { apiGet } from '@/utils/api'

export default {
  name: 'Home',
  components: {
    Banner,
    ContentTile,
  },
  data() {
    return {
      bannerImage: academyImage,
      tiles: [],
      apiResponse: '',
    }
  },
  mounted() {
    this.fetchGreeting()
  },
  methods: {
    fetchGreeting() {
      apiGet('https://ck7f3w6408.execute-api.eu-west-1.amazonaws.com/IL/teams/nintendo/files')
        .then(({ data }) => (
          console.log(data),
          // this.apiResponse = JSON.stringify(data)
          this.tiles = data),
          )
        .catch(
          () => (this.apiResponse = 'Failed to retrieve data from server.')
        )
    },
  },
}
</script>


<style scoped lang="css">
.home {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.home-banner {
  margin-bottom: 35px;
}

.tiles {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.tile {
  margin-top: 10px;
}
</style>
