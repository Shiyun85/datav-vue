<template>
  <header class="header-wraper">
    <div class="header-wraper_logo">
      Carsmart
      <sup>Beta</sup>
    </div>
    <menu-v v-bind:menus="menusList"></menu-v>
  </header>
</template>
<style lang="postcss" scoped>
.header-wraper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(115, 115, 115, 0.5);
  text-align: left;
}
.header-wraper_logo {
  display: inline-block;
  font-size: 16px;
  color: #666666;
  padding-left: 10px;
  height: 50px;
  line-height: 36px;
}
.header-wraper_logo sup {
  color: #ea6947;
  padding-left: 5px;
}
</style>

<script>
import MenuV from "./Menu";
export default {
  name: "Header",
  data() {
    return {
      menusList: [
        {
          id: 1,
          name: "首页",
          path: "/main"
        },
        {
          id: 2,
          name: "概览",
          path: "/overview"
        }
      ]
    };
  },
  components: { MenuV }
};
</script>

