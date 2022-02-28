<template>
  <div class="profilebox">
    <div v-if="!isLogin">
      <span class="text" @click="btnLogin"> 登录 </span>
      <span> / </span>
      <span class="text" @click="btnReg"> 注册 </span>
    </div>
    <div v-else>
        <span>已登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
        isLogin:false
    };
  },
  computed: {},
  watch: {},
  methods: {
      btnLogin:function(){
          // 登录按钮
          alert("等待网络模块封装")
      },
      btnReg(){
          // 注册按钮
          alert("等待网络模块封装")
      }
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
.profilebox {
  position: absolute;
  right: 50px;
  font-size: 22px;
  cursor: pointer;
}
.text {
  position: relative;
  display: inline-block;
  margin-top: -5px;
  font-size: 18px;
}
.text:hover {
  color: rgba(168, 21, 21, 0.829);
}
</style>