import{m as X,u as ee,a as le,V as ae,b as Y,g as q}from"./VSliderTrack-16ef92dc.js";import{c as te,m as se,u as oe,a as E,V as ne}from"./VInput-e8e8f4b8.js";import{as as ue,l as V,aD as re,D as H,az as ie,q as a,F as de,Z as ce,d as S,o as R,b as k,s as w,H as x,w as i,z as me,n as d,Q as p}from"./main-3f772619.js";import{_ as pe}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import{a as $,V as ve}from"./VRow-0c7e6edd.js";import"./transition-6332bc63.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";import"./VAvatar-1d1d21c4.js";import"./VImg-1135bfd9.js";import"./VDivider-13482bbd.js";const D=ue()({name:"VRangeSlider",props:{...te(),...se(),...X(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:n,emit:o}=s;const l=V(),u=V(),h=V();function j(c){if(!l.value||!u.value)return;const v=q(c,l.value.$el,e.direction),b=q(c,u.value.$el,e.direction),r=Math.abs(v),m=Math.abs(b);return r<m||r===m&&v<0?l.value.$el:u.value.$el}const P=ee(e),t=re(e,"modelValue",void 0,c=>c!=null&&c.length?c.map(v=>P.roundValue(v)):[0,0]),{activeThumbRef:f,hasLabels:Q,max:I,min:z,mousePressed:Z,onSliderMousedown:G,onSliderTouchstart:J,position:L,trackContainerRef:K}=le({props:e,steps:P,onSliderStart:()=>{o("start",t.value)},onSliderEnd:c=>{var r;let{value:v}=c;const b=f.value===((r=l.value)==null?void 0:r.$el)?[v,t.value[1]]:[t.value[0],v];t.value=b,o("end",b)},onSliderMove:c=>{var m,_,y,T;let{value:v}=c;const[b,r]=t.value;!e.strict&&b===r&&b!==z.value&&(f.value=v>b?(m=u.value)==null?void 0:m.$el:(_=l.value)==null?void 0:_.$el,(y=f.value)==null||y.focus()),f.value===((T=l.value)==null?void 0:T.$el)?t.value=[Math.min(v,r),r]:t.value=[b,Math.max(b,v)]},getActiveThumb:j}),{isFocused:M,focus:A,blur:N}=oe(e),O=H(()=>L(t.value[0])),W=H(()=>L(t.value[1]));return ie(()=>{const[c,v]=E.filterProps(e),b=!!(e.label||n.label||n.prepend);return a(E,ce({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!n["tick-label"]||Q.value,"v-slider--focused":M.value,"v-slider--pressed":Z.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:h},c,{focused:M.value}),{...n,prepend:b?r=>{var m,_;return a(de,null,[((m=n.label)==null?void 0:m.call(n,r))??e.label?a(ne,{class:"v-slider__label",text:e.label},null):void 0,(_=n.prepend)==null?void 0:_.call(n,r)])}:void 0,default:r=>{var y,T;let{id:m,messagesId:_}=r;return a("div",{class:"v-slider__container",onMousedown:G,onTouchstartPassive:J},[a("input",{id:`${m.value}_start`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${m.value}_stop`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:t.value[1]},null),a(ae,{ref:K,start:O.value,stop:W.value},{"tick-label":n["tick-label"]}),a(Y,{ref:l,"aria-describedby":_.value,focused:M&&f.value===((y=l.value)==null?void 0:y.$el),modelValue:t.value[0],"onUpdate:modelValue":g=>t.value=[g,t.value[1]],onFocus:g=>{var C,F,U,B;A(),f.value=(C=l.value)==null?void 0:C.$el,t.value[0]===t.value[1]&&t.value[1]===z.value&&g.relatedTarget!==((F=u.value)==null?void 0:F.$el)&&((U=l.value)==null||U.$el.blur(),(B=u.value)==null||B.$el.focus())},onBlur:()=>{N(),f.value=void 0},min:z.value,max:t.value[1],position:O.value},{"thumb-label":n["thumb-label"]}),a(Y,{ref:u,"aria-describedby":_.value,focused:M&&f.value===((T=u.value)==null?void 0:T.$el),modelValue:t.value[1],"onUpdate:modelValue":g=>t.value=[t.value[0],g],onFocus:g=>{var C,F,U,B;A(),f.value=(C=u.value)==null?void 0:C.$el,t.value[0]===t.value[1]&&t.value[0]===I.value&&g.relatedTarget!==((F=l.value)==null?void 0:F.$el)&&((U=u.value)==null||U.$el.blur(),(B=l.value)==null||B.$el.focus())},onBlur:()=>{N(),f.value=void 0},min:t.value[0],max:I.value,position:W.value},{"thumb-label":n["thumb-label"]})])}})}),{}}}),be=S({__name:"DemoRangeSliderVertical",setup(e){const s=V([20,40]);return(n,o)=>(R(),k(D,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}}),fe=S({__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],n=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=V([1,2]);return(l,u)=>(R(),k(D,{modelValue:w(o),"onUpdate:modelValue":u[0]||(u[0]=h=>x(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:h})=>[a(me,{icon:n[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}}),Ve=S({__name:"DemoRangeSliderStep",setup(e){const s=V([20,40]);return(n,o)=>(R(),k(D,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}}),_e=S({__name:"DemoRangeSliderColor",setup(e){const s=V([10,60]);return(n,o)=>(R(),k(D,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),color:"success","track-color":"warning"},null,8,["modelValue"]))}}),he=S({__name:"DemoRangeSliderDisabled",setup(e){const s=V([30,60]);return(n,o)=>(R(),k(D,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}}),ge=S({__name:"DemoRangeSliderBasic",setup(e){const s=V([10,60]);return(n,o)=>(R(),k(D,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null)},null,8,["modelValue"]))}}),Se={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},Re={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`},ke={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},$e={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},xe={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},De=d("p",null,[p("The "),d("code",null,"v-slider"),p(" component is a better visualization of the number input.")],-1),ye=d("p",null,[p("You cannot interact with "),d("code",null,"disabled"),p(" sliders.")],-1),Te=d("p",null,[p("Use "),d("code",null,"color"),p(" prop to the sets the slider color. "),d("code",null,"track-color"),p(" prop to sets the color of slider's unfilled track.")],-1),Ce=d("p",null,[d("code",null,"v-range-slider"),p(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Fe=d("p",null,[p(" Using the "),d("code",null,"tick-labels"),p(" prop along with the "),d("code",null,"thumb-label"),p(" slot, you can create a very customized solution. ")],-1),Ue=d("p",null,[p("You can use the "),d("code",null,"vertical"),p(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Ye=S({__name:"range-slider",setup(e){return(s,n)=>{const o=ge,l=pe,u=he,h=_e,j=Ve,P=fe,t=be;return R(),k(ve,null,{default:i(()=>[a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Basic",code:Se},{default:i(()=>[De,a(o)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Disabled",code:ke},{default:i(()=>[ye,a(u)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Color",code:Re},{default:i(()=>[Te,a(h)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Step",code:$e},{default:i(()=>[Ce,a(j)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Thumb label",code:we},{default:i(()=>[Fe,a(P)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Vertical",code:xe},{default:i(()=>[Ue,a(t)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ye as default};
