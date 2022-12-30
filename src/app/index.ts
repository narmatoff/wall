import {
    router,
    // store
} from './providers';
import {createApp} from 'vue'

import App from './index.vue';
import './index.scss'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';
import Chip from 'primevue/chip';
import InputNumber from 'primevue/inputnumber';
import Panel from 'primevue/panel';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Card from 'primevue/card';

import 'primeflex/primeflex.scss';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

export const app = createApp(App);
app
    .use(PrimeVue, {ripple: true})
    .use(ToastService)
    .use(router)
    .component('Button', Button)
    .component('Fieldset', Fieldset)
    .component('Chip', Chip)
    .component('InputNumber', InputNumber)
    .component('Panel', Panel)
    .component('Column', Column)
    .component('ColumnGroup', ColumnGroup)
    .component('Row', Row)
    .component('Toast', Toast)
    .component('Card', Card)
    .directive('tooltip', Tooltip)
    .mount('#app');
