<template>
  <li class="header-menu-item" :class="{'is-active':active,'is-hover':isHover,'is-submenu-hover':submenuHover}" @click="handleClick" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" :style="{itemStyle}">
    <template v-if="!menu.submenu">
      <slot>
      </slot>
    </template>
    <template v-else>

    </template>
  </li>
</template>
<style lang="postcss" scoped>
.is-active {
  border-bottom: 2px solid #ea6947;
  font-weight: 600;
  color: #ea6947;
}
.is-active a {
  color: #ea6947;
}
.is-hover {
  border-bottom: 2px solid #ea6947;
  font-weight: 600;
  color: #ea6947;
}
.is-submenu-hover,
.is-submenu-active {
  color: #ea6947;
}
</style>

<script>
export default {
  props: {
    menu: Object,
    index: String
  },
  inject: ["rootMenu"],
  data() {
    return {
      isHover: false,
      submenuHover: false
    };
  },
  computed: {
    active() {
      return this.rootMenu.activeIndex === this.index;
    },
    parentMenu() {
      let parent = this.$parent;
      while (
        parent &&
        ["Menu", "Submenu"].indexOf(parent.$options.componentName) === -1
      ) {
        parent = parent.$parent;
      }
      return parent;
    },
    itemStyle() {
      const style = {};
      if (this.rootMenu !== this.parentMenu) {
        return (style.borderBottomWidth = 0);
      }
    }
  },
  methods: {
    handleClick() {
      this.rootMenu.$emit("item-click", this);
      this.$router.push({ path: this.index });
    },
    handleMouseenter() {
      var parentName = this.$parent.$options.name;
      if (parentName == "Submenu") {
        this.submenuHover = true;
      } else {
        this.isHover = true;
      }
    },
    handleMouseleave() {
      var parentName = this.$parent.$options.name;
      if (parentName == "Submenu") {
        this.submenuHover = false;
      } else {
        this.isHover = false;
      }
    }
  },
  mounted() {
    var parentName = this.$parent.$options.name;
    if (parentName == "Submenu") {
      this.$el.style.height = "30px";
      this.$el.style.lineHeight = "30px";
    }
  }
};
</script>

