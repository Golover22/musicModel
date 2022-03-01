<template>
  <div class="testpositon">
    <!-- <router-view></router-view> -->
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
<style>
.testpositon {
  position: relative;
  height: 200px;
  width: 900px;
  background: rgba(31, 124, 185, 0.692);
}
</style>