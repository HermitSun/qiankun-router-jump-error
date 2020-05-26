import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Foo from '../views/Foo'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/foo',
    name: 'foo',
    component: Foo,
  }
];

export default routes;
