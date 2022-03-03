<template>
  <div class="searchResult">
    <ul>
      <li class="item">
        <div class="musictitle">歌曲名</div>
        <div class="musictitle">歌手</div>
        <div class="musictitle">专辑</div>
      </li>
      <!-- 标题结束 -->
      <li
        class="item"
        v-for="item in getMusic"
        :key="item.id"
        @dblclick="btnsongs(item.id,item.name,item.artists)"
      >
        <span
          class="songinfo musicname"
          :title="item.name"
          @click="btnsongs(item.id,item.name,item.artists)"
          >{{ item.name }}</span
        >
        <div class="singer">
          <span
            class="songinfo"
            v-for="(i, n) in item.artists"
            :key="i.id"
            :title="i.name"
            >{{ i.name
            }}<span class="nohover">{{
              n < item.artists.length - 1 ? "/" : ""
            }}</span></span
          >
        </div>
        <span class="songinfo album" :title="item.album.name"
          >专辑:{{ item.album.name }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
import request from "@/network/request";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {
    getMusic() {
      return this.$store.state.result_MusicList;
    },
  },
  watch: {},
  methods: {
    btnsongs(id,musicName,singerLisst) {
      // 发起网络请求获取歌曲播放链接
      this.$store.state.musicPlayUrl=""
      console.log(id);
      let singers=""
      for(let i in singerLisst){
        singers+=i<singerLisst.length-1?singerLisst[i].name+"/":singerLisst[i].name
      }
      // 检查歌曲是否能播放
      let isTrue = true;
      request.search
        .checkPlay(id)
        .then((res) => {
          console.log(res.data);
          if (res.data.success == false) {
            alert("暂不能播放! 因" + res.data.message);
            isTrue = false;
          }
        })
        .catch((err) => {
          console.log(err);
          alert("暂时不能播放 该歌曲还在努力争取中!")
          isTrue = false;
        });
      // 获取出错或不能播放
      if (isTrue == false) {
        return;
      }
      let url="https://music.163.com/song/media/outer/url?id=" + id + ".mp3 "
      this.$store.commit("setMusicUrl",url)
      this.$store.commit("setCurrentMusicName",musicName)
      this.$store.commit("setCurrentSinger",singers)
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
.searchResult {
  margin: 0;
  padding: 0;
  width: 900px;
  background: rgb(173, 147, 147);
}
.searchResult ul {
  margin: 0;
  padding: 0;
}
.searchResult ul li.item {
  line-height: 50px;
  text-align: left;
  /* 强制一行文本 */
  white-space: nowrap;
  padding-left: 30px;
  display: flex;
  cursor: pointer;
}
.searchResult ul li.item:hover {
  background: rgba(164, 199, 191, 0.63);
}
.searchResult ul li.item .musicname {
  /* 音乐名 */
  display: inline-block;
  width: 200px;
  overflow: hidden;
  margin-right: 50px;
  text-overflow: ellipsis;
}
div.musictitle {
  display: inline-block;
  width: 250px;
}
div.singer {
  width: 250px;
  display: inline-block;
  /* 超出隐藏 */
  overflow: hidden;
  /* 超出显示省略号 */
  text-overflow: ellipsis;
}
div.singer span.songinfo {
  vertical-align: middle;
  display: inline-block;
  /* 超出隐藏 */
  overflow: hidden;
  /* 超出显示省略号 */
  text-overflow: ellipsis;
}
.searchResult ul li.item .songinfo:hover {
  color: rgb(20, 245, 255);
}
.searchResult ul li.item .songinfo:hover .nohover {
  color: black;
}
.album {
  display: inline-block;
  width: 120px;
  /* 超出隐藏 */
  overflow: hidden;
  /* 超出显示省略号 */
  text-overflow: ellipsis;
}
</style>