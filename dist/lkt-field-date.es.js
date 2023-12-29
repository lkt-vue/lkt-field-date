import T from "@vuepic/vue-datepicker";
import { defineComponent as F, useSlots as L, ref as n, computed as i, watch as m, resolveComponent as A, openBlock as v, createElementBlock as h, normalizeClass as E, unref as o, renderSlot as $, createCommentVNode as M, createElementVNode as I, createVNode as U, nextTick as H } from "vue";
import { generateRandomString as b } from "lkt-string-tools";
const j = (e) => e !== "" ? new Date(`${e}T00:00:00Z`) : null, z = ["data-show-ui", "data-labeled"], O = ["for", "innerHTML"], Y = { class: "lkt-field-text__main" }, Z = { name: "LktFieldDate", inheritAttrs: !1 }, q = /* @__PURE__ */ F({
  ...Z,
  props: {
    modelValue: { type: Date, default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: b(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { type: Number, default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { type: String, default: "" },
    mandatoryMessage: { type: String, default: "" },
    infoMessage: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    showPasswordMessage: { type: String, default: "" },
    switchEditionMessage: { type: String, default: "" },
    disabledDates: { type: Array, default: () => [] },
    utc: { type: Boolean, default: !1 },
    multiDates: { type: Boolean, default: !1 },
    inline: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    weekPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    range: { type: Boolean, default: !1 },
    autoRange: { type: [Number, String], default: () => null },
    multiCalendars: { type: [Boolean, Number, String], default: () => null },
    flow: { type: Array, default: () => null },
    presetRanges: { type: Array, default: () => [] },
    minDate: { type: Date, default: () => null },
    maxDate: { type: Date, default: () => null },
    emptyLabel: { type: Boolean, default: !1 },
    modelType: { type: String, default: "yyyy-MM-dd" },
    format: { type: String, default: "yyyy-MM-dd" },
    locale: { type: String, default: "en-US" }
  },
  emits: ["update:modelValue", "click-info", "click-error"],
  setup(e, { expose: B, emit: V }) {
    const c = V, d = L(), t = e, u = (a) => a.getFullYear() + "-" + ("0" + (a.getMonth() + 1)).slice(-2) + "-" + ("0" + a.getDate()).slice(-2), s = b(16), r = n(null), y = n(u(t.modelValue)), l = n(u(t.modelValue)), D = n(!1), w = n(!t.readMode), S = i(() => typeof t.valid == "function" ? t.valid() : t.valid), P = i(() => l.value !== y.value), x = i(() => t.reset || t.infoMessage !== "" || t.errorMessage !== ""), g = i(() => {
      let a = 0;
      return t.reset && ++a, t.infoMessage && ++a, a;
    }), N = i(() => {
      const a = ["lkt-field", "lkt-field-date"];
      return t.palette && a.push(`lkt-field--${t.palette}`), P.value && a.push("is-changed"), t.disabled && a.push("is-disabled"), D.value && a.push("has-focus"), g.value > 0 && a.push("has-icons", `has-icons-${g.value}`), a.push(S.value ? "is-valid" : "is-error"), a.push(t.modelValue ? "is-filled" : "is-empty"), a.join(" ");
    }), C = () => {
      H(() => {
        r.value && r.value.focus();
      });
    };
    m(() => t.readMode, (a) => w.value = !a), m(() => t.modelValue, (a) => {
      l.value = u(a);
    }), m(l, (a) => {
      typeof a == "string" ? c("update:modelValue", j(a)) : c("update:modelValue", a);
    });
    const p = () => l.value = y.value;
    return B({
      Identifier: s,
      reset: p,
      focus: C,
      value: () => l.value,
      isMandatory: () => t.mandatory
    }), p(), (a, k) => {
      const R = A("VueDatePicker");
      return v(), h("div", {
        class: E(N.value),
        "data-show-ui": x.value,
        "data-labeled": !o(d).label
      }, [
        o(d).label ? $(a.$slots, "label", { key: 0 }) : M("", !0),
        o(d).label ? M("", !0) : (v(), h("label", {
          key: 1,
          for: o(s),
          innerHTML: e.label
        }, null, 8, O)),
        I("div", Y, [
          U(R, {
            modelValue: l.value,
            "onUpdate:modelValue": k[0] || (k[0] = (f) => l.value = f),
            ref: (f) => r.value = f,
            uid: o(s),
            disabled: e.disabled,
            name: e.name,
            range: e.range,
            "auto-range": e.autoRange,
            "multi-calendars": e.multiCalendars,
            "month-picker": e.monthPicker,
            "time-picker": e.timePicker,
            inline: e.inline,
            "multi-dates": e.multiDates,
            flow: e.flow,
            utc: e.utc,
            "week-picker": e.weekPicker,
            "year-picker": e.yearPicker,
            "preset-ranges": e.presetRanges,
            "disabled-dates": e.disabledDates,
            "min-date": e.minDate,
            "max-date": e.maxDate,
            "prevent-min-max-navigation": e.preventMinMaxNavigation,
            "model-type": e.modelType,
            locale: e.locale,
            format: e.format,
            readonly: e.readonly || e.readMode
          }, null, 8, ["modelValue", "uid", "disabled", "name", "range", "auto-range", "multi-calendars", "month-picker", "time-picker", "inline", "multi-dates", "flow", "utc", "week-picker", "year-picker", "preset-ranges", "disabled-dates", "min-date", "max-date", "prevent-min-max-navigation", "model-type", "locale", "format", "readonly"])
        ])
      ], 10, z);
    };
  }
});
const W = {
  install: (e) => {
    e.component("VueDatePicker", T).component("lkt-field-date", q);
  }
};
export {
  W as default
};
