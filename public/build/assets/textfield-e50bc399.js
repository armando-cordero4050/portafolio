import{_ as x}from"./AppTextField.vue_vue_type_script_setup_true_lang-b9010814.js";import{d as T,l as _,o as u,b as f,w as l,q as e,z as F,Z as U,Q as n,J as S,s as p,aq as q,V as j,x as N,G as L,c as B,A as W,H as g,W as h,n as t}from"./main-3f772619.js";import{V as E}from"./VTooltip-eca949c1.js";import{a as s,V as C}from"./VRow-0c7e6edd.js";import{r as H,e as z}from"./validators-33c369bf.js";import{V as Y}from"./VForm-726cd563.js";import{V as w}from"./VTextField-0defed1e.js";import{_ as O}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import"./VInput-e8e8f4b8.js";import"./transition-6332bc63.js";import"./VOverlay-6f080a03.js";import"./lazy-8d4ca870.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./index-681711bc.js";/* empty css                   */import"./VField-95e14b22.js";import"./VImg-1135bfd9.js";import"./VCounter-f4b5b2c9.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";import"./VAvatar-1d1d21c4.js";import"./VDivider-13482bbd.js";const G={key:0,class:"ms-3"},J=T({__name:"DemoTextfieldIconSlots",setup(b){const a=_("Hey!"),o=_(!1),m=()=>{o.value=!0,a.value="Wait for it...",setTimeout(()=>{o.value=!1,a.value="You've clicked me!"},2e3)};return(i,d)=>{const c=x;return u(),f(c,{modelValue:p(a),"onUpdate:modelValue":d[0]||(d[0]=r=>g(a)?a.value=r:null),clearable:"",label:"Message",type:"text",class:"textfield-demo-icon-slot"},{prepend:l(()=>[e(E,{location:"bottom"},{activator:l(({props:r})=>[e(F,U(r,{icon:"tabler-help"}),null,16)]),default:l(()=>[n(" I'm a tooltip ")]),_:1})]),"append-inner":l(()=>[e(S,{"leave-absolute":""},{default:l(()=>[p(o)?(u(),f(q,{key:0,color:"info",indeterminate:""})):(u(),f(p(j),{key:1,class:"text-2xl",nodes:p(N).app.logo},null,8,["nodes"]))]),_:1})]),append:l(()=>[e(L,{icon:i.$vuetify.display.smAndDown,onClick:m},{default:l(()=>[e(F,{icon:"tabler-viewfinder"}),i.$vuetify.display.mdAndUp?(u(),B("span",G,"Click me")):W("",!0)]),_:1},8,["icon"])]),_:1},8,["modelValue"])}}});const Q=h(J,[["__scopeId","data-v-069113d5"]]),Z=T({__name:"DemoTextfieldPasswordInput",setup(b){const a=_(!1),o=_(!0),m=_("Password"),i=_("wqfasds"),d={required:c=>!!c||"Required.",min:c=>c.length>=8||"Min 8 characters"};return(c,r)=>{const V=x;return u(),f(C,null,{default:l(()=>[e(s,{cols:"12",sm:"6"},{default:l(()=>[e(V,{modelValue:p(m),"onUpdate:modelValue":r[0]||(r[0]=v=>g(m)?m.value=v:null),"append-inner-icon":p(a)?"tabler-eye-off":"tabler-eye",rules:[d.required,d.min],type:p(a)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:appendInner":r[1]||(r[1]=v=>a.value=!p(a))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(s,{cols:"12",sm:"6"},{default:l(()=>[e(V,{modelValue:p(i),"onUpdate:modelValue":r[2]||(r[2]=v=>g(i)?i.value=v:null),"append-inner-icon":p(o)?"tabler-eye-off":"tabler-eye",rules:[d.required,d.min],type:p(o)?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters","onClick:appendInner":r[3]||(r[3]=v=>o.value=!p(o))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1})]),_:1})}}}),K={},X=t("strong",null,"icon",-1);function ee(b,a){const o=x;return u(),f(o,null,{label:l(()=>[n(" What about  "),X,n(" here? "),e(F,{icon:"tabler-file-search"})]),_:1})}const le=h(K,[["render",ee]]),te=T({__name:"DemoTextfieldIconEvents",setup(b){const a=_("Hey!"),o=_(!0),m=_(0),i=()=>{o.value=!o.value},d=()=>{a.value=""},c=()=>{m.value=0},r=()=>{c(),d()};return(V,v)=>{const y=x;return u(),f(y,{modelValue:p(a),"onUpdate:modelValue":v[0]||(v[0]=A=>g(a)?a.value=A:null),clearable:"",type:"text",label:"Message",color:"primary","clear-icon":"tabler-circle-x","append-icon":p(a)?V.$vuetify.locale.isRtl?"tabler-arrow-big-left-lines":"tabler-arrow-big-right-lines":"tabler-microphone","append-inner-icon":p(o)?"tabler-map-pin":"tabler-map-pin-off","onClick:appendInner":i,"onClick:append":r,"onClick:clear":d},null,8,["modelValue","append-icon","append-inner-icon"])}}}),oe=T({__name:"DemoTextfieldValidation",setup(b){const a=_("");return(o,m)=>{const i=x;return u(),f(Y,null,{default:l(()=>[e(i,{modelValue:p(a),"onUpdate:modelValue":m[0]||(m[0]=d=>g(a)?a.value=d:null),rules:[p(H),p(z)],label:"E-mail"},null,8,["modelValue","rules"])]),_:1})}}}),ne={};function ae(b,a){const o=x;return u(),f(o,{label:"Regular","single-line":""})}const se=h(ne,[["render",ae]]),ie=T({__name:"DemoTextfieldPrefixesAndSuffixes",setup(b){const a=_(10.05),o=_(28.02),m=_("example"),i=_("04:56");return(d,c)=>{const r=x;return u(),f(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(r,{modelValue:p(a),"onUpdate:modelValue":c[0]||(c[0]=V=>g(a)?a.value=V:null),label:"Amount",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(r,{modelValue:p(o),"onUpdate:modelValue":c[1]||(c[1]=V=>g(o)?o.value=V:null),label:"Weight",suffix:"lbs",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(r,{modelValue:p(m),"onUpdate:modelValue":c[2]||(c[2]=V=>g(m)?m.value=V:null),label:"Email address",suffix:"@gmail.com"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(r,{modelValue:p(i),"onUpdate:modelValue":c[3]||(c[3]=V=>g(i)?i.value=V:null),label:"Label Text",type:"time",suffix:"PST"},null,8,["modelValue"])]),_:1})]),_:1})}}}),re={};function pe(b,a){const o=x;return u(),f(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Prepend","prepend-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Prepend Inner","prepend-inner-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Append","append-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Append Inner","append-inner-icon":"tabler-map-pin"})]),_:1})]),_:1})}const ce=h(re,[["render",pe]]),de={};function me(b,a){const o=x;return u(),f(o,{color:"success",label:"First name"})}const ue=h(de,[["render",me]]),fe={};function _e(b,a){const o=x;return u(),f(o,{label:"Regular",clearable:""})}const be=h(fe,[["render",_e]]),Ve=T({__name:"DemoTextfieldCounter",setup(b){const a=_("Preliminary report"),o=_("California is a state in the western United States"),m=[i=>i.length<=25||"Max 25 characters"];return(i,d)=>{const c=x;return u(),f(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(c,{modelValue:p(a),"onUpdate:modelValue":d[0]||(d[0]=r=>g(a)?a.value=r:null),rules:m,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(c,{modelValue:p(o),"onUpdate:modelValue":d[1]||(d[1]=r=>g(o)?o.value=r:null),rules:m,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1})}}}),xe={};function ge(b,a){const o=x;return u(),f(C,null,{default:l(()=>[e(s,null,{default:l(()=>[e(o,{label:"Disabled",disabled:""})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Readonly",readonly:""})]),_:1})]),_:1})}const ve=h(xe,[["render",ge]]),he={};function Te(b,a){return u(),f(C,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Outlined"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Filled",variant:"filled"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Solo",variant:"solo"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Plain",variant:"plain"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const Ce=h(he,[["render",Te]]),we={};function ye(b,a){const o=x;return u(),f(o,{label:"Compact",density:"compact"})}const Ae=h(we,[["render",ye]]),Fe={};function ke(b,a){const o=x;return u(),f(o,{label:"Regular"})}const Re=h(Fe,[["render",ke]]),Ie={ts:`<template>
  <AppTextField label="Regular" />
</template>
`,js:`<template>
  <AppTextField label="Regular" />
</template>
`},$e={ts:`<template>
  <AppTextField
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    clearable
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Pe={ts:`<template>
  <AppTextField
    color="success"
    label="First name"
  />
</template>
`,js:`<template>
  <AppTextField
    color="success"
    label="First name"
  />
</template>
`},De={ts:`<template>
  <AppTextField
    label="Compact"
    density="compact"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Compact"
    density="compact"
  />
</template>
`},Ue={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},Se={ts:`<script lang="ts" setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
.textfield-demo-icon-slot {
  :deep(.v-input) {
    align-content: center;

    .v-input__prepend,
    .v-input__append {
      padding-block-start: 0 !important;
    }

    .v-input__prepend {
      align-items: center;
    }

    .v-field__append-inner .v-progress-circular svg {
      block-size: 1.3em;
      inline-size: 1.3em;
    }

    .v-field__append-inner svg {
      margin-block-start: 0.1rem;
    }
  }
}
</style>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
.textfield-demo-icon-slot {
  :deep(.v-input) {
    align-content: center;

    .v-input__prepend,
    .v-input__append {
      padding-block-start: 0 !important;
    }

    .v-input__prepend {
      align-items: center;
    }

    .v-field__append-inner .v-progress-circular svg {
      block-size: 1.3em;
      inline-size: 1.3em;
    }

    .v-field__append-inner svg {
      margin-block-start: 0.1rem;
    }
  }
}
</style>
`},qe={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`,js:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`},Ne={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<template>
  <AppTextField
    label="Regular"
    single-line
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    single-line
  />
</template>
`},We={ts:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Ee={ts:`<script lang="ts" setup>
import { emailValidator, requiredValidator } from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`},He={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},ze=t("p",null,"Text fields components are used for collecting user provided information.",-1),Ye=t("p",null,[n("The "),t("code",null,"density"),n(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),t("code",null,"default"),n(", "),t("code",null,"comfortable"),n(", and "),t("code",null,"compact"),n(".")],-1),Oe=t("p",null,[n("Use "),t("code",null,"solo"),n(", "),t("code",null,"filled"),n(", "),t("code",null,"outlined"),n(", "),t("code",null,"plain"),n(" and "),t("code",null,"underlined"),n(" option of "),t("code",null,"variant"),n(" prop to change the look of the textfield. ")],-1),Ge=t("p",null,"Text fields can be disabled or readonly.",-1),Je=t("p",null,[n("Use a "),t("code",null,"counter"),n(" prop to inform a user of the character limit.")],-1),Qe=t("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Ze=t("p",null,[n("Use "),t("code",null,"color"),n(" prop to change the input border color.")],-1),Ke=t("p",null,[n("You can add icons to the text field with "),t("code",null,"prepend-icon"),n(", "),t("code",null,"append-icon"),n(" and "),t("code",null,"append-inner-icon"),n(" and "),t("code",null,"prepend-inner-icon"),n(" props.")],-1),Xe=t("p",null,[n("The "),t("code",null,"prefix"),n(" and "),t("code",null,"suffix"),n(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),el=t("p",null,[t("code",null,"single-line"),n(" text fields do not float their label on focus or with data.")],-1),ll=t("p",null,[n("Vuetify includes simple validation through the "),t("code",null,"rules"),n(" prop.")],-1),tl=t("p",null,[t("code",null,"click:prepend"),n(", "),t("code",null,"click:append"),n(", "),t("code",null,"click:append-inner"),n(", and "),t("code",null,"click:clear"),n(" will be emitted when you click on the respective icon")],-1),ol=t("p",null,[n("Text field label can be defined in "),t("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1),nl=t("p",null,[n("Using the HTML input "),t("code",null,"type"),n(" password can be used with an appended icon and callback to control the visibility.")],-1),al=t("p",null,[n("Instead of using "),t("code",null,"prepend"),n("/"),t("code",null,"append"),n("/"),t("code",null,"append-inner"),n(" icons you can use slots to extend input's functionality.")],-1),Rl=T({__name:"textfield",setup(b){return(a,o)=>{const m=Re,i=O,d=Ae,c=Ce,r=ve,V=Ve,v=be,y=ue,A=ce,k=ie,R=se,I=oe,$=te,M=le,P=Z,D=Q;return u(),f(C,{class:"match-height"},{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Basic",code:Ie},{default:l(()=>[ze,e(m)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Density",code:De},{default:l(()=>[Ye,e(d)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{title:"Variant",code:He},{default:l(()=>[Oe,e(c)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"State",code:We},{default:l(()=>[Ge,e(r)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Counter",code:Me},{default:l(()=>[Je,e(V)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Clearable",code:$e},{default:l(()=>[Qe,e(v)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Custom Colors",code:Pe},{default:l(()=>[Ze,e(y)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Icons",code:qe},{default:l(()=>[Ke,e(A)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Prefixes and suffixes",code:Le},{default:l(()=>[Xe,e(k)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Single line",code:Be},{default:l(()=>[el,e(R)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Validation",code:Ee},{default:l(()=>[ll,e(I)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Icon events",code:Ue},{default:l(()=>[tl,e($)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Label Slot",code:je},{default:l(()=>[ol,e(M)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Password input",code:Ne},{default:l(()=>[nl,e(P)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Icon slots",code:Se},{default:l(()=>[al,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Rl as default};
