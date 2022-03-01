<template>
  <div>
    <div>我的音乐</div>
    <br />
    <div @click="t('/my_music/download')">本地与下载</div>
    <div @click="t('/my_music/recent')">最近播放</div>
    <div @click="t('/my_music/cloud_disk')">我的音乐云盘</div>
    <div @click="t('/my_music/podcast')">我的博客</div>
    <div @click="t('/my_music/store')">我的收藏</div>
  </div>
</template>

<script>
export default {
  name: "MyMusic",
  data() {
    return {};
  },
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