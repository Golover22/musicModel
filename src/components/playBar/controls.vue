<template>
  <div class="controls">
    <div class="progress">
      <div class="data">
        <span>{{ toTime(currtime) }}</span
        >/ <span>{{ toTime(totalTime) }}</span>
      </div>
      <progress-bar :value="currtime" :max="totalTime" />
    </div>
  </div>
</template>

<script>
import progressBar from "./progressBar.vue";
export default {
  name: "",
  components: {
    progressBar,
  },
  data() {
    return {};
  },
  props: {
    currtime: Number,
    totalTime: Number,
  },
  computed: {
    toTime() {
      return function (time) {
        // 暂时不涉及小时 不管他
        let minute = parseInt(time / 60);
        let second = parseInt(time) % 60;
        return minute + ":" + second;
      };
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
.controls {
  background: rgba(128, 119, 94, 0.658);
  left: 250px;
  position: absolute;
  width: 780px;
  height: 130px;
}
.progress {
  margin-top: 35px;
  margin-left: 10px;
}
</style>