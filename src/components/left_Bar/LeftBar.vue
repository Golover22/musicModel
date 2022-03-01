<template>
  <div>
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
</style>