<template>
  <div>
    <div>
      收藏的歌单
      <div @click="t('/sto/my_sto')">收藏1</div>
      <div @click="t('/sto/my_sto')">收藏1</div>
      <div @click="t('/sto/my_sto')">收藏1</div>
      <div @click="t('/sto/my_sto')">收藏1</div>
      <div @click="t('/sto/my_sto')">收藏1</div>
      <div @click="t('/sto/my_sto')">收藏1</div>
      <!-- <div v-for="let item in this.myLike"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "StoSheet",
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