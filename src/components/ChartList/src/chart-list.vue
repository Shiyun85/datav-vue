<template>
  <grid-layout :layout="layoutItem" :col-num="12" :is-draggable="isDraggable" :row-height="30" :is-resizable="isResizable" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">
    <grid-item v-for="item in layoutItem" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" @mouseenter="handleMouseenter">
      {{item.i}}
    </grid-item>
  </grid-layout>
</template>
<style scoped>
.vue-grid-item {
  background: #ffffff;
}
.vue-grid-placeholder {
  background: #929394;
}
</style>

<script>
import { GridItem, GridLayout } from "vue-grid-layout";
export default {
  name: "ChartItem",
  components: { GridItem, GridLayout },
  props: {
    layoutItem: Array,
    showOperation: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleMouseenter() {
      this.isDraggable = true;
      this.isResizable = true;
    }
  },
  data() {
    return {
      isDraggable: false,
      isResizable: false
    };
  }
};
</script>

