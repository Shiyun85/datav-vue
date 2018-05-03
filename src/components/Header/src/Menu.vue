<template>
  <ul class="header-menu-list">
    <menu-item v-for="menu in menus" :key="menu.id" :path="menu.path">{{menu.name}}</menu-item>
  </ul>
</template>
<style lang="postcss" scoped>
.header-menu-list {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 10px;
}
.header-menu-list li {
  display: inline-block;
  padding: 0 12px;
  cursor: pointer;
}
.header-menu-list li:hover {
  border-bottom: 2px solid #ea6947;
  font-weight: 600;
  color: #ea6947;
}
</style>

<script>
import MenuItem from "./MenuItem";
export default {
  components: { MenuItem },
  props: ["menus"],
  data() {
    return {};
  }
};
</script>

