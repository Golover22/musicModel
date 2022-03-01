<template>
  <div class="search">
    <input
      class="textin"
      size="25"
      type="text"
      placeholder=" search"
      v-model="key"
      @keypress.enter="search"
    />
    <button @click="search" class="searchbtn"></button>
  </div>
</template>

<script>
import search from "@/network/request";
export default {
  name: "",
  components: {
  },
  data() {
    return {
      key: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    search: function () {
      // alert("等待网络模块封装");
      search.search.searchQuery(
        this.key,
        (res) => {
          console.log(res.data.result.songs);
          this.$store.state.result_MusicList=res.data.result.songs
        },
        (err) => {
          console.log(err);
        }
      );
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
.search {
  position: relative;
}
.textin {
  position: absolute;
  line-height: 26px;
  width: 150px;
  margin-top: 5px;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.2s;
  padding-left: 30px;
}
.textin:focus {
  width: 220px;
  transition: all 0.3s;
}
.searchbtn {
  position: absolute;
  width: 30px;
  height: 30px;
  background: url("~images/topBar/search/search.png");
  left: 0;
  top: 5px;
  border: none;
}
.searchbtn:hover {
  background: url("~images/topBar/search/searchHover.png");
}
</style>