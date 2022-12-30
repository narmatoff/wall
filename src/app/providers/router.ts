import {createRouter, createWebHistory} from 'vue-router';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
import {routes} from '../../pages';

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;



