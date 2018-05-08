<template>
  <ul class="header-menu-list">
    <template v-for="menu in menus">
      <menu-item :key="menu.id" v-if="!menu.submenus" :menu="menu" :index="menu.path">{{menu.name}}</menu-item>
      <sub-menu v-else :key="menu.id" :submenus="menu.submenus">
        <template slot="title">{{menu.name}}</template>
      </sub-menu>
    </template>

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
</style>

<script>
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
export default {
  name: "Menu",
  components: { MenuItem, SubMenu },
  props: {
    menus: Array,
    defaultActive: {
      type: String,
      default: "/main"
    }
  },
  data() {
    return {
      activeIndex: this.defaultActive
    };
  },
  methods: {
    handleItemClick(item) {
      let { index } = item;
      this.activeIndex = index;
    },
    initOpenMenu() {
      var path = this.$route.path;
      if (this.activeIndex !== path) {
        this.activeIndex = path;
      }
      //如果包含二级菜单还需要打开相应父元素
    }
  },
  mounted() {
    this.$on("item-click", this.handleItemClick);
    this.initOpenMenu();
  }
};
</script>

