<template>
  <div>DisCover</div>
  <ul>
    <li @click="t('/menu/discover/recommendation')">个性推荐</li>
    <li @click="t('/menu/discover/exclusive')">专属订制</li>
    <li @click="t('/menu/discover/exclusive')">歌单</li>
    <li @click="t('/menu/discover/recommendation')">排行榜</li>
    <li @click="t('/menu/discover/recommendation')">歌手</li>
    <li @click="t('/menu/discover/recommendation')">最新音乐</li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  name: "DisCover",
  methods: {
    t(e) {
      //跳转当前网址
      this.$router.push(e);
    },
  },
};
</script>

<style>
</style>