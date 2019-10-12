import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import theindex from '../pages/theindex'
import power from '../pages/power'
import science from '../pages/science'
import investment from '../pages/investment'
import service from '../pages/service'
import enterprise from '../pages/enterprise'
import personnel from '../pages/personnel'
import contact from '../pages/contact'
import policy from '../pages/policy.vue'
import news_detail from '../pages/news_detail.vue'
import apartment from '../pages/apartment.vue'
import service_detail from '../pages/service_detail.vue'
import famous from '../pages/famous.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'theindex',
            component: theindex
        },
        {
            path: '/power',
            name: 'power',
            component: power
        },
        {
            path: '/famous',
            name: 'famous',
            component: famous    
        },
        {
            path: '/science',
            name: 'science',
            component: science
        },
        {
            path: '/investment',
            name: 'investment',
            component: investment
        },
        {
            path: '/service',
            name: 'service',
            component: service
        },
        {
            path: '/enterprise',
            name: 'enterprise',
            component: enterprise
        },
        {
            path: '/personnel',
            name: 'personnel',
            component: personnel
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/policy',
            name: 'policy',
            component: policy
        },
        {
            path: '/news_detail',
            name: 'news_detail',
            component: news_detail
        },
        {
            path: '/apartment',
            name: 'apartment',
            component: apartment
        },
        {
            path: '/service_detail',
            name: 'service_detail',
            component: service_detail
        }
    ]
})