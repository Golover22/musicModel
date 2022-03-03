<template>
  <div class="centerBar">
    <!-- 改用统一组件 -->
    <test />
    <result />
  </div>
</template>

<script>
import result from "@/views/result/result.vue";
import test from "@/views/center/test.vue";
export default {
  name: "",
  components: {
    result,
    test,
  },
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
<style>
.centerBar {
  position: relative;
  right: 0;
  left: 0px;
  width: 900px;
  height: 800px;
  background: rgba(101, 185, 62, 0.548);
  /* overflow: hidden; */
  overflow-y: scroll;
}
.centerBar::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 0px;
}
</style>