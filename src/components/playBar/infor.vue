<template>
  <div class="musicInfo">
    <div class="musicTitle">
      <slot name="title">--------------欢迎使用! -----------------</slot>
    </div>
    <div class="musicImg">
      <div class="mask">遮罩</div>
      <slot name="img">
        <img src="~@/assets/logo.png" alt="" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    /* 被创建的时候 */
  },
  updated() {
    /* 更新的时候 */
  },
  mounted() {
    /* 被正常挂载的时候 */
  },
  unmounted() {
    /* 对应v2 的destroyed  被销毁的时候 */
  },
};
</script>
<style scope="this api replaced by slot-scope in 2.5.0+">
.musicInfo {
  position: absolute;
  text-align: center;
  top: 20px;
  left: 30px;
  width: 200px;
  overflow: hidden;
  background: rgb(148, 100, 100);
}
.musicTitle {
  white-space: nowrap;
  margin-bottom: 5px;
}
.musicImg {
  position: relative;
  margin: 5px auto;
  padding: 0;
  border: none;
  background: rgba(93, 164, 211, 0.856);
  height: 70px;
  width: 70px;
}
.musicImg div.mask {
  position: absolute;
  height: 70px;
  width: 70px;
  display: none;
  background: rgba(0, 0, 0, 0.258);
}
.musicImg:hover div.mask {
  display: inline-block;
}
.musicImg img {
  height: 70px;
  width: 70px;
}
</style>