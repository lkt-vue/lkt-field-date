import { App } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css';
import './../lkt-field-date.css';
declare const LktFieldDate: {
    install: (app: App) => void;
};
export default LktFieldDate;
