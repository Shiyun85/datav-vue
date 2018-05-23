import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import Home from '@/pages/Home';
import Overview from '@/pages/Overview';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/main',
    name: 'Home',
    component: Home
  }, {
    path: '/overview',
    name: 'overview',
    component: Overview
  }]
});
