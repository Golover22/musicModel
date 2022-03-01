<template>
  <div>
    <div @click="t('/menu/discover')">发现音乐</div>
    <div @click="t('/menu/podcast')">播客</div>
    <div @click="t('/menu/video')">视频</div>
    <div @click="t('/menu/follow')">关注</div>
    <div @click="t('/menu/live_broadcast')">直播</div>
    <div @click="t('/menu/private_fm')">私人FM</div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
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