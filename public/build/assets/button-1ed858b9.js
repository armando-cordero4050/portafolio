import{d as f,l as b,o as i,b as v,w as o,q as t,G as e,s as B,H as W,dK as j,W as u,c as _,Q as n,z as d,n as a,a7 as D,a8 as N}from"./main-3f772619.js";import{a as s,V as h}from"./VRow-0c7e6edd.js";import{_ as R}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import{V as g}from"./VAlert-64b1ca36.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";import"./VAvatar-1d1d21c4.js";import"./VImg-1135bfd9.js";import"./transition-6332bc63.js";import"./VDivider-13482bbd.js";const U=f({__name:"DemoButtonGroup",setup(c){const l=b(1);return(V,p)=>(i(),v(j,{modelValue:B(l),"onUpdate:modelValue":p[0]||(p[0]=r=>W(l)?l.value=r:null),divided:"",color:"primary",variant:"outlined"},{default:o(()=>[t(e,{icon:"tabler-align-left"}),t(e,{icon:"tabler-align-center"}),t(e,{icon:"tabler-align-right"}),t(e,{icon:"tabler-align-justified"})]),_:1},8,["modelValue"]))}}),O={},A={class:"demo-space-x"};function q(c,l){return i(),_("div",A,[t(e,{href:"https://pixinvent.com/"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{href:"https://pixinvent.com/",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[n(" Open New Tab ")]),_:1})])}const G=u(O,[["render",q]]),Q={},Y={class:"demo-space-x"};function F(c,l){return i(),_("div",Y,[t(e,{to:"alert"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{color:"warning",to:{path:"alert"}},{default:o(()=>[n(" Object Path ")]),_:1}),t(e,{color:"success",to:{name:"components-alert"}},{default:o(()=>[n(" Named Router ")]),_:1}),t(e,{color:"secondary",to:{path:"alert",query:{plan:"private"}}},{default:o(()=>[n(" With Query ")]),_:1})])}const H=u(Q,[["render",F]]),K=c=>(D("data-v-a71701c5"),c=c(),N(),c),J={class:"demo-space-x"},M=K(()=>a("span",null,"Loading...",-1)),X={class:"custom-loader"},Z=f({__name:"DemoButtonLoaders",setup(c){const l=b([]),V=p=>{l.value[p]=!0,setTimeout(()=>{l.value[p]=!1},3e3)};return(p,r)=>(i(),_("div",J,[t(e,{loading:B(l)[0],disabled:B(l)[0],color:"primary",onClick:r[0]||(r[0]=m=>V(0))},{default:o(()=>[n(" Accept Terms ")]),_:1},8,["loading","disabled"]),t(e,{loading:B(l)[1],disabled:B(l)[1],color:"secondary",onClick:r[1]||(r[1]=m=>V(1))},{default:o(()=>[n(" Upload "),t(d,{end:"",icon:"tabler-cloud-upload"})]),_:1},8,["loading","disabled"]),t(e,{loading:B(l)[2],disabled:B(l)[2],color:"success",onClick:r[2]||(r[2]=m=>V(2))},{loader:o(()=>[M]),default:o(()=>[n(" Loader slot ")]),_:1},8,["loading","disabled"]),t(e,{loading:B(l)[3],disabled:B(l)[3],color:"info",onClick:r[3]||(r[3]=m=>V(3))},{loader:o(()=>[a("span",X,[t(d,{icon:"tabler-refresh"})])]),default:o(()=>[n(" Icon Loader ")]),_:1},8,["loading","disabled"]),t(e,{loading:B(l)[4],disabled:B(l)[4],color:"warning",icon:"tabler-cloud-upload",onClick:r[4]||(r[4]=m=>V(4))},null,8,["loading","disabled"])]))}});const tt=u(Z,[["__scopeId","data-v-a71701c5"]]),ot={};function nt(c,l){return i(),v(h,null,{default:o(()=>[t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1}),t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{variant:"outlined",block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1})]),_:1})}const et=u(ot,[["render",nt]]),at={},lt={class:"demo-space-x"};function rt(c,l){return i(),_("div",lt,[t(e,{size:"x-large"},{default:o(()=>[n(" Extra large Button ")]),_:1}),t(e,{color:"success",size:"large"},{default:o(()=>[n(" Large Button ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{size:"small",color:"warning"},{default:o(()=>[n(" Small Button ")]),_:1}),t(e,{size:"x-small",color:"error"},{default:o(()=>[n(" Extra small Button ")]),_:1})])}const ct=u(at,[["render",rt]]),st={},it={class:"demo-space-x"};function dt(c,l){return i(),_("div",it,[t(e,{size:"38"},{default:o(()=>[t(d,{icon:"tabler-briefcase",size:"22"})]),_:1}),t(e,{size:"38",color:"secondary"},{default:o(()=>[t(d,{icon:"tabler-user-plus",size:"22"})]),_:1}),t(e,{size:"38",color:"success"},{default:o(()=>[t(d,{icon:"tabler-search",size:"22"})]),_:1}),t(e,{size:"38",color:"info"},{default:o(()=>[t(d,{icon:"tabler-thumb-up",size:"22"})]),_:1}),t(e,{size:"38",color:"warning"},{default:o(()=>[t(d,{icon:"tabler-star",size:"22"})]),_:1}),t(e,{size:"38",color:"error"},{default:o(()=>[t(d,{icon:"tabler-heart",size:"22"})]),_:1})])}const ut=u(st,[["render",dt]]),_t={},Bt={class:"demo-space-x"};function pt(c,l){return i(),_("div",Bt,[t(e,null,{default:o(()=>[n(" Accept "),t(d,{end:"",icon:"tabler-checkbox"})]),_:1}),t(e,{color:"secondary"},{default:o(()=>[t(d,{start:"",icon:"tabler-circle-minus"}),n("Cancel ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Upload "),t(d,{end:"",icon:"tabler-cloud-upload"})]),_:1}),t(e,{color:"info"},{default:o(()=>[t(d,{start:"",icon:"tabler-arrow-left"}),n(" Back ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[t(d,{icon:"tabler-settings"})]),_:1}),t(e,{color:"error"},{default:o(()=>[t(d,{icon:"tabler-circle-off"})]),_:1})])}const Vt=u(_t,[["render",pt]]),mt={},ft={class:"demo-space-x"};function vt(c,l){return i(),_("div",ft,[t(e,{variant:"tonal"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"tonal"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"tonal"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"tonal"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"tonal"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error",variant:"tonal"},{default:o(()=>[n(" Error ")]),_:1})])}const gt=u(mt,[["render",vt]]),bt={},ht={class:"demo-space-x"};function xt(c,l){return i(),_("div",ht,[t(e,{variant:"plain"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"plain"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"plain"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"plain"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"plain"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error",variant:"plain"},{default:o(()=>[n(" Error ")]),_:1})])}const yt=u(bt,[["render",xt]]),wt={},kt={class:"demo-space-x"};function It(c,l){return i(),_("div",kt,[t(e,{variant:"text"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"text",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"text",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"text",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"text",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"text",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const zt=u(wt,[["render",It]]),St={},$t={class:"demo-space-x"};function Et(c,l){return i(),_("div",$t,[t(e,null,{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{rounded:"lg",color:"secondary"},{default:o(()=>[n(" Rounded Button ")]),_:1}),t(e,{rounded:0,color:"success"},{default:o(()=>[n(" Tile Button ")]),_:1}),t(e,{rounded:"pill",color:"info"},{default:o(()=>[n(" Pill Button ")]),_:1})])}const Tt=u(St,[["render",Et]]),Pt={},Lt={class:"demo-space-x"};function Ct(c,l){return i(),_("div",Lt,[t(e,{variant:"flat"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"flat",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"flat",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"flat",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"flat",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"flat",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Wt=u(Pt,[["render",Ct]]),jt={},Dt={class:"demo-space-x"};function Nt(c,l){return i(),_("div",Dt,[t(e,{variant:"outlined"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"outlined",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"outlined",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"outlined",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"outlined",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"outlined",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Rt=u(jt,[["render",Nt]]),Ut={},Ot={class:"demo-space-x"};function At(c,l){return i(),_("div",Ot,[t(e,{color:"primary"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const qt=u(Ut,[["render",At]]),Gt={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},Qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},Yt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Ft={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`},Kt={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="38">
      <VIcon
        icon="tabler-briefcase"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="secondary"
    >
      <VIcon
        icon="tabler-user-plus"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="success"
    >
      <VIcon
        icon="tabler-search"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="info"
    >
      <VIcon
        icon="tabler-thumb-up"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="warning"
    >
      <VIcon
        icon="tabler-star"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="error"
    >
      <VIcon
        icon="tabler-heart"
        size="22"
      />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="38">
      <VIcon
        icon="tabler-briefcase"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="secondary"
    >
      <VIcon
        icon="tabler-user-plus"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="success"
    >
      <VIcon
        icon="tabler-search"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="info"
    >
      <VIcon
        icon="tabler-thumb-up"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="warning"
    >
      <VIcon
        icon="tabler-star"
        size="22"
      />
    </VBtn>

    <VBtn
      size="38"
      color="error"
    >
      <VIcon
        icon="tabler-heart"
        size="22"
      />
    </VBtn>
  </div>
</template>
`},Jt={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},Mt={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`},Xt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Zt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`},to={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},oo={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},no={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},eo={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},ao={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`},lo=a("p",null,[n("The "),a("code",null,"color"),n(" prop is used to change the background color of the alert.")],-1),ro=a("p",null,[n("The "),a("code",null,"outlined"),n(" variant option is used to create outlined buttons.")],-1),co=a("p",null,[n("The "),a("code",null,"flat"),n(" buttons still maintain their background color, but have no box shadow.")],-1),so=a("p",null,[n("Use the "),a("code",null,"rounded"),n(" prop to control the border radius of buttons.")],-1),io=a("p",null,[n("Use "),a("code",null,"text"),n(" variant option to create text button. Text buttons have no box shadow and no background.")],-1),uo=a("p",null,[n("Use "),a("code",null,"plain"),n(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1),_o=a("p",null,[n("Use "),a("code",null,"tonal"),n(" variant option to a create a light background button.")],-1),Bo=a("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1),po=a("p",null,[n("Use "),a("code",null,"VIcon"),n(" component inside button to create buttons that looks like rest of the theme.")],-1),Vo=a("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1),mo=a("p",null,[n("The "),a("code",null,"block"),n(" prop allows buttons to extend the full available width.")],-1),fo=a("p",null,[n("Using the "),a("code",null,"loading"),n(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),a("code",null,"v-progress-circular"),n(" component but this can be customized.")],-1),vo=a("p",null,[n("Use "),a("code",null,"to"),n(" prop to create button with router support.")],-1),go=a("p",null,[n("Designates that the component is a link. This is automatic when using the "),a("code",null,"href"),n(" or "),a("code",null,"to"),n(" prop.")],-1),bo=a("p",null,[n(" Wrap buttons with the "),a("code",null,"v-btn-toggle"),n(" component to create a group button. You can add a visual divider between buttons with the "),a("code",null,"divided"),n(" prop. ")],-1),To=f({__name:"button",setup(c){return(l,V)=>{const p=qt,r=R,m=Rt,x=Wt,y=Tt,w=zt,k=yt,I=gt,z=Vt,S=ut,$=ct,E=et,T=tt,P=H,L=G,C=U;return i(),v(h,null,{default:o(()=>[t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Colors",code:Qt},{default:o(()=>[lo,t(p)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Outlined",code:Xt},{default:o(()=>[ro,t(m)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Flat",code:Yt},{default:o(()=>[co,t(x)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Rounded",code:to},{default:o(()=>[so,t(y)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Text",code:eo},{default:o(()=>[io,t(w)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Plain",code:Zt},{default:o(()=>[uo,t(k)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Tonal",code:ao},{default:o(()=>[_o,t(I)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Icon",code:Ht},{default:o(()=>[Bo,t(z)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Icon Only",code:Kt},{default:o(()=>[po,t(S)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Sizing",code:no},{default:o(()=>[Vo,t($)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Block",code:Gt},{default:o(()=>[mo,t(E)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Loaders",code:Mt},{default:o(()=>[fo,t(T)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Router",code:oo},{default:o(()=>[vo,t(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(P)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Link",code:Jt},{default:o(()=>[go,t(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(L)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Group",code:Ft},{default:o(()=>[bo,t(C)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{To as default};
