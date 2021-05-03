import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Countries from '@/views/Countries';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },{
            path: '/countries',
            component: Countries
        }
    ]
})
