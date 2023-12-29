<script lang="ts">
export default {name: "LktFieldDate", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {generateRandomString} from "lkt-string-tools";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {ymdToDate} from "lkt-date-tools";

const emits = defineEmits(['update:modelValue', 'click-info', 'click-error']);

// Slots
const slots = useSlots();

// Props
const props = defineProps({
    modelValue: {type: Date, default: ''},

    placeholder: {type: String, default: ''},
    label: {type: String, default: ''},
    palette: {type: String, default: ''},
    name: {type: String, default: generateRandomString(16)},
    valid: {type: Boolean, default: false},
    autocomplete: {type: Boolean, default: true},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    readMode: {type: Boolean, default: false},
    allowReadModeSwitch: {type: Boolean, default: false},
    tabindex: {type: Number, default: undefined},
    mandatory: {type: Boolean, default: false},
    showPassword: {type: Boolean, default: false},
    reset: {type: Boolean, default: false},
    resetMessage: {type: String, default: ''},
    mandatoryMessage: {type: String, default: ''},
    infoMessage: {type: String, default: ''},
    errorMessage: {type: String, default: ''},
    showPasswordMessage: {type: String, default: ''},
    switchEditionMessage: {type: String, default: ''},


    disabledDates: {type: Array, default: (): Array<any> => []},
    utc: {type: Boolean, default: false},
    multiDates: {type: Boolean, default: false},
    inline: {type: Boolean, default: false},
    monthPicker: {type: Boolean, default: false},
    timePicker: {type: Boolean, default: false},
    weekPicker: {type: Boolean, default: false},
    yearPicker: {type: Boolean, default: false},
    preventMinMaxNavigation: {type: Boolean, default: false},
    range: {type: Boolean, default: false},
    autoRange: {type: [Number, String], default: (): null => null},
    multiCalendars: {type: [Boolean, Number, String], default: (): null => null},
    flow: {type: Array, default: (): null => null},
    presetRanges: {type: Array, default: (): Array<any> => []},
    minDate: {type: Date, default: (): null => null},
    maxDate: {type: Date, default: (): null => null},
    emptyLabel: {type: Boolean, default: false},
    modelType: {type: String, default: 'yyyy-MM-dd'},
    format: {type: String, default: 'yyyy-MM-dd'},
    locale: {type: String, default: 'en-US'},
});

const getFormattedDate = (d: Date) => {
    return d.getFullYear() + '-' + ('0'+(d.getMonth()+1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
}

// Constant data
const Identifier = generateRandomString(16);


// Components refs
const inputElement = ref(null);

// Reactive data
const originalValue = ref(getFormattedDate(props.modelValue)),
    value = ref(getFormattedDate(props.modelValue)),
    focusing = ref(false),
    editable = ref(!props.readMode);


const isValid = computed(() => {
        // @ts-ignore
        if (typeof props.valid === 'function') return props.valid();
        return props.valid;
    }),
    changed = computed(() => value.value !== originalValue.value),
    showInfoUi = computed(() => {
        return props.reset || props.infoMessage !== '' || props.errorMessage !== '';
    }),
    amountOfIcons = computed(() => {
        let r = 0;
        if (props.reset) ++r;
        if (props.infoMessage) ++r;
        return r;
    }),
    classes = computed(() => {
        const r = ['lkt-field', 'lkt-field-date'];

        if (props.palette) r.push(`lkt-field--${props.palette}`);
        if (changed.value) r.push('is-changed');
        if (props.disabled) r.push('is-disabled');
        if (focusing.value) r.push('has-focus');

        if (amountOfIcons.value > 0) r.push(`has-icons`, `has-icons-${amountOfIcons.value}`);

        r.push(isValid.value ? 'is-valid' : 'is-error');
        r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

        return r.join(' ');
    });

const focus = () => {
    nextTick(() => {
        if (inputElement.value) {
            inputElement.value.focus();
        }
    });
};


// Watch data
watch(() => props.readMode, (v) => editable.value = !v)
watch(() => props.modelValue, (v) => {
    value.value = getFormattedDate(v)
})
watch(value, (v) => {
    if (typeof v === 'string') {
        emits('update:modelValue', ymdToDate(v))
    } else {
        emits('update:modelValue', v)
    }
})

const reset = () => value.value = originalValue.value,
    getValue = () => value.value;

defineExpose({
    Identifier,
    reset,
    focus,
    value: getValue,
    isMandatory: () => props.mandatory
});

reset();
</script>

<template>
    <div v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="!!!slots.label"
    >
        <slot v-if="!!slots.label" name="label"></slot>
        <label v-if="!!!slots.label" :for="Identifier" v-html="label"></label>

        <div class="lkt-field-text__main">
            <VueDatePicker v-model="value"
                           :ref="(el:any) => inputElement = el"
                           v-bind:uid="Identifier"
                           v-bind:disabled="disabled"
                           v-bind:name="name"
                           v-bind:range="range"
                           v-bind:auto-range="autoRange"
                           v-bind:multi-calendars="multiCalendars"
                           v-bind:month-picker="monthPicker"
                           v-bind:time-picker="timePicker"
                           v-bind:inline="inline"
                           v-bind:multi-dates="multiDates"
                           v-bind:flow="flow"
                           v-bind:utc="utc"
                           v-bind:week-picker="weekPicker"
                           v-bind:year-picker="yearPicker"
                           v-bind:preset-ranges="presetRanges"
                           v-bind:disabled-dates="disabledDates"
                           v-bind:min-date="minDate"
                           v-bind:max-date="maxDate"
                           v-bind:prevent-min-max-navigation="preventMinMaxNavigation"
                           v-bind:model-type="modelType"
                           v-bind:locale="locale"
                           v-bind:format="format"
                           v-bind:readonly="readonly || readMode"
            ></VueDatePicker>
        </div>
    </div>
</template>