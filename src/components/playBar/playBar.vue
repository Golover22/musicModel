<template>
  <div class="palyer">
    <musicInfo>
      <template v-slot:title>
      <span>{{$store.state.currentMusicName||"&nbsp;听个屁!"}}</span>
      </template>
    </musicInfo>
    <audio
      id="alf"
      ref="audio"
      src=""
      autoplay
      loop
      @timeupdate="updateTime"
      @canplay="getDuration"
    ></audio>
    <controls :currtime="currtime" :totalTime="totalTime" />
  </div>
</template>

<script>
import musicInfo from "./infor.vue";
import controls from "./controls.vue";
export default {
  name: "",
  components: {
    musicInfo,
    controls,
  },
  data() {
    return {
      currtime: 0,
      totalTime: 0,
      url: "",
    };
  },
  computed: {
    getUrl() {
      this.url = this.$store.getters.getmusicPlayUrl;
      return this.url;
    },
  },
  watch: {
    url: {
      handler(newVal, oldVal) {
        try {
          this.$refs.audio.src = this.url;
          this.totalTime=0   //先把总时长清零 防止有些歌曲不能加载 显示错误的时长
        } catch (e) {
          console.log(1);
        }
      },
      immediate: false, // 初次进入界面不执行
    },
  },
  methods: {
    updateTime(e) {
      this.currtime = e.target.currentTime;
    },
    getDuration() {
      // 当浏览器认为能够播放的时候才执行
      this.totalTime = parseInt(this.$refs.audio.duration);
    },
  },
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
  width: 1030px;
  height: 130px;
  background: rgba(172, 108, 108, 0.623);
  text-align: left;
}
</style>