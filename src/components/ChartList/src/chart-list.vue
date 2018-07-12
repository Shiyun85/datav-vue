<template>
  <grid-layout :layout="layoutItem" :col-num="12" :row-height="30" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true" :is-draggable="isDraggable" :is-resizable="isResizable">
    <grid-item v-for="item in layoutItem" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" @resized="resizedEvent" @moved="movedEvent" @mouseenter="handleMouseenter" ref="gridItem">
      <keep-alive>
        <echart :id="item.id" :options="item.options" :autoResize="true" :init-options="initOptions" style="width:100%;height:100%" ref="echart"></echart>
      </keep-alive>
    </grid-item>
  </grid-layout>
</template>
<style lang="scss" scoped>
.vue-grid-item {
  background: #ffffff;
}
.vue-grid-placeholder {
  background: #929394;
}
</style>

<script>
import { GridItem, GridLayout } from 'vue-grid-layout';
import ECharts from 'vue-echarts/components/ECharts.vue';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/dataset';
export default {
  name: 'ChartItem',
  components: { GridItem, GridLayout, echart: ECharts },
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
    },
    resizedEvent(i, newH, newW, newHPx, newWPx) {
      var msg =
        'RESIZED i=' +
        i +
        ', H=' +
        newH +
        ', W=' +
        newW +
        ', H(px)=' +
        newHPx +
        ', W(px)=' +
        newWPx;
      console.log('resized event', msg);
    },
    movedEvent(i, newX, newY) {
      var msg = 'MOVE i=' + i + ', X=' + newX + ', Y=' + newY;
      console.log('moved event', msg);
    }
  },
  mounted() {
    this.$refs.gridItem.forEach(item => {
      item.$el.addEventListener('transitionend', event => {
        item.$children.forEach(item => {
          item.resize();
        });
      });
    });
  },
  updated() {
    this.$nextTick(() => {
      this.$refs.echart.forEach(element => {
        element.resize();
      });
    });
  },
  data() {
    return {
      isDraggable: true,
      isResizable: true,
      autoResize: true,
      echartOptions: {},
      initOptions: {
        renderer: 'canvas'
      }
    };
  }
};
</script>

