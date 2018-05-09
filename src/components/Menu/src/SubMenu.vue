<template>
  <li @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" :class="{'is-submenu-active':submenuActive}">
    <div ref="submenu-title" class="submenu-title">
      <slot name="title"></slot>
    </div>
    <ul class="submenu__list--wraper" ref="submenu-list" v-show="opened">
      <menu-item v-for="menu in submenus" :key="menu.id" :menu="menu" :index="menu.path">{{menu.name}}</menu-item>
    </ul>
  </li>

</template>
<style lang="postcss" scoped>
.submenu__list--wraper {
  list-style: none;
  width: auto;
  min-width: 115px;
  font-size: 14px;
  top: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  margin-top: 7px;
  background-color: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  z-index: 100;
  text-align: center;
}
.is-submenu-active {
  border-bottom: 2px solid #ea6947;
}
.is-submenu-active div {
  color: #ea6947;
}
</style>

<script>
import MenuItem from "./MenuItem";
export default {
  name: "Submenu",
  inject: ["rootMenu"],
  componentName: "Submenu",
  props: {
    submenus: Array
  },
  computed: {
    submenuActive() {
      let that = this;
      let index = this.submenus.find(value => {
        return that.rootMenu.activeIndex == value.path;
      });
      return index;
    }
  },
  components: { MenuItem },
  data() {
    return {
      timeout: null,
      mouseInChild: false,
      opened: false
    };
  },
  methods: {
    handleMouseenter(e) {
      this.opened = true;
      clearTimeout(this.timeout);
    },
    handleMouseleave() {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        if (!this.mouseInChild) {
          this.opened = false;
        }
      }, 300);
    }
  }
};
</script>

