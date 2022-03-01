<template>
  <div class="searchResult">
      <ul>
          <li class="item" v-for="item in $store.state.result_MusicList" :key=item.id>
              <span>{{item.id+"    "}} </span>
              <span>{{item.name}}</span>
          </li>
      </ul>
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
</style>