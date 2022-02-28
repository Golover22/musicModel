<template>
  <div>
    <div>
      创建的歌单
      <div @click="t('/crt/mylike')">我喜欢的音乐</div>
      <div @click="t('/crt/mylike')">喜欢1</div>
      <div @click="t('/crt/mylike')">喜欢2</div>
      <div @click="t('/crt/mylike')">喜欢3</div>
      <div @click="t('/crt/mylike')">喜欢4</div>
      <div @click="t('/crt/mylike')">喜欢5</div>
      <!-- <div v-for="let item in this.myLike"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatSheet",
  data() {
    return {
      myLike: [{ id: null, name: null }],
    };
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