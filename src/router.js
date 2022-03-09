import { createRouter, createWebHistory } from 'vue-router';
import GreeTing from './components/GreeTing.vue';
import SignIn from './components/SignIn.vue';
import LoginCode from './components/LoginCode.vue';

const routes = [
    {path: '/', component: GreeTing},
    {path: '/signin', component: SignIn},
    {path: '/code', component: LoginCode},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;