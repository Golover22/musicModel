<template>
  <div class="main">
    <h3>推荐歌单</h3>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Unit",
};
</script>

<style>
.main {
  margin-left: 200px;
}
.main ul {
  width: 1000px;
  height: 400px;
  background-color: red;
  list-style: none;
}
.main h3 {
  text-align: left;
}
.main ul li {
  width: 180px;
  height: 300px;
  background-color: green;
  margin: 0 10px;
  float: left;
}
</style>