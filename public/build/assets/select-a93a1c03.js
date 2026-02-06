import{_ as f}from"./AppSelect.vue_vue_type_script_setup_true_lang-2075f231.js";import{d as p,l as v,o as d,b as u,w as a,q as e,n as o,y as B,s as b,H as S,ai as w,aj as x,a2 as O,a0 as k,a1 as y,Q as s}from"./main-3f772619.js";import{V as G}from"./VChip-2fda8c84.js";import{V as $}from"./VAvatar-1d1d21c4.js";import{a as n,V as C}from"./VRow-0c7e6edd.js";import{V as A}from"./VSelect-71e7b68e.js";import{_ as j}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import"./VInput-e8e8f4b8.js";import"./transition-6332bc63.js";import"./VImg-1135bfd9.js";import"./VTextField-0defed1e.js";/* empty css                   */import"./VField-95e14b22.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-f4b5b2c9.js";import"./VList-0fef076a.js";import"./ssrBoot-4dae7a50.js";import"./VDivider-13482bbd.js";import"./dialog-transition-6d5a70b3.js";import"./VMenu-967601e6.js";import"./VOverlay-6f080a03.js";import"./lazy-8d4ca870.js";import"./VCheckboxBtn-6ff3878e.js";import"./VSelectionControl-3fa884ca.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";const N=p({__name:"DemoSelectSelectionSlot",setup(_){const t=[{name:"Sandra Adams",avatar:w},{name:"Ali Connors",avatar:x},{name:"Trevor Hansen",avatar:O},{name:"Tucker Smith",avatar:k},{name:"Britta Holt",avatar:y}],i=v(["Sandra Adams"]);return(m,l)=>{const c=f;return d(),u(c,{modelValue:b(i),"onUpdate:modelValue":l[0]||(l[0]=r=>S(i)?i.value=r:null),items:t,"item-title":"name","item-value":"name",label:"Select Item",multiple:"",clearable:"","clear-icon":"tabler-x"},{selection:a(({item:r})=>[e(G,null,{default:a(()=>[e($,{start:"",image:r.raw.avatar},null,8,["image"]),o("span",null,B(r.title),1)]),_:2},1024)]),_:1},8,["modelValue"])}}}),T=p({__name:"DemoSelectMultiple",setup(_){const t=v(["Alabama"]),i=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(m,l)=>{const c=f;return d(),u(c,{modelValue:b(t),"onUpdate:modelValue":l[0]||(l[0]=r=>S(t)?t.value=r:null),items:i,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":""},null,8,["modelValue"])}}}),U=p({__name:"DemoSelectMenuProps",setup(_){const t=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=f;return d(),u(l,{items:t,"menu-props":{transition:"scroll-y-transition"},label:"Label"})}}}),M=p({__name:"DemoSelectChips",setup(_){const t=["foo","bar","fizz","buzz"],i=v(["foo","bar","fizz","buzz"]);return(m,l)=>{const c=f;return d(),u(c,{modelValue:b(i),"onUpdate:modelValue":l[0]||(l[0]=r=>S(i)?i.value=r:null),items:t,label:"Chips",chips:"",multiple:""},null,8,["modelValue"])}}}),H=p({__name:"DemoSelectIcons",setup(_){const t=v("Florida"),i=v("Texas"),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(l,c)=>{const r=f;return d(),u(C,null,{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[e(r,{modelValue:b(t),"onUpdate:modelValue":c[0]||(c[0]=V=>S(t)?t.value=V:null),items:m,label:"Select","prepend-icon":"tabler-map","single-line":"",variant:"filled"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(r,{modelValue:b(i),"onUpdate:modelValue":c[1]||(c[1]=V=>S(i)?i.value=V:null),items:m,"append-icon":"tabler-map",label:"Select","single-line":"",variant:"filled"},null,8,["modelValue"])]),_:1})]),_:1})}}}),R=p({__name:"DemoSelectCustomTextAndValue",setup(_){const t=v({state:"Florida",abbr:"FL"}),i=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(m,l)=>{const c=f;return d(),u(c,{modelValue:b(t),"onUpdate:modelValue":l[0]||(l[0]=r=>S(t)?t.value=r:null),hint:`${b(t).state}, ${b(t).abbr}`,items:i,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":""},null,8,["modelValue","hint"])}}}),L=p({__name:"DemoSelectVariant",setup(_){const t=["Foo","Bar","Fizz","Buzz"];return(i,m)=>(d(),u(C,null,{default:a(()=>[e(n,{cols:"12",sm:"6"},{default:a(()=>[e(A,{items:t,label:"Outlined"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(A,{items:t,label:"Filled",variant:"filled"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(A,{items:t,label:"Solo",variant:"solo"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(A,{items:t,label:"Plain",variant:"plain"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(A,{items:t,label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1}))}}),P=p({__name:"DemoSelectDensity",setup(_){const t=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=f;return d(),u(l,{items:t,label:"Density",density:"compact"})}}}),Y=p({__name:"DemoSelectBasic",setup(_){const t=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=f;return d(),u(l,{items:t,label:"Standard"})}}}),I={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
  />
</template>
`},E={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    label="Chips"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    label="Chips"
    chips
    multiple
  />
</template>
`},q={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
`},Q={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
  />
</template>
`},J={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
      />
    </VCol>
  </VRow>
</template>
`},K={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
  />
</template>
`},W={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
  />
</template>
`},X={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.avatar"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.avatar"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`},Z={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},ee=o("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),te=o("p",null,[s("You can use "),o("code",null,"density"),s(" prop to reduce the field height and lower max height of list items.")],-1),ae=o("p",null,[s(" Use "),o("code",null,"filled"),s(", "),o("code",null,"outlined"),s(", "),o("code",null,"solo"),s(", "),o("code",null,"underlined"),s(" and "),o("code",null,"plain"),s(" options of "),o("code",null,"variant"),s(" prop to change appearance of select. ")],-1),le=o("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),oe=o("p",null,[s("Use a custom "),o("code",null,"prepend"),s(" or "),o("code",null,"appended"),s(" icon.")],-1),se=o("p",null,[s("Use "),o("code",null,"chips"),s(" prop to make selected option as chip.")],-1),ie=o("p",null,[s("Custom props can be passed directly to "),o("code",null,"v-menu"),s(" using "),o("code",null,"menuProps"),s(" prop.")],-1),ne=o("p",null,[s("Use "),o("code",null,"multiple"),s(" prop to select multiple option.")],-1),re=o("p",null,[s("The "),o("code",null,"selection"),s(" slot can be used to customize the way selected values are shown in the input.")],-1),Ne=p({__name:"select",setup(_){return(t,i)=>{const m=Y,l=j,c=P,r=L,V=R,z=H,g=M,h=U,F=T,D=N;return d(),u(C,null,{default:a(()=>[e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Basic",code:I},{default:a(()=>[ee,e(m)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Density",code:Q},{default:a(()=>[te,e(c)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(l,{title:"Variant",code:Z},{default:a(()=>[ae,e(r)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Custom text and value",code:q},{default:a(()=>[le,e(V)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Icons",code:J},{default:a(()=>[oe,e(z)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Chips",code:E},{default:a(()=>[se,e(g)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Menu Props",code:K},{default:a(()=>[ie,e(h)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Multiple",code:W},{default:a(()=>[ne,e(F)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Selection slot",code:X},{default:a(()=>[re,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ne as default};
