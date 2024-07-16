import I from "@vuepic/vue-datepicker";
import { defineComponent as U, useSlots as H, ref as n, computed as i, watch as c, resolveComponent as z, openBlock as h, createElementBlock as M, normalizeClass as A, unref as u, renderSlot as Y, createCommentVNode as V, createElementVNode as Z, createVNode as q, nextTick as G } from "vue";
import { generateRandomString as B } from "lkt-string-tools";
function J(l) {
  const t = l.split(/\D/);
  return new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
}
const w = (l) => l !== "" ? /* @__PURE__ */ new Date(`${l}T00:00:00Z`) : null, K = ["data-show-ui", "data-labeled"], Q = ["for", "innerHTML"], W = { name: "LktFieldDate", inheritAttrs: !1 }, X = /* @__PURE__ */ U({
  ...W,
  props: {
    modelValue: { default: () => /* @__PURE__ */ new Date() },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: B(16) },
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
  setup(l, { expose: t, emit: P }) {
    const y = P, s = H(), a = l, d = (e) => typeof e == "string" ? d(g(e)) : e.getFullYear() + "-" + ("0" + (e.getMonth() + 1)).slice(-2) + "-" + ("0" + e.getDate()).slice(-2), g = (e) => typeof e == "string" ? J(e) : typeof e == "object" ? e : null, r = B(16), f = n(null);
    let S = d(a.modelValue), T = d(a.modelValue), j = g(a.modelValue);
    const v = n(S), o = n(T), k = n(j), C = n(!1), N = n(!a.readMode), R = i(() => typeof a.valid == "function" ? a.valid() : a.valid), L = i(() => o.value !== v.value), E = i(() => a.reset || a.infoMessage !== "" || a.errorMessage !== ""), b = i(() => {
      let e = 0;
      return a.reset && ++e, a.infoMessage && ++e, e;
    }), F = i(() => {
      const e = ["lkt-field", "lkt-field-date"];
      return a.palette && e.push(`lkt-field--${a.palette}`), L.value && e.push("is-changed"), a.disabled && e.push("is-disabled"), C.value && e.push("has-focus"), b.value > 0 && e.push("has-icons", `has-icons-${b.value}`), e.push(R.value ? "is-valid" : "is-error"), e.push(a.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), O = () => {
      G(() => {
        f.value && f.value.focus();
      });
    };
    c(() => a.readMode, (e) => N.value = !e), c(() => a.modelValue, (e) => {
      typeof e == "object" && (o.value = d(e));
    }, { deep: !0 }), c(o, (e) => {
      typeof e == "string" ? (w(e) !== null && (k.value = w(e)), y("update:modelValue", k.value)) : y("update:modelValue", e);
    }, { deep: !0 });
    const D = () => o.value = v.value;
    return t({
      Identifier: r,
      reset: D,
      focus: O,
      value: () => o.value,
      isMandatory: () => a.mandatory
    }), D(), (e, m) => {
      const $ = z("VueDatePicker");
      return h(), M("div", {
        class: A(F.value),
        "data-show-ui": E.value,
        "data-labeled": !u(s).label
      }, [
        u(s).label ? Y(e.$slots, "label", { key: 0 }) : V("", !0),
        u(s).label ? V("", !0) : (h(), M("label", {
          key: 1,
          for: u(r),
          innerHTML: e.label
        }, null, 8, Q)),
        Z("div", null, [
          q($, {
            modelValue: o.value,
            "onUpdate:modelValue": m[0] || (m[0] = (p) => o.value = p),
            ref: (p) => f.value = p,
            uid: u(r),
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
      ], 10, K);
    };
  }
}), le = {
  install: (l) => {
    l.component("lkt-field-date") === void 0 && l.component("lkt-field-date", X), l.component("VueDatePicker") === void 0 && l.component("VueDatePicker", I);
  }
};
export {
  le as default
};
