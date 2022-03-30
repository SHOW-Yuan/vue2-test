import Vue from 'vue'
import VueRouter from 'vue-router';

import HelloWorld from '@src/components/HelloWorld';
import HelloWorld1 from '@src/components/HelloWorld1';
// const User = {
//     template: '<div>User</div>'
// }

const routes = [
    { path: '/', redirect: '/hello' },
    { path: '/test1/:id/test2/:qwe', name: 'test' , component: HelloWorld },

    {
        path: '/hello',
        component: HelloWorld,
        children: [
            {
                path: '/one', 
                component: HelloWorld1
            }
        ],
        // 路由独享的守卫
        beforeEnter: (to, form)=>{
            console.log(to, form);
            return false;
        }
    },
    {
        path: '/a',
        redirect: (to,from)=>{
            console.log(to,from);
            return { path: '/search', query: { qwe: 123 } }
        }
    },
]

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

// 路由前置守卫
router.beforeEach((to,form) => {
    console.log(to,form);
    console.log(to.meta.requiresCamera);
    return false;
})

// 路由解析守卫
router.beforeResolve(()=>{
    // 和router.beforeEach相同
})

// 路由后置守卫 和前置守卫不同的是没有next()方法
router.afterEach((to, form)=>{
    console.log(to, form);
})

export default {
    instance: router
};