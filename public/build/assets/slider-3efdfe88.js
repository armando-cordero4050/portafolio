import{d as h,l as V,D as z,o as b,c as $,n as a,y as R,s as n,q as e,w as l,b as f,I as T,A as I,J as M,z as L,G as S,H as m,F as D,a7 as O,a8 as E,W as k,Q as d}from"./main-3f772619.js";import{V as Y}from"./VAvatar-1d1d21c4.js";import{V as p}from"./VSlider-9ea350f9.js";import{_ as A}from"./AppTextField.vue_vue_type_script_setup_true_lang-b9010814.js";import{a as N}from"./VImg-1135bfd9.js";import{a as c,V as x}from"./VRow-0c7e6edd.js";import{_ as G}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import"./VSliderTrack-16ef92dc.js";import"./VInput-e8e8f4b8.js";import"./transition-6332bc63.js";import"./VTextField-0defed1e.js";/* empty css                   */import"./VField-95e14b22.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-f4b5b2c9.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";import"./VCard-59875098.js";import"./VDivider-13482bbd.js";const q=_=>(O("data-v-b105f5d8"),_=_(),E(),_),H={class:"d-flex justify-space-between ma-4"},J=["textContent"],Q=q(()=>a("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),W=h({__name:"DemoSliderAppendAndPrepend",setup(_){const t=V(40),s=40,i=218,r=V(!1),o=z(()=>t.value<100?"primary":t.value<125?"success":t.value<140?"info":t.value<175?"warning":"error"),u=z(()=>`${60/t.value}s`),v=()=>{t.value>s&&(t.value-=1)},w=()=>{t.value<i&&(t.value+=1)};return(g,C)=>(b(),$(D,null,[a("div",H,[a("div",null,[a("span",{class:"text-6xl font-weight-light",textContent:R(n(t))},null,8,J),Q,e(M,null,{default:l(()=>[n(r)?(b(),f(Y,{key:0,color:n(o),style:T({animationDuration:n(u)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):I("",!0)]),_:1})]),a("div",null,[e(S,{color:n(o),icon:"",elevation:"0",onClick:C[0]||(C[0]=y=>r.value=!n(r))},{default:l(()=>[e(L,{size:"large",icon:n(r)?"tabler-pause":"tabler-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:n(t),"onUpdate:modelValue":C[1]||(C[1]=y=>m(t)?t.value=y:null),color:n(o),step:1,min:s,max:i,"track-color":"secondary"},{prepend:l(()=>[e(S,{size:"small",variant:"text",icon:"tabler-minus",color:n(o),onClick:v},null,8,["color"])]),append:l(()=>[e(S,{size:"small",variant:"text",icon:"tabler-plus",color:n(o),onClick:w},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}});const K=k(W,[["__scopeId","data-v-b105f5d8"]]),X={style:{"inline-size":"7rem"}},Z={style:{"inline-size":"7rem"}},ee={style:{"inline-size":"7rem"}},le=h({__name:"DemoSliderAppendTextField",setup(_){const t=V(161),s=V(105),i=V(255);return(r,o)=>{const u=A;return b(),$(D,null,[e(N,{style:T({background:`rgb(${n(t)}, ${n(s)}, ${n(i)})`}),height:"150px"},null,8,["style"]),e(x,{class:"mt-5"},{default:l(()=>[e(c,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":o[1]||(o[1]=v=>m(t)?t.value=v:null),max:255,step:1,"prepend-icon":"tabler-letter-r"},{append:l(()=>[a("div",X,[e(u,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=v=>m(t)?t.value=v:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=v=>m(s)?s.value=v:null),max:255,step:1,"prepend-icon":"tabler-letter-g"},{append:l(()=>[a("div",Z,[e(u,{modelValue:n(s),"onUpdate:modelValue":o[2]||(o[2]=v=>m(s)?s.value=v:null),type:"number",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[5]||(o[5]=v=>m(i)?i.value=v:null),max:255,step:1,"prepend-icon":"tabler-letter-b"},{append:l(()=>[a("div",ee,[e(u,{modelValue:n(i),"onUpdate:modelValue":o[4]||(o[4]=v=>m(i)?i.value=v:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}}),te=h({__name:"DemoSliderVertical",setup(_){const t=V(10);return(s,i)=>(b(),f(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>m(t)?t.value=r:null),direction:"vertical"},null,8,["modelValue"]))}}),oe=a("div",{class:"text-caption"}," Show ticks when using slider ",-1),ae=a("div",{class:"text-caption"}," Always show ticks ",-1),se=a("div",{class:"text-caption"}," Tick size ",-1),ne=a("div",{class:"text-caption"}," Tick labels ",-1),ie=h({__name:"DemoSliderTicks",setup(_){const t=V(0),s=V(1),i={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(r,o)=>(b(),f(x,null,{default:l(()=>[e(c,{cols:"12"},{default:l(()=>[oe,e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=u=>m(t)?t.value=u:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[ae,e(p,{modelValue:n(t),"onUpdate:modelValue":o[1]||(o[1]=u=>m(t)?t.value=u:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[se,e(p,{modelValue:n(t),"onUpdate:modelValue":o[2]||(o[2]=u=>m(t)?t.value=u:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[ne,e(p,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=u=>m(s)?s.value=u:null),ticks:i,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}}),re=a("div",{class:"text-caption"}," Show thumb when using slider ",-1),de=a("div",{class:"text-caption"}," Always show thumb label ",-1),ce=a("div",{class:"text-caption"}," Custom thumb size ",-1),ue=a("div",{class:"text-caption"}," Custom thumb label ",-1),me=h({__name:"DemoSliderThumb",setup(_){const t=["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],s=V(45);return(i,r)=>(b(),f(x,null,{default:l(()=>[e(c,{cols:"12"},{default:l(()=>[re,e(p,{modelValue:n(s),"onUpdate:modelValue":r[0]||(r[0]=o=>m(s)?s.value=o:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[de,e(p,{modelValue:n(s),"onUpdate:modelValue":r[1]||(r[1]=o=>m(s)?s.value=o:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[ce,e(p,{modelValue:n(s),"onUpdate:modelValue":r[2]||(r[2]=o=>m(s)?s.value=o:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[ue,e(p,{modelValue:n(s),"onUpdate:modelValue":r[3]||(r[3]=o=>m(s)?s.value=o:null),"thumb-label":"always"},{"thumb-label":l(({modelValue:o})=>[d(R(t[Math.min(Math.floor(o/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),pe={};function Ve(_,t){return b(),f(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const ve=k(pe,[["render",Ve]]),_e=h({__name:"DemoSliderMinAndMax",setup(_){const t=V(-50),s=V(90),i=V(40);return(r,o)=>{const u=A;return b(),f(p,{modelValue:n(i),"onUpdate:modelValue":o[1]||(o[1]=v=>m(i)?i.value=v:null),max:n(s),min:n(t),step:1},{append:l(()=>[e(u,{modelValue:n(i),"onUpdate:modelValue":o[0]||(o[0]=v=>m(i)?i.value=v:null),type:"number",style:{"inline-size":"100px"}},null,8,["modelValue"])]),_:1},8,["modelValue","max","min"])}}}),be=h({__name:"DemoSliderValidation",setup(_){const t=V(30),s=[i=>i<=40||"Only 40 in stock"];return(i,r)=>(b(),f(p,{modelValue:n(t),"onUpdate:modelValue":r[0]||(r[0]=o=>m(t)?t.value=o:null),error:n(t)>40,rules:s,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}}),fe=h({__name:"DemoSliderStep",setup(_){const t=V(0);return(s,i)=>(b(),f(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>m(t)?t.value=r:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue","step"]))}}),he=h({__name:"DemoSliderIcons",setup(_){const t=V(0),s=V(0),i=V(10);return(r,o)=>(b(),f(x,null,{default:l(()=>[e(c,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=u=>m(t)?t.value=u:null),"prepend-icon":"tabler-volume"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=u=>m(s)?s.value=u:null),"append-icon":"tabler-alarm"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=u=>m(i)?i.value=u:null),"append-icon":"tabler-minus","prepend-icon":"tabler-plus"},null,8,["modelValue"])]),_:1})]),_:1}))}}),xe=a("div",{class:"text-caption"}," color ",-1),Ce=a("div",{class:"text-caption"}," track-color ",-1),ye=a("div",{class:"text-caption"}," thumb-color ",-1),we=h({__name:"DemoSliderColors",setup(_){const t=V(25),s=V(75),i=V(50);return(r,o)=>(b(),f(x,null,{default:l(()=>[e(c,{cols:"12"},{default:l(()=>[xe,e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=u=>m(t)?t.value=u:null),color:"error"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[Ce,e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=u=>m(s)?s.value=u:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[ye,e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=u=>m(i)?i.value=u:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}}),Se={},ke=a("div",{class:"text-caption"}," Disabled ",-1),ge=a("div",{class:"text-caption"}," Readonly ",-1);function ze(_,t){return b(),f(x,null,{default:l(()=>[e(c,{cols:"12"},{default:l(()=>[ke,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(c,{cols:"12"},{default:l(()=>[ge,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const $e=k(Se,[["render",ze]]),Re=h({__name:"DemoSliderBasic",setup(_){const t=V(30);return(s,i)=>(b(),f(x,null,{default:l(()=>[e(c,{cols:"12"},{default:l(()=>[e(p)]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>m(t)?t.value=r:null)},null,8,["modelValue"])]),_:1})]),_:1}))}}),Te={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},De={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-r"
      >
        <template #append>
          <div style="inline-size: 7rem;">
            <AppTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-g"
      >
        <template #append>
          <div style="inline-size: 7rem;">
            <AppTextField
              v-model="greenColorValue"
              type="number"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-b"
      >
        <template #append>
          <div style="inline-size: 7rem;">
            <AppTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-r"
      >
        <template #append>
          <div style="inline-size: 7rem;">
            <AppTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-g"
      >
        <template #append>
          <div style="inline-size: 7rem;">
            <AppTextField
              v-model="greenColorValue"
              type="number"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-b"
      >
        <template #append>
          <div style="inline-size: 7rem;">
            <AppTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},Ue={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Fe={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <AppTextField
        v-model="slider"
        type="number"
        style="inline-size: 100px;"
      />
    </template>
  </VSlider>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <AppTextField
        v-model="slider"
        type="number"
        style="inline-size: 100px;"
      />
    </template>
  </VSlider>
</template>
`},Pe={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '☹️',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Oe={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Ee={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Ye=a("p",null,[d("The "),a("code",null,"v-slider"),d(" component is a better visualization of the number input.")],-1),Ne=a("p",null,[d("You cannot interact with "),a("code",null,"disabled"),d(" and "),a("code",null,"readonly"),d(" sliders.")],-1),Ge=a("p",null,[d("You can set the colors of the slider using the props "),a("code",null,"color"),d(", "),a("code",null,"track-color"),d(" and "),a("code",null,"thumb-color"),d(".")],-1),qe=a("p",null,[d("You can add icons to the slider with the "),a("code",null,"append-icon"),d(" and "),a("code",null,"prepend-icon"),d(" props.")],-1),He=a("p",null,[d("Using the "),a("code",null,"step"),d(" prop you can control the precision of the slider, and how much it should move each step.")],-1),Je=a("p",null,[d("Vuetify includes simple validation through the "),a("code",null,"rules"),d(" prop.")],-1),Qe=a("p",null,[d("You can set "),a("code",null,"min"),d(" and "),a("code",null,"max"),d(" values of sliders.")],-1),We=a("p",null,[d("Use "),a("code",null,"thumb-size"),d(", "),a("code",null,"tick-size"),d(", and "),a("code",null,"track-size"),d(" prop to increase and decrease the size of thumb, tick and track. ")],-1),Ke=a("p",null,[d("You can display a thumb label while sliding or always with the "),a("code",null,"thumb-label"),d(" prop.")],-1),Xe=a("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),Ze=a("p",null,[d(" You can use the "),a("code",null,"vertical"),d(" prop to switch sliders to a vertical orientation. ")],-1),el=a("p",null,[d("Sliders can be combined with other components in its "),a("code",null,"append"),d(" slot, such as "),a("code",null,"v-text-field"),d(", to add additional functionality to the component.")],-1),ll=a("p",null,[d("Use slots such as "),a("code",null,"append"),d(" and "),a("code",null,"prepend"),d(" to easily customize the "),a("code",null,"v-slider"),d(" to fit any situation.")],-1),Cl=h({__name:"slider",setup(_){return(t,s)=>{const i=Re,r=G,o=$e,u=we,v=he,w=fe,g=be,C=_e,y=ve,U=me,F=ie,j=te,B=le,P=K;return b(),f(x,{class:"match-height"},{default:l(()=>[e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Basic",code:Ae},{default:l(()=>[Ye,e(i)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Disabled and Readonly",code:Fe},{default:l(()=>[Ne,e(o)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Colors",code:Ue},{default:l(()=>[Ge,e(u)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Icons",code:je},{default:l(()=>[qe,e(v)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Step",code:Ie},{default:l(()=>[He,e(w)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Validation",code:Oe},{default:l(()=>[Je,e(g)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Min and Max",code:Be},{default:l(()=>[Qe,e(C)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Size",code:Pe},{default:l(()=>[We,e(y)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Thumb",code:Me},{default:l(()=>[Ke,e(U)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Ticks",code:Le},{default:l(()=>[Xe,e(F)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Vertical",code:Ee},{default:l(()=>[Ze,e(j)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Append text field",code:De},{default:l(()=>[el,e(B)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Append and prepend",code:Te},{default:l(()=>[ll,e(P)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Cl as default};
