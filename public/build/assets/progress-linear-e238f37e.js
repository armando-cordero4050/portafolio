import{W as _,o as u,c as g,q as e,ao as s,d as y,l as f,s as v,H as h,w as a,n as r,y as L,b,aQ as k,aP as $,Y as M,Q as o}from"./main-3f772619.js";import{_ as x}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import{a as p,V as I}from"./VRow-0c7e6edd.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";import"./VAvatar-1d1d21c4.js";import"./VImg-1135bfd9.js";import"./transition-6332bc63.js";import"./VDivider-13482bbd.js";const D={},U={class:"demo-space-y"};function T(m,l){return u(),g("div",U,[e(s,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(s,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(s,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const j=_(D,[["render",T]]),C={class:"demo-space-y"},R=y({__name:"DemoProgressLinearSlots",setup(m){const l=f(20),c=f(33),d=f(78);return(n,i)=>(u(),g("div",C,[e(s,{modelValue:v(d),"onUpdate:modelValue":i[0]||(i[0]=t=>h(d)?d.value=t:null),color:"primary",height:"8"},null,8,["modelValue"]),e(s,{modelValue:v(l),"onUpdate:modelValue":i[1]||(i[1]=t=>h(l)?l.value=t:null),color:"primary",height:"20"},{default:a(({value:t})=>[r("strong",null,L(Math.ceil(t))+"%",1)]),_:1},8,["modelValue"]),e(s,{modelValue:v(c),"onUpdate:modelValue":i[2]||(i[2]=t=>h(c)?c.value=t:null),height:"20",color:"primary"},{default:a(()=>[r("strong",null,L(Math.ceil(v(c)))+"%",1)]),_:1},8,["modelValue"])]))}}),S={},N={class:"demo-space-y"};function Y(m,l){return u(),g("div",N,[e(s,{"model-value":"78",height:"8",color:"primary",rounded:!1}),e(s,{"model-value":"20",color:"primary",height:"20",rounded:!1}),e(s,{"model-value":"33",height:"20",color:"primary",rounded:!1})])}const Q=_(S,[["render",Y]]),q={};function A(m,l){return u(),b(s,{color:"primary",indeterminate:"",reverse:""})}const E=_(q,[["render",A]]),H={};function W(m,l){return u(),b(s,{indeterminate:"",color:"primary"})}const z=_(H,[["render",W]]),F={class:"demo-space-y"},G=y({__name:"DemoProgressLinearBuffering",setup(m){const l=f(10),c=f(20),d=f(),n=()=>{clearInterval(d.value),d.value=setInterval(()=>{l.value+=Math.random()*(15-5)+5,c.value+=Math.random()*(15-5)+6},2e3)};return k(n),$(()=>{clearInterval(d.value)}),M(l,()=>{if(l.value<100)return!1;l.value=0,c.value=10,n()}),(i,t)=>(u(),g("div",F,[e(s,{modelValue:v(l),"onUpdate:modelValue":t[0]||(t[0]=V=>h(l)?l.value=V:null),color:"primary",height:"8","buffer-value":v(c)},null,8,["modelValue","buffer-value"])]))}}),J={},K={class:"demo-space-y"};function O(m,l){return u(),g("div",K,[e(s,{"model-value":"15","bg-color":"primary",color:"primary"}),e(s,{"model-value":"30","bg-color":"secondary",color:"secondary"}),e(s,{"model-value":"45","bg-color":"success",color:"success"})])}const X=_(J,[["render",O]]),Z={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},ee={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},re={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},oe={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},le={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`},ae={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`},se={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},te=r("p",null,[o("Use the props "),r("code",null,"color"),o(" and "),r("code",null,"background-color"),o(" to set colors.")],-1),ne=r("p",null,[o("The primary value is controlled by "),r("code",null,"v-model"),o(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),o(" prop.")],-1),ce=r("p",null,[o("for continuously animating progress bar,use prop "),r("code",null,"indeterminate"),o(". This indicates continuous process. ")],-1),de=r("p",null,[o("Use prop "),r("code",null,"reverse"),o(" to animate continuously in reverse direction. The component also has RTL support.")],-1),ie=r("p",null,[o(" The "),r("code",null," rounded "),o("prop is used to apply a border radius to the v-progress-linear component. By default we have set "),r("code",null,"rounded"),o(" prop true. You can disable it by using "),r("code",null,":rounded='false'"),o(". ")],-1),ue=r("p",null,[o("The v-progress-linear component will be responsive to user input when using "),r("code",null,"v-model"),o(". You can use the default slot or bind a local model to display inside of the progress.")],-1),me=r("p",null,[o(" The "),r("code",null,"striped"),o(" prop is used to apply striped background.")],-1),Le=y({__name:"progress-linear",setup(m){return(l,c)=>{const d=X,n=x,i=G,t=z,V=E,P=Q,w=R,B=j;return u(),b(I,{class:"match-height"},{default:a(()=>[e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Color",code:ee},{default:a(()=>[te,e(d)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Buffering",code:Z},{default:a(()=>[ne,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Indeterminate",code:re},{default:a(()=>[ce,e(t)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Reversed",code:oe},{default:a(()=>[de,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Rounded",code:le},{default:a(()=>[ie,e(P)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Slots",code:ae},{default:a(()=>[ue,e(w)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Striped",code:se},{default:a(()=>[me,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Le as default};
