import overview from './src/overview.vue';
overview.install = function (Vue) {
  Vue.component(overview.name, overview);
};
export default overview;
