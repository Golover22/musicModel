<template>
  <div class="centerBar">
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
  position: fixed;
  right: 0;
  left: 500px;
  top: 40px;
  width: 950px;
  background: rgba(101, 185, 62, 0.548);
}
</style>