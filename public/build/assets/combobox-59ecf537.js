import{_ as x,V as _}from"./AppCombobox.vue_vue_type_script_setup_true_lang-01390995.js";import{d as b,l as d,o as V,b as g,s as r,H as u,Y as P,ba as A,w as o,q as t,Q as n,n as a,y as v}from"./main-3f772619.js";import{a as D,b as w}from"./VList-0fef076a.js";import{a as p,V as h}from"./VRow-0c7e6edd.js";import{V as U}from"./VChip-2fda8c84.js";import{V as L}from"./VAvatar-1d1d21c4.js";import{_ as k}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import"./VInput-e8e8f4b8.js";import"./transition-6332bc63.js";import"./VSelect-71e7b68e.js";import"./VTextField-0defed1e.js";/* empty css                   */import"./VField-95e14b22.js";import"./easing-9f15041e.js";import"./VImg-1135bfd9.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-f4b5b2c9.js";import"./dialog-transition-6d5a70b3.js";import"./VMenu-967601e6.js";import"./VOverlay-6f080a03.js";import"./lazy-8d4ca870.js";import"./VCheckboxBtn-6ff3878e.js";import"./VSelectionControl-3fa884ca.js";import"./filter-4b6cadd9.js";import"./ssrBoot-4dae7a50.js";import"./VDivider-13482bbd.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";const R=b({__name:"DemoComboboxClearable",setup(f){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const s=x;return V(),g(s,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=i=>u(e)?e.value=i:null),items:m,label:"Combobox",multiple:"",clearable:""},null,8,["modelValue"])}}}),$=a("kbd",null,"enter",-1),N=b({__name:"DemoComboboxNoDataWithChips",setup(f){const e=["Gaming","Programming","Vue","Vuetify"],m=d(["Vuetify"]),c=d(null);return P(m,l=>{l.length>5&&A(()=>m.value.pop())}),(l,s)=>{const i=x;return V(),g(i,{modelValue:r(m),"onUpdate:modelValue":s[0]||(s[0]=C=>u(m)?m.value=C:null),"search-input":r(c),"onUpdate:searchInput":s[1]||(s[1]=C=>u(c)?c.value=C:null),items:e,"hide-selected":"","hide-no-data":!1,hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":o(()=>[t(D,null,{default:o(()=>[t(w,null,{default:o(()=>[n(' No results matching "'),a("strong",null,v(r(c)),1),n('". Press '),$,n(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}}),T={style:{"margin-top":"1px"},class:"text-xs"},S=b({__name:"DemoComboboxMultiple",setup(f){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const s=x;return V(),g(h,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(s,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=i=>u(e)?e.value=i:null),items:m,label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(s,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=i=>u(e)?e.value=i:null),items:m,label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(s,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=i=>u(e)?e.value=i:null),label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(s,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=i=>u(e)?e.value=i:null),items:m,label:"I use selection slot",multiple:""},{selection:o(({item:i})=>[t(U,null,{default:o(()=>[t(L,{start:"",color:"primary"},{default:o(()=>[a("span",T,v(String(i.title).charAt(0).toUpperCase()),1)]),_:2},1024),n(" "+v(i.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),j=b({__name:"DemoComboboxVariant",setup(f){const e=d(["Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>(V(),g(h,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(_,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=s=>u(e)?e.value=s:null),items:m,multiple:"",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(_,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=s=>u(e)?e.value=s:null),multiple:"",items:m,variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(_,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=s=>u(e)?e.value=s:null),multiple:"",items:m,variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(_,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=s=>u(e)?e.value=s:null),multiple:"",items:m,variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(_,{modelValue:r(e),"onUpdate:modelValue":l[4]||(l[4]=s=>u(e)?e.value=s:null),multiple:"",items:m,variant:"plain",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}}),B=b({__name:"DemoComboboxDensity",setup(f){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const s=x;return V(),g(s,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=i=>u(e)?e.value=i:null),items:m,label:"Combobox",density:"compact",multiple:""},null,8,["modelValue"])}}}),M=b({__name:"DemoComboboxBasic",setup(f){const e=d("Programming"),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const s=x;return V(),g(s,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=i=>u(e)?e.value=i:null),items:m},null,8,["modelValue"])}}}),W={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`},F={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`},G={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`},O={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip>
            <VAvatar
              start
              color="primary"
            >
              <span
                style="margin-top: 1px;"
                class="text-xs"
              >{{ String(item.title).charAt(0).toUpperCase() }}</span>
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip>
            <VAvatar
              start
              color="primary"
            >
              <span
                style="margin-top: 1px;"
                class="text-xs"
              >{{ String(item.title).charAt(0).toUpperCase() }}</span>
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`},Y={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`},q={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},H=a("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),Q=a("p",null,[n(" You can use "),a("code",null,"Density"),n(" prop to reduce combobox height and lower max height of list items. Available options are: "),a("code",null,"default"),n(", "),a("code",null,"comfortable"),n(", and "),a("code",null,"compact"),n(". ")],-1),z=a("p",null,[n("Use "),a("code",null,"solo"),n(", "),a("code",null,"outlined"),n(", "),a("code",null,"underlined"),n(", "),a("code",null,"filled"),n(" and "),a("code",null,"plain"),n(" options of "),a("code",null,"variant"),n(" prop to change the look of combobox. ")],-1),E=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),J=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),K=a("p",null,[n("Use "),a("code",null,"clearable"),n(" prop to clear combobox.")],-1),Ae=b({__name:"combobox",setup(f){return(e,m)=>{const c=M,l=k,s=B,i=j,C=S,y=N,I=R;return V(),g(h,{class:"match-height"},{default:o(()=>[t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Basic",code:W},{default:o(()=>[H,t(c)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Density",code:G},{default:o(()=>[Q,t(s)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Variant",code:q},{default:o(()=>[z,t(i)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Multiple",code:O},{default:o(()=>[E,t(C)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"No data with chips",code:Y},{default:o(()=>[J,t(y)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Clearable",code:F},{default:o(()=>[K,t(I)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ae as default};
