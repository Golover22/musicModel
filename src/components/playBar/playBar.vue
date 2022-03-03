<template>
  <div class="palyer">
    <audio :src="getUrl" autoplay controls contextmenu></audio>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {
    getUrl() {
      return this.$store.getters.getmusicPlayUrl
    },
  },
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
.palyer {
  position: relative;
  bottom: 2%;
  right: 0;
  left: 40px;
  width: 1050px;
  height: 130px;
  background: rgba(172, 108, 108, 0.623);
}
</style>