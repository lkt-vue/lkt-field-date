import j from "@vuepic/vue-datepicker";
import { defineComponent as I, useSlots as U, ref as o, computed as n, watch as p, resolveComponent as H, openBlock as h, createElementBlock as b, normalizeClass as O, unref as d, renderSlot as z, createCommentVNode as M, createElementVNode as A, createVNode as Y, nextTick as Z } from "vue";
import { generateRandomString as V } from "lkt-string-tools";
const D = (l) => l !== "" ? /* @__PURE__ */ new Date(`${l}T00:00:00Z`) : null, q = ["data-show-ui", "data-labeled"], G = ["for", "innerHTML"], J = { name: "LktFieldDate", inheritAttrs: !1 }, K = /* @__PURE__ */ I({
  ...J,
  props: {
    modelValue: { default: () => /* @__PURE__ */ new Date() },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: V(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { default: "" },
    mandatoryMessage: { default: "" },
    infoMessage: { default: "" },
    errorMessage: { default: "" },
    switchEditionMessage: { default: "" },
    valueSlot: { default: "" },
    editSlot: { default: "" },
    slotData: { default: () => ({}) },
    disabledDates: { default: () => [] },
    utc: { type: Boolean, default: !1 },
    multiDates: { type: Boolean, default: !1 },
    inline: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    weekPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    range: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 },
    minDate: { default: null },
    maxDate: { default: null },
    modelType: { default: "yyyy-MM-dd" },
    format: { default: "yyyy-MM-dd" },
    locale: { default: "en-US" },
    flow: {},
    autoRange: { default: null },
    multiCalendars: { type: [Boolean, Number, String, null], default: null },
    presetRanges: { default: () => [] }
  },
  emits: ["update:modelValue", "click-info", "click-error"],
  setup(l, { expose: B, emit: w }) {
    const c = w, i = U(), a = l, u = (e) => e.getFullYear() + "-" + ("0" + (e.getMonth() + 1)).slice(-2) + "-" + ("0" + e.getDate()).slice(-2), s = V(16), r = o(null);
    let P = u(a.modelValue), S = u(a.modelValue);
    const y = o(P), t = o(S), v = o(a.modelValue), T = o(!1), C = o(!a.readMode), N = n(() => typeof a.valid == "function" ? a.valid() : a.valid), R = n(() => t.value !== y.value), L = n(() => a.reset || a.infoMessage !== "" || a.errorMessage !== ""), g = n(() => {
      let e = 0;
      return a.reset && ++e, a.infoMessage && ++e, e;
    }), E = n(() => {
      const e = ["lkt-field", "lkt-field-date"];
      return a.palette && e.push(`lkt-field--${a.palette}`), R.value && e.push("is-changed"), a.disabled && e.push("is-disabled"), T.value && e.push("has-focus"), g.value > 0 && e.push("has-icons", `has-icons-${g.value}`), e.push(N.value ? "is-valid" : "is-error"), e.push(a.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), F = () => {
      Z(() => {
        r.value && r.value.focus();
      });
    };
    p(() => a.readMode, (e) => C.value = !e), p(() => a.modelValue, (e) => {
      typeof e == "object" && (t.value = u(e));
    }, { deep: !0 }), p(t, (e) => {
      typeof e == "string" ? (D(e) !== null && (v.value = D(e)), c("update:modelValue", v.value)) : c("update:modelValue", e);
    }, { deep: !0 });
    const k = () => t.value = y.value;
    return B({
      Identifier: s,
      reset: k,
      focus: F,
      value: () => t.value,
      isMandatory: () => a.mandatory
    }), k(), (e, f) => {
      const $ = H("VueDatePicker");
      return h(), b("div", {
        class: O(E.value),
        "data-show-ui": L.value,
        "data-labeled": !d(i).label
      }, [
        d(i).label ? z(e.$slots, "label", { key: 0 }) : M("", !0),
        d(i).label ? M("", !0) : (h(), b("label", {
          key: 1,
          for: d(s),
          innerHTML: e.label
        }, null, 8, G)),
        A("div", null, [
          Y($, {
            modelValue: t.value,
            "onUpdate:modelValue": f[0] || (f[0] = (m) => t.value = m),
            ref: (m) => r.value = m,
            uid: d(s),
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
      ], 10, q);
    };
  }
}), x = {
  install: (l) => {
    l.component("lkt-field-date") === void 0 && l.component("lkt-field-date", K), l.component("VueDatePicker") === void 0 && l.component("VueDatePicker", j);
  }
};
export {
  x as default
};
