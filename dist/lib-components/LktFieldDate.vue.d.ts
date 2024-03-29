declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: DateConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    readMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowReadModeSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: undefined;
    };
    mandatory: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetMessage: {
        type: StringConstructor;
        default: string;
    };
    mandatoryMessage: {
        type: StringConstructor;
        default: string;
    };
    infoMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    showPasswordMessage: {
        type: StringConstructor;
        default: string;
    };
    switchEditionMessage: {
        type: StringConstructor;
        default: string;
    };
    disabledDates: {
        type: ArrayConstructor;
        default: () => Array<any>;
    };
    utc: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiDates: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    monthPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    timePicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    weekPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    yearPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventMinMaxNavigation: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoRange: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => null;
    };
    multiCalendars: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: () => null;
    };
    flow: {
        type: ArrayConstructor;
        default: () => null;
    };
    presetRanges: {
        type: ArrayConstructor;
        default: () => Array<any>;
    };
    minDate: {
        type: DateConstructor;
        default: () => null;
    };
    maxDate: {
        type: DateConstructor;
        default: () => null;
    };
    emptyLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelType: {
        type: StringConstructor;
        default: string;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
}, {
    Identifier: string;
    reset: () => string;
    focus: () => void;
    value: () => string;
    isMandatory: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "click-info": (...args: any[]) => void;
    "click-error": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: DateConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    readMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowReadModeSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: undefined;
    };
    mandatory: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetMessage: {
        type: StringConstructor;
        default: string;
    };
    mandatoryMessage: {
        type: StringConstructor;
        default: string;
    };
    infoMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    showPasswordMessage: {
        type: StringConstructor;
        default: string;
    };
    switchEditionMessage: {
        type: StringConstructor;
        default: string;
    };
    disabledDates: {
        type: ArrayConstructor;
        default: () => Array<any>;
    };
    utc: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiDates: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    monthPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    timePicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    weekPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    yearPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventMinMaxNavigation: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoRange: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => null;
    };
    multiCalendars: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: () => null;
    };
    flow: {
        type: ArrayConstructor;
        default: () => null;
    };
    presetRanges: {
        type: ArrayConstructor;
        default: () => Array<any>;
    };
    minDate: {
        type: DateConstructor;
        default: () => null;
    };
    maxDate: {
        type: DateConstructor;
        default: () => null;
    };
    emptyLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelType: {
        type: StringConstructor;
        default: string;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-info"?: ((...args: any[]) => any) | undefined;
    "onClick-error"?: ((...args: any[]) => any) | undefined;
}, {
    inline: boolean;
    name: string;
    label: string;
    reset: boolean;
    autocomplete: boolean;
    disabled: boolean;
    readonly: boolean;
    range: boolean;
    flow: unknown[];
    mandatory: boolean;
    placeholder: string;
    tabindex: number;
    format: string;
    modelValue: Date;
    palette: string;
    valid: boolean;
    readMode: boolean;
    allowReadModeSwitch: boolean;
    showPassword: boolean;
    resetMessage: string;
    mandatoryMessage: string;
    infoMessage: string;
    errorMessage: string;
    showPasswordMessage: string;
    switchEditionMessage: string;
    disabledDates: unknown[];
    utc: boolean;
    multiDates: boolean;
    monthPicker: boolean;
    timePicker: boolean;
    weekPicker: boolean;
    yearPicker: boolean;
    preventMinMaxNavigation: boolean;
    autoRange: string | number;
    multiCalendars: string | number | boolean;
    presetRanges: unknown[];
    minDate: Date;
    maxDate: Date;
    emptyLabel: boolean;
    modelType: string;
    locale: string;
}, {}>, {
    label?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
