<template>
  <li class="header-menu-item" :class="{'is-active':active,'is-hover':isHover}" @click="handleClick" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
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
      isHover: false
    };
  },
  computed: {
    active() {
      return this.rootMenu.activeIndex === this.index;
    }
  },
  methods: {
    handleClick() {
      this.$parent.$emit("item-click", this);
      this.$router.push({ path: this.index });
    },
    handleMouseenter() {
      this.isHover = true;
    },
    handleMouseleave() {
      this.isHover = false;
    }
  }
};
</script>

