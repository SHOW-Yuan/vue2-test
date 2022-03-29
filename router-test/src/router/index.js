import Vue from 'vue'
import VueRouter from 'vue-router';

import HelloWorld from '@src/components/HelloWorld';

const routes = [
    { path: '/', component: HelloWorld },
    
]

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

export default {
    instance: router
};