<script lang="ts">
export default {name: "LktFieldDate", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {generateRandomString} from "lkt-string-tools";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {createLktEvent} from "lkt-events";

const emits = defineEmits(['update:modelValue', 'click-info', 'click-error']);

// Slots
const slots = useSlots();

// Props
const props = defineProps({
    modelValue: {type: Date, default: () => new Date()},

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
    reset: {type: Boolean, default: false},
    resetMessage: {type: String, default: ''},
    mandatoryMessage: {type: String, default: ''},
    infoMessage: {type: String, default: ''},
    errorMessage: {type: String, default: ''},
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
    locale: {type: String, default: 'en-US'},
});

// Constant data
const Identifier = generateRandomString(16);


// Components refs
const inputElement = ref(null);

const getFormattedDate = (d: Date) => {
    return d.getFullYear() + '-' + ('0'+(d.getMonth()+1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
}

// const getFormattedDateWithHour = (d) => {
//     var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
//         d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
// }

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
        if (props.disabled) r.push('is-disabled');
        if (focusing.value) r.push('has-focus');

        if (amountOfIcons.value > 0) r.push(`has-icons`, `has-icons-${amountOfIcons.value}`);

        r.push(isValid.value ? 'is-valid' : 'is-error');
        r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

        return r.join(' ');
    }),
    readModeTitle = computed(() => {
        // if (typeof value.value === 'object') return value.value.toString();
        return value.value;
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
watch(value, (v) => emits('update:modelValue', v))

const reset = () => value.value = originalValue.value,
    getValue = () => value.value,
    onClickInfo = ($event: any) => emits('click-info', $event, createLktEvent(Identifier, {value: value.value})),
    onClickError = ($event: any) => emits('click-error', $event, createLktEvent(Identifier, {value: value.value})),
    onClickSwitchEdition = ($event: any) => {
        editable.value = !editable.value;
        if (editable.value) focus();
    };

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

        <div v-if="editable" class="lkt-field-text__main">
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
            ></VueDatePicker>

            <div class="lkt-field__state" v-if="showInfoUi">
                <i v-if="props.errorMessage" class="lkt-field__error-icon" :title="props.errorMessage"
                   v-on:click="onClickError"></i>
                <i v-if="props.infoMessage" class="lkt-field__info-icon" :title="props.infoMessage"
                   v-on:click="onClickInfo"></i>
                <i v-if="props.mandatory" class="lkt-field__mandatory-icon" :title="props.mandatoryMessage"></i>
                <i v-if="allowReadModeSwitch" class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>

        <div v-if="!editable" class="lkt-field-textarea__read">
            <div class="lkt-field-textarea__read-value" v-html="value" :title="readModeTitle"></div>
            <div v-if="allowReadModeSwitch" class="lkt-field__state">
                <i class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>
    </div>
</template>