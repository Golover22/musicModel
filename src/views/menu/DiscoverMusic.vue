<template>
  <div class="discoverMusic">
    <dis-header />
    <!-- <dis-banner /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import DisBanner from "./dis_cover/Banner";
import DisHeader from "./dis_cover/Header";
import Unit from "@/components/common/unit";
export default {
  name: "DisCover",
  methods: {
    t(e) {
      //跳转当前网址
      this.$router.push(e);
    },
  },
  components: {
    DisBanner,
    DisHeader,
    Unit,
  },
  Unit,
};
</script>

<style>
.discoverMusic {
  position: relative;
  width: 900px;
}
</style>