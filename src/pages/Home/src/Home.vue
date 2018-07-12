<template>
  <chart-list :layoutItem="layoutItem" v-if="layoutItem.length"></chart-list>
</template>
<script>
import chartList from '@/components/chartList';
import { getDimensionsFromDatas, getColumnValues } from '@/common/js/util';
import CHART_CONFIG from '@/common/js/echart-config';
export default {
  name: 'Home',
  components: { chartList },
  data() {
    return {
      layoutItem: []
    };
  },
  methods: {
    _fetchOptionById(id, item) {},
    _mixinOptToItem(items) {
      let itemsLen = items.length;
      let successIndex = 0;
      items.forEach((item, idx) => {
        let url = `/datav-ws/ws/0.1/graph/${item.id}`;
        item.options = {
          xAxis: { type: 'category' },
          yAxis: {}
        };
        this.$axios.get(url).then(result => {
          successIndex++;
          let data = result.data;
          // 生成echart options; 此代碼應該獨立出來
          let dimensions = getDimensionsFromDatas(data.datas);
          let columnValues = getColumnValues(data.datas);
          item.options.dataset = {
            source: [dimensions, ...columnValues]
          };
          item.options.series = [];
          for (let index = 0; index < dimensions.length - 1; index++) {
            item.options.series.push({
              type: CHART_CONFIG.CHART_TYPE[result.data.styleId]
            });
          }
          if (successIndex == itemsLen) {
            this.layoutItem = items;
          }
        });
      });
    },
    _onSuccess(result) {
      let datas = result.data.graphs;
      let items = [];
      let options = {};
      datas.forEach((obj, idx) => {
        items.push({
          x: obj.graphPlaceX,
          y: obj.graphPlaceY,
          w: obj.graphWidth,
          h: obj.graphHeight,
          i: idx + '',
          id: obj.id
        });
      });
      this._mixinOptToItem([].concat(items));
      //this.layoutItem = item;
    }
  },
  mounted() {
    this.$axios.get('/datav-ws/ws/0.1/board/-2').then(this._onSuccess);
  }
};
</script>
