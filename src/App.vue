<template>
  <div>
    <left-bar />
    <topBar />
    <!-- <center></center> -->
    <router-view class="right" />
  </div>
</template>


<script>
import LeftBar from "./components/left_Bar/LeftBar.vue";
import topBar from "./components/topBar/topBar.vue";
import center from "@/views/center/center.vue";
export default {
  name: "App",
  components: {
    LeftBar,
    topBar,
    center,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1300px;
  margin: 0 auto;
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

.right {
  float: right;
}
</style>
