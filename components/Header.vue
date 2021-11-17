<template>
  <div>
    <div class="header-container">
      <h2 class="header-title">{{ title }}</h2>
      <div class="nav">
        <nuxt-link to="/"><span>Home</span></nuxt-link>
        <nuxt-link to="/about"><span>About</span></nuxt-link>
        <nuxt-link to="/upload"><span>Upload</span></nuxt-link>
      </div>
    </div>
    <hr class="header-divider" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Default Header Title',
    },
  },
}
</script>

<style scoped lang="css">
.header-title {
  margin: 0px;
}

.header-container {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ghostwhite;
}

.nav {
  width: 200px;
  display: flex;
  justify-content: space-evenly;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;
}

a span {
  font-size: 15px;
  letter-spacing: 1.42px;
  position: relative;
  margin-left: 1.5px;
}

a span:after {
  content: "";
  height: 2px;
  background: #2c3e50;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  opacity: 0;
  transform-origin: left center;
  transition: all 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  transform: scaleX(0);

}
a:hover span:after{
transform: scaleX(1);
opacity:1;
}

/* .nuxt-link-exact-active {
  color: $bjss-house-colour;
  text-decoration: underline;
} */

.header-divider {
  border: none;
  width: 100%;
  height: 50px;
  margin-top: 0px;
  border-bottom: 1px solid #1b2e61;
  box-shadow: 0 5px 5px -5px $bjss-house-colour;
  margin: -50px auto 10px;
}
</style>
