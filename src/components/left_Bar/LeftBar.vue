<template>
  <div class="leftBar">
    <left-menu />
    <br />
    <my-music />
    <br />
    <my-like />
    <br />
    <sto-sheet />
  </div>
</template>

<script>
import LeftMenu from "./menu/Menu";
import MyMusic from "./my_music/MyMusic";
import MyLike from "./c_song_sheet/CreatSheet";
import StoSheet from "./sto_sheet/StoSheet";
export default {
  name: "LeftBar",
  components: {
    LeftMenu,
    MyMusic,
    MyLike,
    StoSheet,
  },
};
</script>

<style>
.leftBar{
  position: relative;
  margin-left:30px;
  margin-top: 50px;
}
</style>