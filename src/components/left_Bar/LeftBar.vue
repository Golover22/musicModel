<template>
  <div class="leftBar">
    <left-menu />
    <unit></unit>
    <br />
    <!-- <my-like /> -->
    <br />
    <!-- <sto-sheet /> -->
  </div>
</template>

<script>
import Unit from "../common/unit";
import LeftMenu from "./menu/Menu";
import MyMusic from "./my_music/MyMusic";
import MyLike from "./c_song_sheet/CreatSheet";
import StoSheet from "./sto_sheet/StoSheet";
// const LeftMenu = () => import("@/components/left_Bar/menu/Menu");
// const MyMusic = () => import("./my_music/MyMusic");
// const MyLike = () => import("./c_song_sheet/CreatSheet");
// const StoSheet = () => import("./sto_sheet/StoSheet");

export default {
  name: "LeftBar",
  components: {
    LeftMenu,
    MyMusic,
    MyLike,
    StoSheet,
    Unit,
  },
};
</script>

<style>
<<<<<<< HEAD
.leftBar {
  /* position: relative; */
  /* margin-left: 30px; */
=======
.leftBar{
  position: relative;
  float: left;
>>>>>>> e2b44bab3d84a629176cd6bcaf9fbdbcd15e9fbf
  margin-top: 50px;
  float: left;
  width: 200px;
}
</style>