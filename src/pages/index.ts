import Routing from './index.vue';

export const routes = [
    {
        path: '/',
        component: () => import('./wall-calculator/index.vue')
    },
    {
        path: '/testpage',
        component: () => import('./test-page')
    }
];

export default {Routing}
