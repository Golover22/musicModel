<template>
  <div
    ref="progress"
    class="showTime"
    :style="{
      height: height != null ? height + 'px' : '',
      width: width != null ? width + 'px' : '',
    }"
  >
    <span ref="totalTime" class="total"></span>
    <span
      ref="currentTime"
      class="current"
      :style="{width: (value / max) * 100 + '%' }"
    >
      <span class="block"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      Ispercent: false,
    };
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
  },
  computed: {},
  watch: {
    },
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
.showTime {
  position: relative;
  padding: 0;
  margin: 0;
  height: 15px;
  background: #111;
  width: 80%;
  transform: 0.3s;
}
.showTime span {
  display: inline-block;
}
.showTime .current {
  position: relative;
  top: -5px;
  height: 3px;
  width: 0%;
  background: red;
  border-radius: 3px 3px;
}
.showTime:hover .current{
  height: 6px;
  top: -3px;
}
.showTime .current .block {
  position: absolute;
  background: rgb(50, 81, 221);
  height: 10px;
  width: 10px;
  top: -3px;
  right: -8px;
  border-radius: 50%;
  cursor: pointer;
}
.showTime:hover .current .block {
  height: 15px;
  width: 15px;
  top: -4px;
}
.showTime .total {
  position: absolute;
  top: 6px;
  left: 0;
  height: 3px;
  width: 100%;
  border-radius: 3px 3px;
  background: rgba(146, 161, 156, 0.897);
}
.showTime:hover .total {
    top: 5px;
  height: 6px;
}

</style>