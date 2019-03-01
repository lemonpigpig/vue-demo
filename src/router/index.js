import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pay from '@/pages/pay'
import Transition from '@/pages/transition'
import scope from '@/pages/testScope'
import testBabel from '@/pages/testBabel'

import testDebounce from '@/pages/testDebounce'

import es6 from '@/pages/es6'
import promise from '@/pages/promise'
import mock from '@/pages/mock'
import life from '@/pages/testlifecycle'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/life',
            name: 'life',
            component: life
        },
        {
            path: '/pay',
            name: 'Pay',
            component: Pay
        },
        {
            path: '/transition',
            component: Transition
        },
        {
            path: '/scope',
            component: scope
        },
        {
            path: '/babel',
            component: testBabel
        },
        {
            path: '/debounce',
            component: testDebounce
        },

        {
            path: '/es6',
            component: es6
        },
        {
            path: '/promise',
            component: promise
        },
        {
            path: '/mock',
            component: mock
        }
    ]
})