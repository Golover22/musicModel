<template>
  <div>
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>

    <left-bar class="left" />
    <router-view class="right" />
  </div>
</template>


<script>
import LeftBar from "./components/left_Bar/LeftBar.vue";
export default {
  name: "App",
  components: { LeftBar },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
