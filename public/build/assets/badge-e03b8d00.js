import{d as v,o as g,c as _,q as t,w as a,s,ai as d,b as w,F as D,a as k,Q as o,y as O,l as B,dQ as I,z as m,n,G as b,W as $}from"./main-3f772619.js";import{V as i}from"./VAvatar-1d1d21c4.js";import{V as l}from"./VImg-1135bfd9.js";import{V as e}from"./VBadge-fdd01f85.js";import{a as S,V as W}from"./VTabs-04ab421c.js";import{_ as C}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import{a as u,V as E}from"./VRow-0c7e6edd.js";import"./transition-6332bc63.js";import"./VSlideGroup-d748e8be.js";import"./easing-9f15041e.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";import"./VDivider-13482bbd.js";const j={class:"demo-space-x"},N=v({__name:"DemoBadgeMaximumValue",setup(V){return(c,f)=>(g(),_("div",j,[t(e,{content:"99",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{content:"100",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{content:"1000",max:"999","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1})]))}}),M=v({__name:"DemoBadgeTabs",setup(V){const c=[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}];return(f,p)=>(g(),w(W,{grow:""},{default:a(()=>[(g(),_(D,null,k(c,r=>t(S,{key:r.content,value:r.content},{default:a(()=>[t(e,{content:r.badge,"offset-x":-18,"offset-y":6},{default:a(()=>[o(O(r.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1}))}}),Y={class:"demo-space-x"},P=v({__name:"DemoBadgeShowOnHover",setup(V){const c=B(),f=B(),p=B(),r=I(f),x=I(c),h=I(p);return(z,A)=>(g(),_("div",Y,[t(e,{content:"3",transition:"slide-x-transition","model-value":s(r)},{default:a(()=>[t(m,{ref_key:"tRefTwitterBadge",ref:f,size:"25",icon:"tabler-brand-twitter"},null,512)]),_:1},8,["model-value"]),t(e,{content:"5",transition:"scale-transition","model-value":s(x)},{default:a(()=>[t(m,{ref_key:"tRefInstagramBadge",ref:c,size:"25",icon:"tabler-brand-instagram"},null,512)]),_:1},8,["model-value"]),t(e,{content:"1",transition:"slide-x-transition","model-value":s(h)},{default:a(()=>[t(m,{ref_key:"tRefWhatsappBadge",ref:p,size:"25",icon:"tabler-brand-whatsapp"},null,512)]),_:1},8,["model-value"])]))}}),F={class:"d-flex align-center"},Q={class:"demo-space-x"},U=v({__name:"DemoBadgeDynamicNotifications",setup(V){const c=B();return(f,p)=>(g(),_("div",F,[t(e,{content:s(c),"model-value":!!s(c),color:"success",class:"me-5"},{default:a(()=>[t(m,{size:"40",icon:"tabler-brand-vue"})]),_:1},8,["content","model-value"]),n("div",Q,[t(b,{onClick:p[0]||(p[0]=r=>c.value=(s(c)||0)+1)},{default:a(()=>[o(" Send Message ")]),_:1}),t(b,{color:"error",onClick:p[1]||(p[1]=r=>c.value=0)},{default:a(()=>[o(" Clear Notifications ")]),_:1})])]))}}),q={class:"demo-space-x"},G=v({__name:"DemoBadgeAvatarStatus",setup(V){return(c,f)=>(g(),_("div",q,[t(e,{dot:"",bordered:"",color:"success",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{dot:"",bordered:"",color:"warning",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{dot:"",bordered:"",color:"error",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1})]))}}),L={class:"demo-space-x"},J=v({__name:"DemoBadgeIcon",setup(V){return(c,f)=>(g(),_("div",L,[t(e,null,{badge:a(()=>[t(m,{icon:"tabler-bulb"})]),default:a(()=>[t(i,null,{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{icon:"tabler-lock-open"},{default:a(()=>[t(i,null,{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1})]))}}),K={class:"demo-space-x"},X=v({__name:"DemoBadgePosition",setup(V){return(c,f)=>(g(),_("div",K,[t(e,{content:"1",location:"end top"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{location:"bottom start",content:"2"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{location:"bottom end",content:"3"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{location:"top start",content:"4"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1})]))}}),Z={},tt={class:"demo-space-x"};function at(V,c){return g(),_("div",tt,[t(e,{dot:"",color:"primary"},{default:a(()=>[t(m,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(e,{dot:"",color:"secondary"},{default:a(()=>[t(m,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(e,{dot:"",color:"success"},{default:a(()=>[t(m,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(e,{dot:"",color:"info"},{default:a(()=>[t(m,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(e,{dot:"",color:"warning"},{default:a(()=>[t(m,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(e,{dot:"",color:"error"},{default:a(()=>[t(m,{size:"25",icon:"tabler-brand-instagram"})]),_:1})])}const et=$(Z,[["render",at]]),ot={class:"demo-space-x d-flex align-center flex-wrap"},nt=v({__name:"DemoBadgeStyle",setup(V){return(c,f)=>(g(),_("div",ot,[t(e,{content:"1"},{default:a(()=>[t(b,{variant:"tonal"},{default:a(()=>[o(" Default ")]),_:1})]),_:1}),t(e,{content:"5",bordered:""},{default:a(()=>[t(b,{variant:"tonal"},{default:a(()=>[o(" Border ")]),_:1})]),_:1}),t(e,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{inline:"",content:"5"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(e,{rounded:"sm",content:"5"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1})]))}}),st={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},rt={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>
  </div>
</template>
`},ct={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="tabler-brand-vue"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="tabler-brand-vue"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},dt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="tabler-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="tabler-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="tabler-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="tabler-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},it={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},lt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},mt={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="tabler-brand-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="tabler-brand-whatsapp"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="tabler-brand-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="tabler-brand-whatsapp"
      />
    </VBadge>
  </div>
</template>
`},gt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ft={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},pt=n("p",null,[o("You can use various props like "),n("code",null,"bordered"),o(", "),n("code",null,"dot"),o(", "),n("code",null,"inline"),o(", "),n("code",null,"rounded"),o(" etc. to style the badge.")],-1),Vt=n("p",null,[o("Use "),n("code",null,"color"),o(" prop to create various background badges.")],-1),ut=n("p",null,[o("You can use "),n("code",null,"location"),o(" prop to change the position of the badge. Possible values are "),n("code",null,"top-end"),o(", "),n("code",null,"bottom-end"),o(", "),n("code",null,"bottom-start"),o(", "),n("code",null,"top-start"),o(".")],-1),vt=n("p",null,[o("You can use "),n("code",null,"icon"),o(" prop or use "),n("code",null,"slot"),o(" to render the icon")],-1),_t=n("p",null,"You can use badge with avatar as status.",-1),Bt=n("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1),bt=n("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1),xt=n("p",null,"Badges help convey information to the user in a variety of ways.",-1),ht=n("p",null,[o("Use "),n("code",null,"max"),o(" prop to cap the value of the badge content")],-1),Wt=v({__name:"badge",setup(V){return(c,f)=>{const p=nt,r=C,x=et,h=X,z=J,A=G,y=U,T=P,R=M,H=N;return g(),w(E,{class:"match-height"},{default:a(()=>[t(u,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Style",code:gt},{default:a(()=>[pt,t(p)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Color",code:rt},{default:a(()=>[Vt,t(x)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Position",code:lt},{default:a(()=>[ut,t(h)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Icon",code:dt},{default:a(()=>[vt,t(z)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Avatar Status",code:st},{default:a(()=>[_t,t(A)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Dynamic notifications",code:ct},{default:a(()=>[Bt,t(y)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Show on hover",code:mt},{default:a(()=>[bt,t(T)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Tabs",code:ft},{default:a(()=>[xt,t(R)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Maximum Value",code:it},{default:a(()=>[ht,t(H)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Wt as default};
