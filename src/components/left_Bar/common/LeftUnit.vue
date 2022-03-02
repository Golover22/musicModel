<template>
  <div>
    <slot name="header" class="head">头部</slot>
    <slot name="context">头部</slot>
    <!-- <slot>asdas</slot> -->
  </div>
</template>

<script>
export default {
  name: "LeftUnit",
};
</script>

<style>
.head {
  font-size: 14px;
}
</style>