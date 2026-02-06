import{m as ce,f as ue,V as pe}from"./VField-95e14b22.js";import{m as re,u as de,a as Y}from"./VInput-e8e8f4b8.js";import{f as me}from"./forwardRefs-a29b5f65.js";import{as as _e,aK as fe,aF as he,aD as Fe,D as z,dN as W,l as g,Y as q,az as Ve,aE as ve,q as e,Z as L,F as j,ba as be,bX as ge,d as x,o as p,b as r,s as U,H,w as o,c as Ie,a as ye,Q as t,y as Ce,W as F,n}from"./main-3f772619.js";import{V as K}from"./VChip-2fda8c84.js";import{V as we}from"./VCounter-f4b5b2c9.js";import{a as c,V as Q}from"./VRow-0c7e6edd.js";import{_ as ze}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import"./easing-9f15041e.js";import"./transition-6332bc63.js";import"./VAvatar-1d1d21c4.js";import"./VImg-1135bfd9.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";import"./VDivider-13482bbd.js";const u=_e()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:l=>typeof l=="boolean"||[1e3,1024].includes(l)},...re({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:l=>fe(l).every(i=>i!=null&&typeof i=="object")},...ce({clearable:!0})},emits:{"click:control":l=>!0,"mousedown:control":l=>!0,"update:focused":l=>!0,"update:modelValue":l=>!0},setup(l,i){let{attrs:_,emit:f,slots:a}=i;const{t:h}=he(),m=Fe(l,"modelValue"),{isFocused:b,focus:A,blur:B}=de(l),S=z(()=>typeof l.showSize!="boolean"?l.showSize:void 0),k=z(()=>(m.value??[]).reduce((s,d)=>{let{size:y=0}=d;return s+y},0)),$=z(()=>W(k.value,S.value)),I=z(()=>(m.value??[]).map(s=>{const{name:d="",size:y=0}=s;return l.showSize?`${d} (${W(y,S.value)})`:d})),R=z(()=>{var d;const s=((d=m.value)==null?void 0:d.length)??0;return l.showSize?h(l.counterSizeString,s,$.value):h(l.counterString,s)}),D=g(),M=g(),V=g();function N(){var s;V.value!==document.activeElement&&((s=V.value)==null||s.focus()),b.value||A()}function X(s){T(s)}function Z(s){f("mousedown:control",s)}function T(s){var d;(d=V.value)==null||d.click(),f("click:control",s)}function G(s){s.stopPropagation(),N(),be(()=>{m.value=[],ge(l["onClick:clear"],s)})}return q(m,s=>{(!Array.isArray(s)||!s.length)&&V.value&&(V.value.value="")}),Ve(()=>{const s=!!(a.counter||l.counter),d=!!(s||a.details),[y,J]=ve(_),[{modelValue:Sl,...ee}]=Y.filterProps(l),[le]=ue(l);return e(Y,L({ref:D,modelValue:m.value,"onUpdate:modelValue":C=>m.value=C,class:["v-file-input",l.class],style:l.style,"onClick:prepend":X},y,ee,{focused:b.value}),{...a,default:C=>{let{id:P,isDisabled:w,isDirty:E,isReadonly:te,isValid:ne}=C;return e(pe,L({ref:M,"prepend-icon":l.prependIcon,onMousedown:Z,onClick:T,"onClick:clear":G,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"]},le,{id:P.value,active:E.value||b.value,dirty:E.value,disabled:w.value,focused:b.value,error:ne.value===!1}),{...a,default:oe=>{var O;let{props:{class:ae,...ie}}=oe;return e(j,null,[e("input",L({ref:V,type:"file",readonly:te.value,disabled:w.value,multiple:l.multiple,name:l.name,onClick:v=>{v.stopPropagation(),N()},onChange:v=>{if(!v.target)return;const se=v.target;m.value=[...se.files??[]]},onFocus:N,onBlur:B},ie,J),null),e("div",{class:ae},[!!((O=m.value)!=null&&O.length)&&(a.selection?a.selection({fileNames:I.value,totalBytes:k.value,totalBytesReadable:$.value}):l.chips?I.value.map(v=>e(K,{key:v,size:"small",color:l.color},{default:()=>[v]})):I.value.join(", "))])])}})},details:d?C=>{var P,w;return e(j,null,[(P=a.details)==null?void 0:P.call(a,C),s&&e(j,null,[e("span",null,null),e(we,{active:!!((w=m.value)!=null&&w.length),value:R.value},a.counter)])])}:void 0})}),me({},D,M,V)}}),Se=x({__name:"DemoFileInputLoading",setup(l){const i=g(),_=g(!0);return q(i,()=>{_.value=!i.value[0]}),(f,a)=>(p(),r(u,{modelValue:U(i),"onUpdate:modelValue":a[0]||(a[0]=h=>H(i)?i.value=h:null),loading:U(_),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}}),ke=x({__name:"DemoFileInputSelectionSlot",setup(l){const i=g([]);return(_,f)=>(p(),r(u,{modelValue:U(i),"onUpdate:modelValue":f[0]||(f[0]=a=>H(i)?i.value=a:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"tabler-paperclip"},{selection:o(({fileNames:a})=>[(p(!0),Ie(j,null,ye(a,h=>(p(),r(K,{key:h,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:o(()=>[t(Ce(h),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}}),$e=x({__name:"DemoFileInputValidation",setup(l){const i=[_=>!_||!_.length||_[0].size<1e6||"Avatar size should be less than 1 MB!"];return(_,f)=>(p(),r(u,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"tabler-camera"}))}}),De={};function Pe(l,i){return p(),r(u,{"show-size":"",label:"File input"})}const je=F(De,[["render",Pe]]),xe={};function Ae(l,i){return p(),r(u,{label:"File input","prepend-icon":"tabler-camera"})}const Be=F(xe,[["render",Ae]]),Re={};function Ne(l,i){return p(),r(u,{multiple:"",label:"File input"})}const Le=F(Re,[["render",Ne]]),Ue={};function Me(l,i){return p(),r(u,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Te=F(Ue,[["render",Me]]),Ee={};function Oe(l,i){return p(),r(u,{chips:"",label:"File input w/ chips"})}const Ye=F(Ee,[["render",Oe]]),We={};function qe(l,i){return p(),r(u,{accept:"image/*",label:"File input"})}const He=F(We,[["render",qe]]),Ke={};function Qe(l,i){return p(),r(Q,null,{default:o(()=>[e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Outlined"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Filled",variant:"filled"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Solo",variant:"solo"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Plain",variant:"plain"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const Xe=F(Ke,[["render",Qe]]),Ze={};function Ge(l,i){return p(),r(u,{label:"File input",density:"compact"})}const Je=F(Ze,[["render",Ge]]),el={};function ll(l,i){return p(),r(u,{label:"File input"})}const tl=F(el,[["render",ll]]),nl={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},ol={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},al={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},il={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},sl={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},cl={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},ul={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},pl={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`},rl={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},dl={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},ml={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`},_l={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},fl=n("p",null,[t("The "),n("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),hl=n("p",null,[t("You can reduces the file input height with "),n("code",null,"density"),t(" prop. Available options are: "),n("code",null,"default"),t(", "),n("code",null,"comfortable"),t(", and "),n("code",null,"compact"),t(".")],-1),Fl=n("p",null,[t("use "),n("code",null,"solo"),t(", "),n("code",null,"filled"),t(", "),n("code",null,"outlined"),t(", "),n("code",null,"plain"),t(" and "),n("code",null,"underlined"),t(" option of "),n("code",null,"variant"),t(" prop to change the look of file input.")],-1),Vl=n("p",null,[n("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),vl=n("p",null,[t("Use "),n("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),bl=n("p",null,[t("When using the "),n("code",null,"show-size"),t(" property along with "),n("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),gl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),n("code",null,"multiple"),t(" prop. ")],-1),Il=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" has a default "),n("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),yl=n("p",null,[t("The displayed size of the selected file(s) can be configured with the "),n("code",null,"show-size"),t(" property.")],-1),Cl=n("p",null,[t("You can use the "),n("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),wl=n("p",null,[t("Using the "),n("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),zl=n("p",null,[t("Use "),n("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),Ol=x({__name:"file-input",setup(l){return(i,_)=>{const f=tl,a=ze,h=Je,m=Xe,b=He,A=Ye,B=Te,S=Le,k=Be,$=je,I=$e,R=ke,D=Se;return p(),r(Q,{class:"match-height"},{default:o(()=>[e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Basic",code:ol},{default:o(()=>[fl,e(f)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Density",code:sl},{default:o(()=>[hl,e(h)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:o(()=>[e(a,{title:"Variant",code:_l},{default:o(()=>[Fl,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Accept",code:nl},{default:o(()=>[Vl,e(b)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Chips",code:al},{default:o(()=>[vl,e(A)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Counter",code:il},{default:o(()=>[bl,e(B)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Multiple",code:ul},{default:o(()=>[gl,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Prepend icon",code:pl},{default:o(()=>[Il,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Show size",code:dl},{default:o(()=>[yl,e($)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Validation",code:ml},{default:o(()=>[Cl,e(I)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Selection slot",code:rl},{default:o(()=>[wl,e(R)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Loading",code:cl},{default:o(()=>[zl,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ol as default};
