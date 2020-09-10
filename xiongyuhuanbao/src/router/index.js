import Vue from 'vue'
import VueRouter from 'vue-router'

import TabBar from '@/layout';
import Nav from '@/components/nav'
///pages
import Home from '@/pages/home/index';
import Introduce from '@/pages/introduce/index';
import Product from '@/pages/product/index';
import Contact from '@/pages/contact/index';
import News from '@/pages/news/index';
import Company from '@/pages/contact/company'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: TabBar,
        children: [{
            path: '',
            name: 'home',
            component: Home
        }]
    },
    {
        path: '/introduce',
        component: TabBar,
        children: [{
            path: '',
            name: 'introduce',
            component: Introduce

        }]
    },
    {
        path: '/product',
        component: TabBar,
        children: [{
            path: '',
            name: 'product',
            component: Product
        }]
    },
    {
        path: '/news',
        component: TabBar,
        children: [{
            path: '',
            name: 'news',
            component: News
        }]
    },
    {
        path: '/company',
        component: TabBar,
        children: [{
            path: '',
            name: 'company',
            component: Company
        }]
    },
    {
        path: '/contact',
        component: Nav,
        children: [{
            path: '',
            name: 'contact',
            component: Contact
        }]
    },
    

    // {
    //     path: '/company',
    //     name: 'company',
    //     component: Company
    // },


]
const router = new VueRouter({
    // mode: 'history',
    routes: routes
})
export default router;