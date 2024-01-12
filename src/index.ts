import { App } from 'vue';

import VueDatePicker from '@vuepic/vue-datepicker';
import { default as dateField } from './lib-components/LktFieldDate.vue';
import '@vuepic/vue-datepicker/dist/main.css'
import './../lkt-field-date.css';

const LktFieldDate = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-date') === undefined) app.component('lkt-field-date', dateField);
    if (app.component('VueDatePicker') === undefined) app.component('VueDatePicker', VueDatePicker);
  },
};

export default LktFieldDate;
