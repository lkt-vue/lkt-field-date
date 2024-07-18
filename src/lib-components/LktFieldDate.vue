<script lang="ts">
export default {name: "LktFieldDate", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {generateRandomString} from "lkt-string-tools";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {isoToDate, ymdToDate} from "lkt-date-tools";
import {LktObject} from "lkt-ts-interfaces";
import {__} from "lkt-i18n";

const emits = defineEmits(['update:modelValue', 'click-info', 'click-error']);

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<{
    modelValue?: Date | string
    placeholder?: string
    label?: string
    palette?: string
    name?: string
    valid?: boolean
    autocomplete?: boolean
    disabled?: boolean
    readonly?: boolean
    readMode?: boolean
    allowReadModeSwitch?: boolean
    tabindex?: number
    mandatory?: boolean
    reset?: boolean
    resetMessage?: string
    mandatoryMessage?: string
    infoMessage?: string
    errorMessage?: string
    switchEditionMessage?: string
    valueSlot?: string
    editSlot?: string
    slotData?: LktObject
    disabledDates?: string[]
    utc?: boolean
    multiDates?: boolean
    inline?: boolean
    monthPicker?: boolean
    timePicker?: boolean
    weekPicker?: boolean
    yearPicker?: boolean
    preventMinMaxNavigation?: boolean
    range?: boolean
    emptyLabel?: boolean
    minDate?: Date | null
    maxDate?: Date | null
    modelType?: string
    format?: string
    locale?: string
    flow?: string
    autoRange?: string | number | null
    multiCalendars?: boolean | number | string | null
    presetRanges?: any[]
}>(), {
    modelValue: () => new Date(),
    placeholder: '',
    label: '',
    palette: '',
    name: generateRandomString(16),
    valid: false,
    autocomplete: true,
    disabled: false,
    readonly: false,
    readMode: false,
    allowReadModeSwitch: false,
    tabindex: undefined,
    mandatory: false,
    reset: false,
    resetMessage: '',
    mandatoryMessage: '',
    infoMessage: '',
    errorMessage: '',
    showPasswordMessage: '',
    switchEditionMessage: '',
    valueSlot: '',
    editSlot: '',
    slotData: () => ({}),
    disabledDates: () => [],
    utc: false,
    multiDates: false,
    inline: false,
    monthPicker: false,
    timePicker: false,
    weekPicker: false,
    yearPicker: false,
    preventMinMaxNavigation: false,
    range: false,
    emptyLabel: false,
    minDate: null,
    maxDate: null,
    modelType: 'yyyy-MM-dd',
    format: 'yyyy-MM-dd',
    locale: 'en-US',
    autoRange: null,
    multiCalendars: null,
    presetRanges: () => [],
});

const getFormattedDate = (d: Date | string) => {
        if (typeof d === 'string') return getFormattedDate(getObjectDate(d));
        return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
    },
    getObjectDate = (d: Date | string) => {
        if (typeof d === 'string') {
            return isoToDate(d);
        }
        if (typeof d === 'object') return d;
        return null;
    };

// Constant data
const Identifier = generateRandomString(16);


// Components refs
const inputElement = ref(null);

// Reactive data
let _originalValue = getFormattedDate(props.modelValue),
    _value = getFormattedDate(props.modelValue),
    _valueObj = getObjectDate(props.modelValue);

const originalValue = ref(_originalValue),
    value = ref(_value),
    valueObj = ref(_valueObj),
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
    }),
    computedLabel = computed(() => {
        if (props.label.startsWith('__:')) {
            return __(props.label.substring(3));
        }
        return props.label;
    });

const focus = () => {
    nextTick(() => {
        if (inputElement.value) {
            //@ts-ignore
            inputElement.value.focus();
        }
    });
};


// Watch data
watch(() => props.readMode, (v) => editable.value = !v)
watch(() => props.modelValue, (v) => {
    if (typeof v === 'object') {
        value.value = getFormattedDate(v)
    }
}, {deep: true});
watch(value, (v) => {
    if (typeof v === 'string') {
        let asDate = ymdToDate(v);
        if (asDate !== null) {
            //@ts-ignore
            valueObj.value = ymdToDate(v);
        }
        emits('update:modelValue', valueObj.value)
    } else {
        emits('update:modelValue', v)
    }
}, {deep: true});

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
        <label v-if="!!!slots.label" :for="Identifier" v-html="computedLabel"></label>

        <div>
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