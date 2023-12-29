import { App } from 'vue';

import VueDatePicker from '@vuepic/vue-datepicker';
import { default as dateField } from './lib-components/LktFieldDate.vue';
import '@vuepic/vue-datepicker/dist/main.css'
import './../lkt-field-date.css';

const LktFieldDate = {
  install: (app: App) => {
    app.component('VueDatePicker', VueDatePicker)
        .component('lkt-field-date', dateField);
  },
};

export default LktFieldDate;
