import './public-path'
import Vue from 'vue'
import VueRouter from "vue-router";
import routes from './router'
import App from './App.vue'

Vue.config.productionTip = false

let router = null;
let instance = null;

function render(props = {}) {
    const {container} = props

    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/vue2' : '/',
        mode: 'history',
        routes
    });

    instance = new Vue({
        render: h => h(App),
        router
    }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[vue] vue app2 bootstraped');
}

export async function mount(props) {
    console.log('[vue] props2 from main framework', props);
    render(props);
}

export async function unmount() {
    instance.$destroy();
    instance = null;
    router = null;
}
