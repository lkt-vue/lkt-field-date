(function(n,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("@vuepic/vue-datepicker"),require("vue"),require("lkt-string-tools")):typeof define=="function"&&define.amd?define(["@vuepic/vue-datepicker","vue","lkt-string-tools"],t):(n=typeof globalThis<"u"?globalThis:n||self,n.LktFieldDate=t(n.VueDatePicker,n.Vue,n.LktStringTools))})(this,function(n,t,f){"use strict";const k=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(n),h=e=>e!==""?new Date(`${e}T00:00:00Z`):null,D=["data-show-ui","data-labeled"],M=["for","innerHTML"],V={class:"lkt-field-text__main"},b={name:"LktFieldDate",inheritAttrs:!1},B=t.defineComponent({...b,props:{modelValue:{type:Date,default:""},placeholder:{type:String,default:""},label:{type:String,default:""},palette:{type:String,default:""},name:{type:String,default:f.generateRandomString(16)},valid:{type:Boolean,default:!1},autocomplete:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},readMode:{type:Boolean,default:!1},allowReadModeSwitch:{type:Boolean,default:!1},tabindex:{type:Number,default:void 0},mandatory:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},resetMessage:{type:String,default:""},mandatoryMessage:{type:String,default:""},infoMessage:{type:String,default:""},errorMessage:{type:String,default:""},showPasswordMessage:{type:String,default:""},switchEditionMessage:{type:String,default:""},disabledDates:{type:Array,default:()=>[]},utc:{type:Boolean,default:!1},multiDates:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},monthPicker:{type:Boolean,default:!1},timePicker:{type:Boolean,default:!1},weekPicker:{type:Boolean,default:!1},yearPicker:{type:Boolean,default:!1},preventMinMaxNavigation:{type:Boolean,default:!1},range:{type:Boolean,default:!1},autoRange:{type:[Number,String],default:()=>null},multiCalendars:{type:[Boolean,Number,String],default:()=>null},flow:{type:Array,default:()=>null},presetRanges:{type:Array,default:()=>[]},minDate:{type:Date,default:()=>null},maxDate:{type:Date,default:()=>null},emptyLabel:{type:Boolean,default:!1},modelType:{type:String,default:"yyyy-MM-dd"},format:{type:String,default:"yyyy-MM-dd"},locale:{type:String,default:"en-US"}},emits:["update:modelValue","click-info","click-error"],setup(e,{expose:w,emit:S}){const c=S,o=t.useSlots(),l=e,d=a=>a.getFullYear()+"-"+("0"+(a.getMonth()+1)).slice(-2)+"-"+("0"+a.getDate()).slice(-2),r=f.generateRandomString(16),u=t.ref(null),m=t.ref(d(l.modelValue)),i=t.ref(d(l.modelValue)),P=t.ref(!1),x=t.ref(!l.readMode),v=t.computed(()=>typeof l.valid=="function"?l.valid():l.valid),L=t.computed(()=>i.value!==m.value),N=t.computed(()=>l.reset||l.infoMessage!==""||l.errorMessage!==""),y=t.computed(()=>{let a=0;return l.reset&&++a,l.infoMessage&&++a,a}),T=t.computed(()=>{const a=["lkt-field","lkt-field-date"];return l.palette&&a.push(`lkt-field--${l.palette}`),L.value&&a.push("is-changed"),l.disabled&&a.push("is-disabled"),P.value&&a.push("has-focus"),y.value>0&&a.push("has-icons",`has-icons-${y.value}`),a.push(v.value?"is-valid":"is-error"),a.push(l.modelValue?"is-filled":"is-empty"),a.join(" ")}),C=()=>{t.nextTick(()=>{u.value&&u.value.focus()})};t.watch(()=>l.readMode,a=>x.value=!a),t.watch(()=>l.modelValue,a=>{i.value=d(a)},{deep:!0}),t.watch(i,a=>{typeof a=="string"?c("update:modelValue",h(a)):c("update:modelValue",a)});const p=()=>i.value=m.value;return w({Identifier:r,reset:p,focus:C,value:()=>i.value,isMandatory:()=>l.mandatory}),p(),(a,g)=>{const F=t.resolveComponent("VueDatePicker");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(T.value),"data-show-ui":N.value,"data-labeled":!t.unref(o).label},[t.unref(o).label?t.renderSlot(a.$slots,"label",{key:0}):t.createCommentVNode("",!0),t.unref(o).label?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock("label",{key:1,for:t.unref(r),innerHTML:e.label},null,8,M)),t.createElementVNode("div",V,[t.createVNode(F,{modelValue:i.value,"onUpdate:modelValue":g[0]||(g[0]=s=>i.value=s),ref:s=>u.value=s,uid:t.unref(r),disabled:e.disabled,name:e.name,range:e.range,"auto-range":e.autoRange,"multi-calendars":e.multiCalendars,"month-picker":e.monthPicker,"time-picker":e.timePicker,inline:e.inline,"multi-dates":e.multiDates,flow:e.flow,utc:e.utc,"week-picker":e.weekPicker,"year-picker":e.yearPicker,"preset-ranges":e.presetRanges,"disabled-dates":e.disabledDates,"min-date":e.minDate,"max-date":e.maxDate,"prevent-min-max-navigation":e.preventMinMaxNavigation,"model-type":e.modelType,locale:e.locale,format:e.format,readonly:e.readonly||e.readMode},null,8,["modelValue","uid","disabled","name","range","auto-range","multi-calendars","month-picker","time-picker","inline","multi-dates","flow","utc","week-picker","year-picker","preset-ranges","disabled-dates","min-date","max-date","prevent-min-max-navigation","model-type","locale","format","readonly"])])],10,D)}}}),E="",A="";return{install:e=>{e.component("lkt-field-date")===void 0&&e.component("lkt-field-date",B),e.component("VueDatePicker")===void 0&&e.component("VueDatePicker",k.default)}}});
