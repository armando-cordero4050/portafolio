import{a as g,V as f}from"./VRow-0c7e6edd.js";import{V as I}from"./VInput-e8e8f4b8.js";import{V as z}from"./VCheckbox-3ee887fa.js";import{d as b,l as _,bp as y,Y as R,s as i,o as u,b as m,w as l,c as k,F as W,a as V,Z as x,q as n,t as w,n as p,H as d,A as v,W as $,p as U,z as B,y as h}from"./main-3f772619.js";import{a as G,V as S}from"./VRadioGroup-f2187263.js";import{_ as F}from"./CustomRadiosWithIcon-3baa61fe.js";import{V as E}from"./VSpacer-95ea05c9.js";import{_ as P}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import{_ as T}from"./CustomRadios-35d508e5.js";import"./transition-6332bc63.js";import"./VCheckboxBtn-6ff3878e.js";import"./VSelectionControl-3fa884ca.js";import"./VAvatar-1d1d21c4.js";import"./VImg-1135bfd9.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";import"./VDivider-13482bbd.js";const L=["src"],O=b({__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:null,checkboxContent:null,gridColumn:null},emits:["update:selectedCheckbox"],setup(r,{emit:a}){const o=r,t=_(structuredClone(y(o.selectedCheckbox)));return R(t,()=>{a("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&i(t)?(u(),m(f,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>d(t)?t.value=e:null)},{default:l(()=>[(u(!0),k(W,null,V(o.checkboxContent,e=>(u(),m(g,x({key:e.value},r.gridColumn),{default:l(()=>[n(I,{class:w(["custom-input custom-checkbox rounded cursor-pointer w-100",i(t).includes(e.value)?"active":""])},{default:l(()=>[p("div",null,[n(z,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=C=>d(t)?t.value=C:null),value:e.value},null,8,["modelValue","value"])]),p("img",{src:e.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,L)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):v("",!0)}});const J=$(O,[["__scopeId","data-v-0c0fb1f1"]]),N="/build/assets/custom-checkbox-img-1-ddd1830d.png",A="/build/assets/custom-checkbox-img-2-29d00053.png",q="/build/assets/custom-checkbox-img-3-757d0417.png",H=b({__name:"DemoCustomInputCustomCheckboxesWithImage",setup(r){const a=[{bgImage:N,value:"basic"},{bgImage:A,value:"premium"},{bgImage:q,value:"enterprise"}],o=_(["basic"]);return(t,c)=>{const s=J;return u(),m(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>d(o)?o.value=e:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),Y=["src"],Z=b({__name:"CustomRadiosWithImage",props:{selectedRadio:null,radioContent:null,gridColumn:null},emits:["update:selectedRadio"],setup(r,{emit:a}){const o=r,t=_(structuredClone(y(o.selectedRadio)));return R(t,()=>{a("update:selectedRadio",t.value)}),(c,s)=>o.radioContent?(u(),m(S,{key:0,modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=e=>d(t)?t.value=e:null)},{default:l(()=>[n(f,null,{default:l(()=>[(u(!0),k(W,null,V(o.radioContent,e=>(u(),m(g,x({key:e.bgImage},r.gridColumn),{default:l(()=>[n(I,{class:w(["custom-input custom-radio rounded cursor-pointer w-100",i(t)===e.value?"active":""])},{default:l(()=>[p("img",{src:e.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,Y),n(G,{value:e.value},null,8,["value"])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):v("",!0)}});const K=$(Z,[["__scopeId","data-v-a62424c5"]]),M="/build/assets/custom-radio-img-1-c79a4486.png",Q="/build/assets/custom-radio-img-2-926adb21.png",X="/build/assets/custom-radio-img-3-e12a57bb.png",ee=b({__name:"DemoCustomInputCustomRadiosWithImage",setup(r){const a=[{bgImage:M,value:"basic"},{bgImage:Q,value:"premium"},{bgImage:X,value:"enterprise"}],o=_("basic");return(t,c)=>{const s=K;return u(),m(s,{"selected-radio":i(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>d(o)?o.value=e:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),te={class:"d-flex flex-column align-center text-center gap-2"},oe={class:"cr-title text-base"},se={class:"text-sm clamp-text mb-0"},ce=b({__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:null,checkboxContent:null,gridColumn:null},emits:["update:selectedCheckbox"],setup(r,{emit:a}){const o=r,t=_(structuredClone(y(o.selectedCheckbox)));return R(t,()=>{a("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&i(t)?(u(),m(f,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>d(t)?t.value=e:null)},{default:l(()=>[(u(!0),k(W,null,V(o.checkboxContent,e=>(u(),m(g,x({key:e.title},r.gridColumn),{default:l(()=>[n(I,{class:w(["custom-input custom-checkbox-icon rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:l(()=>[U(c.$slots,"default",{item:e},()=>[p("div",te,[n(B,x(e.icon,{class:"text-high-emphasis"}),null,16),p("h6",oe,h(e.title),1),p("p",se,h(e.desc),1)])],!0),p("div",null,[n(z,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=C=>d(t)?t.value=C:null),value:e.value},null,8,["modelValue","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3},8,["modelValue"])):v("",!0)}});const ne=$(ce,[["__scopeId","data-v-82e186cc"]]),le=b({__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(r){const a=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"tabler-server-2",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"tabler-ban",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"tabler-lock",size:"28"}}],o=_(["basic"]);return(t,c)=>{const s=ne;return u(),m(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>d(o)?o.value=e:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),ae=b({__name:"DemoCustomInputCustomRadiosWithIcon",setup(r){const a=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"tabler-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"tabler-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"tabler-crown",size:"28"}}],o=_("basic");return(t,c)=>{const s=F;return u(),m(s,{"selected-radio":i(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>d(o)?o.value=e:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),ie={class:"flex-grow-1"},ue={class:"d-flex align-center mb-1"},re={class:"cr-title text-base"},me={key:0,class:"text-disabled text-base"},de={class:"text-sm mb-0"},pe=b({__name:"CustomCheckboxes",props:{selectedCheckbox:null,checkboxContent:null,gridColumn:null},emits:["update:selectedCheckbox"],setup(r,{emit:a}){const o=r,t=_(structuredClone(y(o.selectedCheckbox)));return R(t,()=>{a("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&i(t)?(u(),m(f,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>d(t)?t.value=e:null)},{default:l(()=>[(u(!0),k(W,null,V(o.checkboxContent,e=>(u(),m(g,x({key:e.title},r.gridColumn),{default:l(()=>[n(I,{class:w(["custom-input custom-checkbox rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:l(()=>[p("div",null,[n(z,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=C=>d(t)?t.value=C:null),value:e.value},null,8,["modelValue","value"])]),U(c.$slots,"default",{item:e},()=>[p("div",ie,[p("div",ue,[p("h6",re,h(e.title),1),n(E),e.subtitle?(u(),k("span",me,h(e.subtitle),1)):v("",!0)]),p("p",de,h(e.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3},8,["modelValue"])):v("",!0)}});const be=$(pe,[["__scopeId","data-v-ba8bb427"]]),ge=b({__name:"DemoCustomInputCustomCheckboxes",setup(r){const a=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],o=_(["basic"]);return(t,c)=>{const s=be;return u(),m(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>d(o)?o.value=e:null),"checkbox-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}}),_e=b({__name:"DemoCustomInputCustomRadios",setup(r){const a=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],o=_("basic");return(t,c)=>{const s=T;return u(),m(s,{"selected-radio":i(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>d(o)?o.value=e:null),"radio-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}}),Ce={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'tabler-server-2', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'tabler-ban', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'tabler-lock', size: '28' },
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: {
      icon: 'tabler-server-2',
      size: '28',
    },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: {
      icon: 'tabler-ban',
      size: '28',
    },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: {
      icon: 'tabler-lock',
      size: '28',
    },
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ke={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},xe={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},ve={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: { icon: 'tabler-rocket', size: '28' },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: { icon: 'tabler-star', size: '28' },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: { icon: 'tabler-crown', size: '28' },
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: {
      icon: 'tabler-rocket',
      size: '28',
    },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: {
      icon: 'tabler-star',
      size: '28',
    },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: {
      icon: 'tabler-crown',
      size: '28',
    },
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},fe={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Te=b({__name:"custom-input",setup(r){return(a,o)=>{const t=_e,c=P,s=ge,e=ae,C=le,D=ee,j=H;return u(),m(f,null,{default:l(()=>[n(g,{cols:"12",md:"6"},{default:l(()=>[n(c,{title:"Custom Radios",code:xe},{default:l(()=>[n(t)]),_:1},8,["code"])]),_:1}),n(g,{cols:"12",md:"6"},{default:l(()=>[n(c,{title:"Custom Checkboxes",code:Ce},{default:l(()=>[n(s)]),_:1},8,["code"])]),_:1}),n(g,{cols:"12",md:"6"},{default:l(()=>[n(c,{title:"Custom Radios With Icon",code:ve},{default:l(()=>[n(e)]),_:1},8,["code"])]),_:1}),n(g,{cols:"12",md:"6"},{default:l(()=>[n(c,{title:"Custom Checkboxes With Icon",code:he},{default:l(()=>[n(C)]),_:1},8,["code"])]),_:1}),n(g,{cols:"12",md:"6"},{default:l(()=>[n(c,{title:"Custom Radios With Image",code:fe},{default:l(()=>[n(D)]),_:1},8,["code"])]),_:1}),n(g,{cols:"12",md:"6"},{default:l(()=>[n(c,{title:"Custom Checkboxes With Image",code:ke},{default:l(()=>[n(j)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Te as default};
