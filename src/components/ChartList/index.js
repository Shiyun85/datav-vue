import chartList from './src/chart-list.vue';
chartList.install = function (Vue) {
  Vue.component(chartList.name, chartList);
};
export default chartList;
