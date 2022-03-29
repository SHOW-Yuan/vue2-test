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
        ]
    },
    {
        path: '/',
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

export default {
    instance: router
};