<template>
  <div class="head">
    <ul>
      <li @click="t('/menu/discover/recommendation')">个性推荐</li>
      <li @click="t('/menu/discover/exclusive')">专属订制</li>
      <li @click="t('/menu/discover/exclusive')">歌单</li>
      <li @click="t('/menu/discover/recommendation')">排行榜</li>
      <li @click="t('/menu/discover/recommendation')">歌手</li>
      <li @click="t('/menu/discover/recommendation')">最新音乐</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DisHeader",
};
</script>

<style>
.head {
  position: relative;
  margin: 10px 0px 10px 90px;
  width: 900px;
  height: 30px;
}
.head ul {
  height: 30px;
}
.head ul {
  list-style: none;
}
.head li {
  float: left;
  margin: 0 10px;
  height: 10px;
}
</style>